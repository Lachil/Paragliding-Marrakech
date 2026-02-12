"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Camera,
  Gift,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
  Sun,
  Timer,
} from "lucide-react";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=212628065009";
const PHONE = "+212 628-065009";
const EMAIL = "contact@atlastrekkers.com";

type Tour = {
  title: string;
  desc: string;
  priceFrom: number;
  badge?: string;
  img: string;
  details: {
    duration: string;
    flightTime: string;
    includes: string[];
    schedule: string;
    suitable: string;
  };
};
function Gallery() {
  const imgs = [
    "https://cdn.shopify.com/s/files/1/0835/9431/4024/files/Photo_28-10-2022_18_10_16.jpg?v=1769372271",
    "https://cdn.shopify.com/s/files/1/0835/9431/4024/files/WhatsApp_Image_2025-04-07_at_18.07.01.jpg?v=1769372092",
    "https://cdn.shopify.com/s/files/1/0835/9431/4024/files/Photo_07-08-2024_11_34_41_5.jpg?v=1769372065",
    "https://cdn.shopify.com/s/files/1/0835/9431/4024/files/Photo_07-08-2024_11_34_41_5.jpg?v=1769372065",
    "https://cdn.shopify.com/s/files/1/0835/9431/4024/files/Photo_04-08-2024_21_36_11.jpg?v=1769372002",
    "https://cdn.shopify.com/s/files/1/0835/9431/4024/files/0890160950562e80002aa45ae08cc8940bced4da87101ebff97c5710c4dd71cd.webp?v=1761676183",
  ];
  return (
    <section id="gallery" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold tracking-tight mb-8">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {imgs.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="overflow-hidden rounded-2xl"
            >
              <img src={src} alt={`Sky Paragliding Marrakech ${i + 1}`} className="h-48 w-full object-cover hover:scale-105 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
const AboutSection = () => (
    <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                    <img 
                        src="https://cdn.shopify.com/s/files/1/0835/9431/4024/files/52fb95d7-a0bd-4dbb-a5d7-072051cccd75.webp?v=1770733028" 
                        alt="Morocco Desert" 
                        className="rounded-2xl shadow-2xl"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                        <div className="flex items-center gap-2 mb-2">
                             <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                             <span className="font-bold text-slate-900">Top Rated</span>
                        </div>
                        <p className="text-sm text-slate-600">"An unforgettable experience with the best team in Morocco."</p>
                    </div>
                </div>
                <div>
                    <h4 className="text-slate-900 font-bold uppercase tracking-widest text-sm mb-2">Who We Are</h4>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Part of the Atlas Trekkers Family</h2>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        <strong>Sky Paragliding Marrakech</strong> are proud subsidiaries of 
                        <a href="https://atlastrekkers.com" className="text-slate-900 hover:underline mx-1">Atlas Trekkers</a>.
                    </p>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        With a reputation for excellence, Atlas Trekkers is ranked as the 
                        <strong> 3rd Best Company in Morocco on Trustpilot</strong>. When you book with us, 
                        you aren't just booking a tour; you are choosing safety, luxury, and decades of local expertise.
                    </p>
                    <div className="flex gap-4">
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-slate-900">3k+</span>
                            <span className="text-sm text-slate-500">Happy Flyers</span>
                        </div>
                        <div className="w-px bg-gray-300 h-12"></div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-slate-900">95 %</span>
                            <span className="text-sm text-slate-500">Safety Record</span>
                        </div>
                    </div>
                    <div className="mt-8">
                         <a href="https://www.tripadvisor.de/Attraction_Review-g3239562-d20044179-Reviews-Atlas_Trekkers-Aguergour_Marrakech_Safi.html" target="_blank" >
                            Read our Tripadvisor Reviews &rarr;
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs text-white ring-1 ring-white/25 backdrop-blur">
      {children}
    </span>
  );
}

function PrimaryBtn(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={
        "inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-400 px-5 py-3 font-semibold text-slate-900 shadow hover:bg-amber-300 disabled:opacity-60 disabled:cursor-not-allowed " +
        (props.className || "")
      }
    />
  );
}

function DarkBtn(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={
        "inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white hover:bg-slate-800 disabled:opacity-60 disabled:cursor-not-allowed " +
        (props.className || "")
      }
    />
  );
}

