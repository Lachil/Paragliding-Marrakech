
"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  ShieldCheck,
  Smile,
  Timer,
  Mountain,
  Star,
  Camera,
  MapPin,
  Mail,
  ArrowRight,
} from "lucide-react";
function Nav() {
    const [name, setName] = useState("W");
  const [message, setMessage] = useState("conv: WhatsApp");
  const [loadingWhatsapp, setLoadingWhatsapp] = useState(false);

  const productTitle = "site quad Agadir";
  const whatsappUrl = "https://api.whatsapp.com/send?phone=212628065009";

  async function onWhatsappClick() {
    try {
      setMessage("conv: WhatsApp");
      setName("whatsapp");
      setLoadingWhatsapp(true);

      // 1) Track in deinem Backend
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, message, productTitle }),
      });
      // Fehler ignorieren, Link trotzdem öffnen:
      // if (!res.ok) { /* optional: toast */ }

      // 2) Externen Link öffnen (kein Router nötig)
      if (typeof window !== "undefined") {
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      }
    } finally {
      setLoadingWhatsapp(false);
    }
  }

  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    const onClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      const href = target.getAttribute("href");
      if (!href) return;
      const el = document.querySelector(href);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    links.forEach((a) => a.addEventListener("click", onClick));
    return () => links.forEach((a) => a.removeEventListener("click", onClick));
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="./" className="flex items-center gap-2 font-semibold text-slate-800">
          <img
            src="/logo-quad-agadir.svg"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                "https://dummyimage.com/40x40/1E293B/ffffff.png&text=QA";
            }}
            alt="Quad Agadir Logo"
            className="h-9 w-9 rounded-xl shadow"
          />
          <span className="tracking-tight">Quad Agadir</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <a href="#tours" className="hover:text-slate-900">Tours</a>
          <a href="#why" className="hover:text-slate-900">Why Us ?</a>
          <a href="#reviews" className="hover:text-slate-900">Reviews</a>
          <a href="#gallery" className="hover:text-slate-900">Gallery</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
         
           <button
                onClick={onWhatsappClick}
                disabled={loadingWhatsapp}
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 px-3 py-2 text-sm font-medium hover:bg-slate-50"
              >
                <MessageCircle className="h-5 w-5" />
                {loadingWhatsapp ? "Opening WhatsApp..." : "WhatsApp Chat"}
              </button>
          <a
            href="#booking"
            className="hidden sm:inline-flex items-center gap-2 rounded-2xl bg-amber-400 px-3 py-2 text-sm font-semibold text-slate-900 shadow hover:bg-amber-300"
          >
            Book Now <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h4 className="font-semibold">Quad Agadir</h4>
            <p className="mt-3 text-sm text-slate-400">
              Quad Agadir is a subsidiary of Atlas Trekkers. Safe, authentic, and unforgettable quad tours in Agadir.
            </p>
          </div>
          <div>
            <h5 className="font-semibold">Legal</h5>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li><a href="#impressum" className="hover:text-white">Imprint</a></li>
              <li><a href="#privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-white">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold">Contact</h5>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4"/> +212 628-065009</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4"/> contact@atlastrekkers.com</li>
              <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4"/> WhatsApp available</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-slate-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Quad Agadir – Atlas Trekkers Group</p>
          <p>Made with ❤️ in Agadir, Morocco</p>
        </div>
      </div>

      {/* Legal placeholders */}
      <div id="impressum" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        <h3 className="text-white font-semibold">Imprint</h3>
        <p className="mt-2 text-sm text-slate-400">
          Responsible entity: Atlas Trekkers Group (replace with your real company details)
        </p>
      </div>
      <div id="privacy" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        <h3 className="text-white font-semibold">Privacy Policy</h3>
        <a href="/privacyPolicy" className="mt-2 text-sm text-slate-400">
          Data processing notice (placeholder – replace with your GDPR‑compliant text).
        </a>
      </div>
      <div id="terms" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        <h3 className="text-white font-semibold">Terms & Conditions</h3>
        <a href="/terms-conditions" className="mt-2 text-sm text-slate-400">General terms (placeholder).</a>
      </div>
    </footer>
  );
}
export default function PrivacyPolicyPage() {
  return (
                  <><Nav /><main className="min-h-full bg-white px-6 py-24 sm:py-32 lg:px-8">

          <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
              <p className="mb-4 text-sm text-gray-500">Last updated: May 29, 2025</p>

              <section className="mb-6">
                  <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
                  <p>
                      This Privacy Policy describes how we handle your personal data when you use
                      our website and services. By using our site, you agree to the terms
                      outlined here.
                  </p>
              </section>

              <section className="mb-6">
                  <h2 className="text-xl font-semibold mb-2">2. What We Collect</h2>
                  <ul className="list-disc list-inside space-y-1">
                      <li>Contact details (e.g., name, email, phone) when you reach out to us</li>
                      <li>Booking-related information you provide</li>
                      <li>Technical data (e.g., IP, device, analytics)</li>
                  </ul>
              </section>

              <section className="mb-6">
                  <h2 className="text-xl font-semibold mb-2">3. How We Use Data</h2>
                  <ul className="list-disc list-inside space-y-1">
                      <li>To respond to your enquiries and manage bookings</li>
                      <li>To improve our website and services</li>
                      <li>To comply with legal obligations</li>
                  </ul>
              </section>

              <section className="mb-6">
                  <h2 className="text-xl font-semibold mb-2">4. Contact</h2>
                  <p>
                      For privacy questions, contact us at
                      {" "}
                      <a className="text-blue-600 underline" href="mailto:contact@atlastrekkers.com">
                          contact@atlastrekkers.com
                      </a>
                      .
                  </p>
              </section>
          </div>
      </main>
      <Footer/></>
  );
}
