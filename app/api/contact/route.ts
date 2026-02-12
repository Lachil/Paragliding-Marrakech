// app/api/contact/route.ts
import nodemailer from "nodemailer";

// ---- simple in-memory rate limiter (per instance) ----
const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQ_PER_WINDOW = 5;
const ipHits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const arr = ipHits.get(ip)?.filter(ts => now - ts < WINDOW_MS) || [];
  arr.push(now);
  ipHits.set(ip, arr);
  return arr.length > MAX_REQ_PER_WINDOW;
}

// ---- helpers ----
const isEmail = (v: unknown) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v ?? "").trim());
const isPhone = (v: unknown) => !v || /^[0-9+()\-.\s]{6,20}$/.test(String(v ?? "").trim());
const clean = (v: unknown, max = 1000) =>
  String(v ?? "").replace(/<[^>]*>?/gm, "").trim().slice(0, max);

function isGibberish(text?: string) {
  if (!text || text.length < 5) return false;
  const str = text.toLowerCase().replace(/[^a-z]/g, "");
  if (str.length < 5) return false;
  if (/[bcdfghjklmnpqrstvwxyz]{7,}/.test(str)) return true;
  if (str.length > 10) {
    const vowels = (str.match(/[aeiou]/g) || []).length;
    if (vowels / str.length < 0.1) return true;
  }
  return false;
}

const SUSPICIOUS_EMAIL_DOMAINS = [
  "tempmail.com","guerrillamail.com","10minutemail.com","throwaway.email",
  "mailinator.com","trashmail.com","yopmail.com","maildrop.cc"
];

function hasSuspiciousEmail(email: string) {
  const domain = email.toLowerCase().split("@")[1];
  return SUSPICIOUS_EMAIL_DOMAINS.some(d => domain?.includes(d));
}

function getClientIp(req: Request) {
  const raw = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "";
  const m = raw.match(/(\d{1,3}\.){3}\d{1,3}/);
  return m ? m[0] : raw || "unknown";
}

function ipToInt(ip: string) {
  const parts = ip.split(".").map(n => parseInt(n, 10));
  if (parts.length !== 4 || parts.some(Number.isNaN)) return null;
  return ((parts[0] << 24) >>> 0) + (parts[1] << 16) + (parts[2] << 8) + parts[3];
}
function isDeniedIp(ip: string, denylist: string[]) {
  if (!ip || ip === "unknown") return false;
  for (const rule of denylist) {
    if (!rule) continue;
    if (rule.endsWith(".")) { if (ip.startsWith(rule)) return true; }
    else if (rule.includes("/")) {
      const [base, bitsStr] = rule.split("/");
      const bits = parseInt(bitsStr, 10);
      const ipN = ipToInt(ip), baseN = ipToInt(base);
      if (ipN == null || baseN == null || !(bits >= 0 && bits <= 32)) continue;
      const mask = bits === 0 ? 0 : (~((1 << (32 - bits)) - 1) >>> 0);
      if ((ipN! & mask) === (baseN! & mask)) return true;
    } else { if (ip === rule) return true; }
  }
  return false;
}

function hasSuspiciousNamePattern(name?: string) {
  if (!name) return false;
  const cleaned = name.trim();
  if (cleaned.length > 150) return true;
  if (cleaned.length > 12 && cleaned === cleaned.toUpperCase() && !/\s/.test(cleaned) && /^[A-Z]+$/.test(cleaned)) {
    return true;
  }
  const upper = (cleaned.match(/[A-Z]/g) || []).length;
  const lower = (cleaned.match(/[a-z]/g) || []).length;
  const tot = upper + lower;
  if (tot >= 10 && tot === cleaned.length && !/\s/.test(cleaned)) {
    if (upper / tot > 0.5) return true;
  }
  return false;
}