export default function ParaglidingLanding() {
  const tours: Tour[] = [
    {
      title: "Paragliding Marrakech – Without Transfer",
      desc: "For travelers who come by their own car. Meet us in Aguergour and enjoy a breathtaking flight over the Atlas Mountains.",
      priceFrom: 90,
      badge: "Self Drive",
      img: "https://cdn.shopify.com/s/files/1/0835/9431/4024/files/Photo_28-03-2023_13_49_43.jpg?v=1768153052",
      details: {
        duration: "2 hours (total)",
        flightTime: "10–20 min",
        includes: [
          "Certified tandem pilot",
          "Safety equipment & briefing",
          "Mint tea on Berber terrace",
          "Photos & short video",
        ],
        schedule: "Daily – morning or afternoon (weather dependent)",
        suitable: "Beginners welcome – ages depend on conditions",
      },
    },
    {
      title: "Paragliding Marrakech – Standard (Hotel Pickup)",
      desc: "Our most popular option: pickup in Marrakech, scenic drive, mint tea, and a safe tandem flight with pro pilots.",
      priceFrom: 140,
      badge: "Most Popular",
      img: "https://cdn.shopify.com/s/files/1/0835/9431/4024/files/Photo_04-02-2023_18_27_36.jpg?v=1768152317",
      details: {
        duration: "Half-day experience",
        flightTime: "10–20 min",
        includes: [
          "Round-trip hotel transfer (Marrakech)",
          "Certified pilot & modern gear",
          "Berber tea experience",
          "Photos & video (GoPro when available)",
        ],
        schedule: "Daily – flexible start times",
        suitable: "Solo travelers, couples, families",
      },
    },
    {
      title: "Birthday Paragliding Experience",
      desc: "A special surprise flight for birthdays – includes extra moments and a memorable setup.",
      priceFrom: 170,
      badge: "Birthday",
      img: "https://cdn.shopify.com/s/files/1/0835/9431/4024/files/Birthday_Paragliding_Experience_A_special_surprise_flight_for_birthdays_includes_extra_moments_and_a_memorable_setup._for_2_Personen_1.jpg?v=1768151788",
      details: {
        duration: "Half-day experience",
        flightTime: "10–20 min",
        includes: [
          "Private attention & celebration setup",
          "Photos & video",
          "Mint tea break",
          "Hotel pickup (Marrakech)",
        ],
        schedule: "Daily – book early for best timing",
        suitable: "Perfect for gifting & surprises",
      },
    },
    {
      title: "Gift Voucher – Paragliding Marrakech",
      desc: "A digital voucher (PDF) – valid for 12 months. Perfect gift for friends or family.",
      priceFrom: 140,
      badge: "Voucher",
      img: "https://cdn.shopify.com/s/files/1/0835/9431/4024/files/Gift_Voucher_Paragliding_Atlas_Mountains.jpg?v=1768151997",
      details: {
        duration: "Voucher valid 12 months",
        flightTime: "10–20 min (when redeemed)",
        includes: [
          "Personalized PDF voucher",
          "Custom message",
          "Flexible redemption date",
        ],
        schedule: "Available anytime – instant delivery",
        suitable: "Gifts, couples, friends",
      },
    },
    {
      title: "Paragliding + Quad + Agafay Dinner",
      desc: "The ultimate adventure day: fly over the Atlas, ride quads in Agafay, and enjoy a sunset dinner camp experience.",
      priceFrom: 240,
      badge: "Full Day",
      img: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?auto=format&fit=crop&w=1600&q=80",
      details: {
        duration: "Full day",
        flightTime: "10–20 min",
        includes: [
          "Paragliding experience",
          "Quad biking in Agafay",
          "Sunset dinner (camp experience)",
          "Transfers included",
        ],
        schedule: "Daily – best for afternoon/sunset",
        suitable: "Adventure lovers, groups",
      },
    },
    {
      title: "Paragliding + Camel Tour + Argan Cooperative",
      desc: "Combine sky views with Moroccan culture: camel ride + visit an argan oil cooperative after your flight.",
      priceFrom: 190,
      badge: "Culture Combo",
      img: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80",
      details: {
        duration: "Half-day to full-day",
        flightTime: "10–20 min",
        includes: [
          "Paragliding flight",
          "Camel ride experience",
          "Argan oil cooperative visit",
          "Tea & local welcome",
        ],
        schedule: "Daily – flexible timing",
        suitable: "Couples, families, first-timers",
      },
    },
  ];

  const formRef = useRef<HTMLFormElement>(null);
  const [submitting, setSubmitting] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);
  const [error, setError] = useState<string | null>(null);

  function pushDL(eventName: string, payload?: Record<string, any>) {
    if (typeof window === "undefined") return;
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({ event: eventName, ...(payload || {}) });
  }
const TrustBanner = () => (
  <div className="bg-slate-50 py-4 border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
      <div className="flex items-center gap-2">
        <ShieldCheck className="w-5 h-5  text-slate-900" />
        <span className="text-sm font-semibold text-slate-700">
          Powered by <span className="font-bold">Atlas Trekkers</span> – Top 3 Rated Agency in Morocco
        </span>
      </div>
      <div className="flex items-center gap-4">
        <a href="https://de.trustpilot.com/review/atlastrekkers.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 group">
          <Star className="w-5 h-5 text-green-500 fill-green-500" />
          <Star className="w-5 h-5 text-green-500 fill-green-500" />
          <Star className="w-5 h-5 text-green-500 fill-green-500" />
          <Star className="w-5 h-5 text-green-500 fill-green-500" />
          <Star className="w-5 h-5 text-green-500 fill-green-500" />
          <span className="text-sm font-medium text-slate-900 ml-2 group-hover:underline">See Trustpilot Reviews</span>
        </a>
      </div>
    </div>
  </div>
);
  async function onWhatsappClick() {
    // GTM Tracking (optional)
    pushDL("whatsapp_click", { source: "paragliding_marrakech" });

    // WhatsApp öffnen (Link = GTM Link-Trigger kompatibel)
    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    const name = String(fd.get("name") || "");
    const email = String(fd.get("email") || "");
    const date = String(fd.get("date") || "");
    const persons = String(fd.get("persons") || "");
    const message = String(fd.get("message") || "");
    const tour = String(fd.get("tour") || "Paragliding Marrakech – Standard (Hotel Pickup)");

    setSubmitting(true);
    setOk(null);
    setError(null);

    // optional: "start" event
    pushDL("book_submit_start", { tour, persons, date });

    try {
      // Wenn du schon /api/contact hast, kannst du es nutzen:
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message: message || `Booking request: ${tour} on ${date} for ${persons} people.`,
          pid: "Paragliding Marrakech – Booking Form",
          adults: persons,
          date,
          company: "", // honeypot
        }),
      });

      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json?.message || "Request failed");

      // ✅ Erfolgs-Event (für Google Ads Conversion Tag via GTM)
      pushDL("book_submit_success", { tour, persons, date });

      setOk(true);
      form.reset?.();
      formRef.current?.reset();
    } catch (err: any) {
      pushDL("book_submit_error");
      setOk(false);
      setError(err?.message || "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white shadow">
              🪂
            </span>
            <span className="tracking-tight">Marrakech Paragliding Sky</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            <a href="#tours" className="hover:text-slate-900">Tours</a>
            <a href="#why" className="hover:text-slate-900">Why Us</a>
            <a href="#reviews" className="hover:text-slate-900">Reviews</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={onWhatsappClick}
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 px-3 py-2 text-sm font-medium hover:bg-slate-50"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </button>
            <a
              href="#booking"
              className="hidden sm:inline-flex items-center gap-2 rounded-2xl bg-amber-400 px-3 py-2 text-sm font-semibold text-slate-900 shadow hover:bg-amber-300"
              onClick={() => pushDL("book_click", { source: "nav" })}
            >
              Book Now <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative isolate">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://cdn.shopify.com/s/files/1/0835/9431/4024/files/Paragliding_Marrakech__Soar_high_above_the_Atlas_Mountains_with_our_unforgettable_paragliding_experience_in_Aguergour_one_of_Morocco_s_most_scenic_flying_locations..jpg?v=1768150784"
            alt="Paragliding Marrakech"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 sm:py-32">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="flex flex-wrap gap-2">
              <Pill>Operated by Atlas Trekkers</Pill>
              <Pill>Certified Pilots</Pill>
              <Pill>Photos & Video</Pill>
            </div>

            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Sky Paragliding Marrakech – Fly Over the Atlas Mountains
            </h1>
            <p className="mt-4 text-lg text-white/90">
              Safe tandem flights with fully insured professional pilots, breathtaking views, and a smooth booking experience. Perfect for couples, friends, families, and special occasions.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <PrimaryBtn onClick={() => { pushDL("book_click", { source: "hero" }); location.href = "#booking"; }}>
                Book Your Flight <ArrowRight className="h-4 w-4" />
              </PrimaryBtn>
               <a
              href="#tours"
              className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-5 py-3 font-semibold text-white ring-1 ring-white/30 hover:bg-white/20"
            >
              View Tours
            </a>
            </div>


          </motion.div>
        </div>
      </section>
                   <TrustBanner />

      {/* ABOUT */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold tracking-tight">About Marrakech Paragliding Sky</h2>
              <p>
                <strong>Marrakech Paragliding Sky</strong> is operated by <strong>Atlas Trekkers</strong>,
                one of Morocco’s leading adventure travel companies. We focus on safety, authenticity,
                and unforgettable outdoor experiences — with certified pilots, modern gear, and smooth logistics.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 !mt-6">
                <li className="flex items-center gap-2"><ShieldCheck className="h-5 w-5" /> Safety First & Insured Pilots</li>
                <li className="flex items-center gap-2"><BadgeCheck className="h-5 w-5" /> Certified Pilots</li>
                <li className="flex items-center gap-2"><Camera className="h-5 w-5" /> Photos & Videos</li>
                <li className="flex items-center gap-2"><Timer className="h-5 w-5" /> Fast Support (WhatsApp)</li>
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://cdn.shopify.com/s/files/1/0835/9431/4024/files/Paragliding_Marrakech_Fly_Over_the_Atlas_Mountains.jpg?v=1768150434"
                alt="Atlas Mountains view"
                className="rounded-3xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* TOURS */}
      <section id="tours"  className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl font-bold tracking-tight">Our Tours</h2>
            <p className="text-sm text-slate-500 hidden sm:block">
              Choose your style: standard, birthday, voucher, or full experience combos.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours.map((t) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-md"
              >
                <div className="relative">
                  <img src={t.img} alt={t.title} className="h-56 w-full object-cover" />
                  {t.badge && (
                    <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-medium shadow">
                      <Star className="mr-1 h-4 w-4 text-amber-500" /> {t.badge}
                    </span>
                  )}
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-semibold">{t.title}</h3>
                  <p className="text-slate-600">{t.desc}</p>

                  <ul className="text-sm text-slate-500 mt-3 list-disc list-inside space-y-1">
                    <li><strong>Duration:</strong> {t.details.duration}</li>
                    <li><strong>Flight time:</strong> {t.details.flightTime}</li>
                    <li><strong>Schedule:</strong> {t.details.schedule}</li>
                    <li><strong>Suitable for:</strong> {t.details.suitable}</li>
                    <li className="mt-2">
                      <strong>Includes:</strong>
                      <ul className="list-disc list-inside ml-4 mt-1">
                        {t.details.includes.map((x) => <li key={x}>{x}</li>)}
                      </ul>
                    </li>
                  </ul>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-xl font-bold text-slate-900">from €{t.priceFrom}</div>
                    <a
                      href="#booking"
                      onClick={() => pushDL("book_click", { source: "tour_card", tour: t.title })}
                      className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                    >
                      Book Now <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
              <AboutSection />

      <Gallery />
      {/* WHY US */}
      <section id="why" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold tracking-tight mb-8">Why Choose Us?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <ShieldCheck className="h-6 w-6" />, title: "Safety First", text: "Professional pilots, modern equipment, and a full pre-flight briefing." },
              { icon: <MapPin className="h-6 w-6" />, title: "Best Spots", text: "Beautiful take-off points near Marrakech with stunning Atlas views." },
              { icon: <Camera className="h-6 w-6" />, title: "Memories Included", text: "Photos and videos available to keep the moment forever." },
              { icon: <Sun className="h-6 w-6" />, title: "Great All Year", text: "We pick the best timing based on weather conditions." },
              { icon: <Gift className="h-6 w-6" />, title: "Perfect Gift", text: "Vouchers and birthday experiences available." },
              { icon: <MessageCircle className="h-6 w-6" />, title: "Fast Support", text: "WhatsApp support – quick answers in EN/FR/DE/AR." },
            ].map((it) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 mb-4">
                  {it.icon}
                </div>
                <h3 className="font-semibold">{it.title}</h3>
                <p className="mt-2 text-slate-600">{it.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS (simple block, du kannst hier deine Trustpilot-Komponente wiederverwenden) */}
      <section id="reviews" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="rounded-3xl border border-slate-100 bg-slate-50 p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Reviews</h2>
                <p className="mt-2 text-slate-600">
                  Trusted experiences by the Atlas Trekkers team.
                </p>
              </div>
              <a
                href="https://www.trustpilot.com/review/atlastrekkers.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-sm font-semibold shadow hover:bg-slate-50"
              >
                <Star className="h-4 w-4 text-amber-500" />
                View Trustpilot
              </a>
            </div>

            <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm text-slate-700">
              <div className="rounded-2xl bg-white p-4 border border-slate-100">
                <div className="font-semibold flex items-center gap-2"><Star className="h-4 w-4 text-amber-500" /> 4.9 / 5</div>
                <p className="mt-2 text-slate-600">Average rating (Atlas Trekkers)</p>
              </div>
              <div className="rounded-2xl bg-white p-4 border border-slate-100">
                <div className="font-semibold flex items-center gap-2"><BadgeCheck className="h-4 w-4" /> Verified experiences</div>
                <p className="mt-2 text-slate-600">Real customers, real reviews</p>
              </div>
              <div className="rounded-2xl bg-white p-4 border border-slate-100">
                <div className="font-semibold flex items-center gap-2"><MessageCircle className="h-4 w-4" /> Fast reply</div>
                <p className="mt-2 text-slate-600">We respond quickly on WhatsApp</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT + BOOKING */}
      <section id="contact" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Contact</h2>
              <p className="mt-3 text-slate-600">
                Message us via WhatsApp or submit a booking request – we reply quickly.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                {/* Link ist GTM Link-Click Trigger kompatibel */}
                <a
                  id="btn-whatsapp"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 rounded-2xl bg-emerald-500 px-4 py-2 font-semibold text-white shadow hover:bg-emerald-400"
                  onClick={() => pushDL("whatsapp_click", { source: "contact_section" })}
                >
                  <MessageCircle className="h-5 w-5" /> WhatsApp Chat
                </a>

                <div className="flex flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 px-4 py-2 text-sm text-slate-700">
                    <Phone className="h-4 w-4" /> {PHONE}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 px-4 py-2 text-sm text-slate-700">
                    <MapPin className="h-4 w-4" /> Marrakech / Aguergour
                  </div>
                </div>
              </div>
            </div>

            <div id="booking" className="rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Booking Request</h3>

              <form
                ref={formRef}
                id="booking-form"
                onSubmit={handleSubmit}
                className="mt-4 grid grid-cols-1 gap-4"
              >
                <input
                  name="name"
                  required
                  placeholder="Name"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-amber-300"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-amber-300"
                />

                <select
                  name="tour"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-amber-300"
                  defaultValue={tours[1].title}
                >
                  {tours.map((t) => (
                    <option key={t.title} value={t.title}>{t.title}</option>
                  ))}
                </select>

                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="date"
                    name="date"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-amber-300"
                  />
                  <input
                    type="number"
                    name="persons"
                    min={1}
                    defaultValue={2}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-amber-300"
                  />
                </div>

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Message (e.g., pickup address, preferred start time, birthday/voucher details)"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-amber-300"
                />

                <DarkBtn type="submit" disabled={submitting}>
                  {submitting ? "Sending..." : <>Send Request <ArrowRight className="h-4 w-4" /></>}
                </DarkBtn>

                {ok === true && (
                  <p className="text-sm text-emerald-600 mt-2">
                    ✅ Thank you! We received your booking request.
                  </p>
                )}
                {ok === false && (
                  <p className="text-sm text-red-600 mt-2">
                    ❌ Sorry, {error}
                  </p>
                )}

                <p className="text-xs text-slate-500 mt-2">
                  By submitting, you agree to the processing of your data according to our Privacy Policy.
                </p>
              </form>

              <div className="mt-5 text-xs text-slate-500">
                Prefer instant confirmation?{" "}
                <button onClick={onWhatsappClick} className="underline">
                  Chat on WhatsApp
                </button>
                .
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h4 className="font-semibold">Marrakech Paragliding Sky</h4>
              <p className="mt-3 text-sm text-slate-400">
                Operated by Atlas Trekkers. Safe, authentic, and unforgettable paragliding experiences in Marrakech.
              </p>
            </div>

            <div>
              <h5 className="font-semibold">Contact</h5>
              <ul className="mt-3 space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> {PHONE}</li>
                <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4" /> WhatsApp available</li>
                <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Marrakech / Aguergour</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold">Legal</h5>
              <ul className="mt-3 space-y-2 text-sm text-slate-400">
                <li><a href="/privacyPolicy" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="/terms-conditions" className="hover:text-white">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-xs text-slate-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} Marrakech Paragliding Sky – Atlas Trekkers</p>
            <p>Domain: marrakechparaglidingsky.com</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