// ---- API (App Router) ----
export async function POST(request: Request) {
  const clientIp = getClientIp(request);
  const IP_DENYLIST = [
    "88.210.70.0/24",
    "195.26.225.209",
    "212.34.140.200",
    "91.201.115.174",
  ];
  if (isDeniedIp(clientIp, IP_DENYLIST)) {
    return Response.json({ message: "Forbidden (blocked IP)" }, { status: 403 });
  }

  try {
    if (rateLimited(clientIp)) {
      return Response.json({ message: "Too many requests, try later." }, { status: 429 });
    }

    const body = await request.json().catch(() => ({}));
    const {
      name, email, phone, message,
      pid, adults, persAdult, childrenOver10, childrenUnder10,
      date, group, withQuad, withBuggy, withTransport,
      company // Honeypot
      // NOTE: recaptchaToken entfernt
    } = body || {};

    // Honeypot
    if (company && String(company).trim() !== "") {
      return Response.json({ message: "Bot detected." }, { status: 400 });
    }

    // Spam/Validierung
    const rawName = String(name || "").trim();
    const rawEmail = String(email || "").trim();
    if (rawName && isGibberish(rawName)) {
      return Response.json({ message: "Invalid name format." }, { status: 400 });
    }
    if (rawName && hasSuspiciousNamePattern(rawName)) {
      return Response.json({ message: "Invalid name format." }, { status: 400 });
    }
    if (rawEmail && hasSuspiciousEmail(rawEmail)) {
      return Response.json({ message: "Please use a valid email address." }, { status: 400 });
    }

    const c = {
      name: clean(name, 120),
      email: clean(email, 200),
      phone: clean(phone, 40),
      message: clean(message, 5000),
      pid: clean(pid, 200),
      adults: clean(adults, 10),
      persAdult: clean(persAdult, 10),
      childrenOver10: clean(childrenOver10, 10),
      childrenUnder10: clean(childrenUnder10, 10),
      date: clean(date, 40),
      group: typeof group !== "undefined" ? clean(group, 40) : "",
      withQuad: !!withQuad,
      withBuggy: !!withBuggy,
      withTransport: !!withTransport,
    };

    if (!c.name || !c.message || !isEmail(c.email)) {
      return Response.json({ message: "Invalid input." }, { status: 400 });
    }
    if (!isPhone(c.phone)) {
      return Response.json({ message: "Invalid phone." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    const subject = `Message From ${c.name} Contact Section`;
    const html = `
      <div style="font-family:system-ui,Segoe UI,Roboto,Arial,sans-serif">
        <p>${c.message.replace(/\n/g, "<br/>")}</p>
        <hr/>
        <p><strong>Sent from E-mail:</strong> ${c.email}</p>
        <p><strong>Mobile Number:</strong> ${c.phone || "-"}</p>
        <p><strong>Date:</strong> ${c.date || "-"}</p>
        <p><strong>People:</strong> ${c.adults || c.persAdult || "-"}</p>
        <p><strong>Product (pid):</strong> ${c.pid || "-"}</p>
        <p><strong>IP:</strong> ${clientIp}</p>
      </div>`;

    await transporter.sendMail({
      from: `"Atlas Trekkers Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: c.email as string,
      subject,
      text:
        `${c.message}\n\nFrom: ${c.name} <${c.email}>\n` +
        `Phone: ${c.phone}\nDate: ${c.date}\nPeople: ${c.adults || c.persAdult}\n` +
        `Product: ${c.pid}\nGroup: ${c.group}\n` +
        `Add-Ons: Quad:${c.withQuad ? "Yes" : "No"} ` +
        `Buggy:${c.withBuggy ? "Yes" : "No"} ` +
        `Transport:${c.withTransport ? "Yes" : "No"}\n` +
        `IP: ${clientIp}`,
      html,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return Response.json({ message: "Server error." }, { status: 500 });
  }
}

export async function GET() {
  // Zum schnellen Test im Browser
  return new Response("Contact route OK (use POST)", { status: 200 });
}
