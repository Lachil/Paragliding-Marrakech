"use client";

import { useRef, useState, useEffect } from "react";
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
import RatingBadges from "./RatingBadges";

import  TrustpilotSection  from "./TrustpilotSection";
import { useMediaQuery } from "@mui/material";
export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-lg hover:bg-green-600 transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-7 h-7 fill-white"
      >
        <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.5 2.1 7.9L0 32l8.4-2.4c2.3 1.3 4.9 2 7.6 2 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.5c-2.3 0-4.6-.6-6.6-1.8l-.5-.3-5 1.4 1.4-4.9-.3-.5c-1.3-2-2-4.3-2-6.7C3 9 9 3 16 3s13 6 13 13-6 12.9-13 12.9zm7.1-9.6c-.4-.2-2.3-1.1-2.7-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.2 1.5-.2.2-.5.3-.9.1-.4-.2-1.7-.6-3.3-2-1.2-1-2-2.3-2.2-2.7-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.6.1-.2 0-.5 0-.7 0-.2-.9-2.2-1.2-3-.3-.8-.6-.7-.9-.7h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9 0 1.7 1.2 3.4 1.4 3.6.2.2 2.4 3.6 5.8 5 .8.3 1.5.5 2 .7.8.2 1.6.2 2.2.1.7-.1 2.3-.9 2.6-1.7.3-.8.3-1.5.2-1.7-.1-.2-.4-.3-.8-.5z"/>
      </svg>
    </a>
  );
}
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Atlas Trekkers"
);
const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=212628065009&text=${WHATSAPP_MESSAGE}`;
const PHONE = "+212 628-065009";
const EMAIL = "contact@atlastrekkers.com";
const reviews = [
  {
    name: "Dheffy",
    title: "Amazing experience",
    text: "This is the best adventure to experience in Morocco😊😊 we enjoyed every bit of it. We paid for pickup and the rider was on time super friendly. We arrived at a spot and was offered tea and couscous. We were taken to the location and they were so friendly and welcoming, also polite. The experience was fun and intriguing. I recommend 😊😊",
    stars: 5,
  },
  {
  name:"Ariel Conant",
    title: "Highly recommended",
  text:"This was the highlight of our trip to Marrakesh. We were travelling with our two young kids and their grandmother, so I had a lot of questions about safety before we booked. They answered all of my questions, and were very responsive and helpful. We were interested in the paragliding, but they also arranged a sunrise hot air balloon ride, desert quad biking, camel rides, and a Berber dinner with fire show! At every step, they went above and beyond to make sure our whole group was included and taken care of. Everything was perfect, and everyone (kids, adults, and grandma!) had an amazing time. If I could give them 10 stars, I would!",
    stars: 5,
  },
  {
  name: "Keegan Martinjako",
    title: "The paragliders were so friendly and…",
  text: "The paragliders were so friendly and made our experience perfect! We loved it and would 100% try again with them",
    stars: 5,
  },
   {
  name: "Nagu",
    title: "Very helpful and supportive team, great video for memory",
  text: "It was great experience from the beginning to end. We called them at last minute (just few hours before on that day) as our other plan got cancelled. He was very communicative and supportive all the time. It was best day in whole marakesh trip. Thanks a lot. We finished paragliding without any wait and within 3-4 hours along with great video",
    stars: 5,
  },
   {
  name: "Blanca Kary",
    title: "a fantastic trip you'll remember for a very long time",
  text: " a wonderful landscape which gave us a change of scenery, a very helpful and attentif guide, real good local food twice a day, interesting information and always the feeling of being taken care of. A real fascinating experience which showed us the difference of standard of living and the need to help this courageous and very friendly population, a wish very often expressed by hamou, our very involved guide.",
    stars: 5,
  },
];
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
    "https://cdn.shopify.com/s/files/1/0835/9431/4024/files/afabce21-6515-418d-b60c-51c258dc3f11.jpg?v=1772813091",
    "https://cdn.shopify.com/s/files/1/0835/9431/4024/files/IMG_4704.heic?v=1772812403",
    "https://cdn.shopify.com/s/files/1/0835/9431/4024/files/Photo_07-08-2024_11_34_41_5.jpg?v=1769372065",
    "https://cdn.shopify.com/s/files/1/0835/9431/4024/files/Photo_07-08-2024_11_34_41_5.jpg?v=1769372065",
    "https://cdn.shopify.com/s/files/1/0835/9431/4024/files/Photo_04-08-2024_21_36_11.jpg?v=1769372002",
    "https://cdn.shopify.com/s/files/1/0835/9431/4024/files/b1effef9-61b2-48d6-94c7-1486838d6461_2.jpg?v=1772812343",
    "https://cdn.shopify.com/s/files/1/0835/9431/4024/files/Photo_16-04-2024_14_27_02.jpg?v=1772813723",
    "https://cdn.shopify.com/s/files/1/0835/9431/4024/files/Photo_29-03-2023_14_30_53.jpg?v=1772813777"
  ];
  
  const [open, setOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const preview = imgs.slice(0, 6);

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxIndex !== null) setLightboxIndex(null);
        else setOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, lightboxIndex]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setLightboxIndex((cur) => (cur === null ? cur : (cur - 1 + imgs.length) % imgs.length));
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((cur) => (cur === null ? cur : (cur + 1) % imgs.length));
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex, imgs.length]);

  return (
    <section id="gallery" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold tracking-tight mb-8">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {preview.map((src, i) => {
            const isLast = i === preview.length - 1;
            if (isLast) {
              return (
                <motion.button
                  key={i}
                  type="button"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  onClick={() => setOpen(true)}
                  className="relative h-48 w-full overflow-hidden rounded-2xl text-left"
                >
                  <img
                    src={src}
                    alt={`Quad Agadir ${i + 1}`}
                    className="h-48 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/45" />
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <span className="inline-flex items-center gap-2 rounded-2xl bg-white/90 px-4 py-2 font-semibold text-slate-900 shadow">
                      <Camera className="h-5 w-5" /> Show all photos
                    </span>
                  </div>
                </motion.button>
              );
            }

            return (
              <motion.button
                key={i}
                type="button"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="overflow-hidden rounded-2xl"
                onClick={() => {
                  setOpen(true);
                  setLightboxIndex(i);
                }}
              >
                <img
                  src={src}
                  alt={`Quad Agadir ${i + 1}`}
                  className="h-48 w-full object-cover hover:scale-105 transition"
                />
              </motion.button>
            );
          })}
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            aria-label="Close gallery"
            onClick={() => {
              setLightboxIndex(null);
              setOpen(false);
            }}
            className="absolute inset-0 bg-black/70"
          />
          <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
            <div className="relative w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 sm:px-6">
                <div className="font-semibold">All photos</div>
                <button
                  type="button"
                  onClick={() => {
                    setLightboxIndex(null);
                    setOpen(false);
                  }}
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Close
                </button>
              </div>
              <div className="max-h-[80vh] overflow-auto p-4 sm:p-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {imgs.map((src, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setLightboxIndex(i)}
                      className="overflow-hidden rounded-2xl bg-slate-50"
                    >
                      <img
                        src={src}
                        alt={`Quad Agadir ${i + 1}`}
                        className="h-40 w-full object-cover sm:h-48"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {lightboxIndex !== null && (
            <div className="absolute inset-0 z-10">
              <button
                type="button"
                aria-label="Close photo"
                onClick={() => setLightboxIndex(null)}
                className="absolute inset-0 bg-black/80"
              />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="relative w-full max-w-6xl">
                  <div className="absolute right-0 top-0 z-10 p-2">
                    <button
                      type="button"
                      onClick={() => setLightboxIndex(null)}
                      className="rounded-xl bg-white/90 px-3 py-2 text-sm font-semibold text-slate-900 shadow hover:bg-white"
                    >
                      Close
                    </button>
                  </div>

                  <button
                    type="button"
                    aria-label="Previous photo"
                    onClick={() =>
                      setLightboxIndex((cur) =>
                        cur === null ? cur : (cur - 1 + imgs.length) % imgs.length
                      )
                    }
                    className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-2xl bg-white/80 px-3 py-2 text-sm font-semibold text-slate-900 shadow hover:bg-white"
                  >
                    Prev
                  </button>

                  <button
                    type="button"
                    aria-label="Next photo"
                    onClick={() =>
                      setLightboxIndex((cur) => (cur === null ? cur : (cur + 1) % imgs.length))
                    }
                    className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-2xl bg-white/80 px-3 py-2 text-sm font-semibold text-slate-900 shadow hover:bg-white"
                  >
                    Next
                  </button>

                  <img
                    src={imgs[lightboxIndex]}
                    alt={`Quad Agadir ${lightboxIndex + 1}`}
                    className="mx-auto max-h-[85vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
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
                             <Star className="w-5 h-5 text-emerald-400 fill-emerald-500 " />
                             <span className="font-bold text-slate-900">Top Rated</span>
                        </div>
                        <p className="text-sm text-slate-600">"An unforgettable experience with the best team in Morocco."</p>
                    </div>
                </div>
                <div>
                    <h4 className="text-slate-900 font-bold uppercase tracking-widest text-sm mb-2">Who We Are</h4>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Part of the Atlas Trekkers Family</h2>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        <strong>Atlas Trekkers PARAGLIDING Marrakech</strong> are proud subsidiaries of 
                        <a href="https://atlastrekkers.com" className="text-slate-900 hover:underline mx-1">Atlas Trekkers</a>.
                    </p>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        With a reputation for excellence, Atlas Trekkers is ranked as the 
                        <strong> 3rd Best Company in Morocco on Trustpilot</strong>. When you book with us, 
                        you aren't just booking a tour; you are choosing safety, luxury, and decades of local expertise.
                    </p>
                    <div className="flex gap-4">
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-slate-900">5k+</span>
                            <span className="text-sm text-slate-500">Happy Flyers</span>
                        </div>
                        <div className="w-px bg-gray-300 h-12"></div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-slate-900">95 %</span>
                            <span className="text-sm text-slate-500">Safety Record</span>
                        </div>
                    </div>
                    <div className="mt-8">
                        <RatingBadges
                              trustpilot={{ rating: 4.8, reviewsText: "197 reviews" }}
                tripadvisor={{ rating: 4.8, reviewsText: "37 reviews" }}

                google={{ rating: 4.9, reviewsText: "51 reviews" }}
              />
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
      priceFrom: 58,
      badge: "Self Drive",
      img: "https://cdn.shopify.com/s/files/1/0835/9431/4024/files/afabce21-6515-418d-b60c-51c258dc3f11.jpg?v=1772813091",
      details: {
        duration: " 4 hours (total)",
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
      priceFrom: 76,
      badge: "Most Popular",
      img: "https://cdn.shopify.com/s/files/1/0835/9431/4024/files/Photo_04-02-2023_18_27_36.jpg?v=1768152317",
      details: {
                duration: " 4 hours (total)",

        flightTime: "10–20 min",
        includes: [
          "Round-trip hotel transfer (Marrakech)",
          "Certified pilot & modern gear",
          "Berber tea experience",
          "Photos & video ",
        ],
        schedule: "Daily – flexible start times",
        suitable: "Solo travelers, couples, families",
      },
    },
    {
  title: "Sunset Paragliding Marrakech",
  desc: "Experience a magical sunset flight over the Atlas Mountains. Enjoy golden views above Aguergour and land as the sun sets behind the peaks.",
  priceFrom: 85,
  badge: "Sunset Experience",
  img: "https://cdn.shopify.com/s/files/1/0835/9431/4024/files/Foto_04.07.24_13_29_47_6.jpg?v=1772812153",
  details: {
        duration: " 4 hours (total)",
    flightTime: "10–20 min",
    includes: [
      "Certified tandem pilot",
      "Safety equipment & briefing",
      "Sunset mint tea on Berber terrace",
      "Photos & short video",
    ],
    schedule: "Late afternoon – timed for sunset (weather dependent)",
    suitable: "Beginners welcome – ages depend on conditions",
  },
},
    {
      title: "Birthday Paragliding Experience",
      desc: "A special surprise flight for birthdays – includes extra moments and a memorable setup.",
      priceFrom: 90,
      badge: "Birthday",
      img: "https://cdn.shopify.com/s/files/1/0835/9431/4024/files/2023-11-08.webp?v=1774020411",
      details: {
        duration: "Half-day experience",
        flightTime: "10–20 min",
        includes: [
          "Private attention & celebration setup",
          "Photos & video",
          "Mint tea break",
          "Hotel pickup (Marrakech)",
          "Birthday cake (optional)",
        ],
        schedule: "Daily – book early for best timing",
        suitable: "Perfect for gifting & surprises",
      },
    },
    {
      title: "Gift Voucher – Paragliding Marrakech",
      desc: "A digital voucher (PDF) – valid for 12 months. Perfect gift for friends or family.",
      priceFrom: 76,
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
  title: "Paragliding + Quad + Lunch",
  desc: "Enjoy an adventure day in the Atlas: start with a paragliding flight in Aguergour, continue with an exciting quad ride, and relax with a traditional Moroccan lunch.",
  priceFrom: 110,
  badge: "Adventure Combo",
  img: "https://cdn.shopify.com/s/files/1/0835/9431/4024/files/IMG_4704.heic?v=1772812403",
  details: {
    duration: "Half-day",
    flightTime: "10–20 min",
    includes: [
      "Paragliding tandem flight",
      "Quad biking experience",
      "Traditional Moroccan lunch (15 $ per Person)",
      "Hotel transfers (Marrakech)",
      "Safety equipment & briefing",
      "Mint tea break",
    ],
    schedule: "Daily – morning or afternoon",
    suitable: "Adventure lovers, couples, small groups",
  },
},
    {
      title: "Paragliding + Camel Tour + Argan Cooperative",
      desc: "Combine sky views with Moroccan culture: camel ride + visit an argan oil cooperative after your flight.",
      priceFrom: 80,
      badge: "Culture Combo",
      img: "https://cdn.shopify.com/s/files/1/0835/9431/4024/files/b1effef9-61b2-48d6-94c7-1486838d6461_2.jpg?v=1772812343",
      details: {
        duration: "Half-day",
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
  const isDesktop = useMediaQuery("(min-width : 1024px)");
   const isMobile = useMediaQuery("(max-width : 1024px)")
// --- NEUE KOMPONENTE: ReviewBar ---
// Fügen Sie dies zu den anderen Komponenten in app/page.tsx hinzu

const ReviewBar = () => (
  <div className=" border-b border-slate-800 py-6">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center text-center md:text-left">
        
        {/* 1. GOOGLE REVIEWS */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2 mb-1">
            {/* Google Logo SVG */}
            <img
              src="https://cdn.shopify.com/s/files/1/0835/9431/4024/files/ChatGPT_Image_21._Marz_2026_17_30_48.svg?v=1774114813"
              alt="Google"
              className="h-6 w-auto"
              loading="lazy"
            />
          </div>
          <div className="flex gap-1 mb-1">
             {[...Array(5)].map((_, i) => (
               <Star key={i} className="w-5 h-5 text-orange-400 fill-orange-400" />
             ))}
          </div>
          <a href="#" className="text-gray-400 text-sm hover:text-white underline decoration-gray-600 underline-offset-4 transition">
            Based on 800+ reviews
          </a>
        </div>

        {/* 2. TRUSTPILOT */}
        <div className="flex flex-col items-center md:items-start gap-1 border-l-0 md:border-l border-gray-700 md:pl-8">
           <div className="flex items-center gap-2 mb-1">
             {/* Trustpilot Star Icon */}
             <Star className="w-6 h-6 text-green-500 fill-green-500" />
             <span className="text-white font-bold text-lg">Trustpilot</span>
           </div>
           <div className="flex gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="bg-green-500 p-1 rounded-sm">
                   <Star className="w-3 h-3 text-white fill-white" />
                </div>
              ))}
           </div>
           <div className="text-sm">
             <span className="text-white font-semibold mr-1">TrustScore 5.0</span>
             <a href="https://de.trustpilot.com/review/atlastrekkers.com" target="_blank" className="text-gray-400 underline decoration-gray-600 underline-offset-4 hover:text-white transition">
                1,781 reviews
             </a>
           </div>
        </div>

        {/* 3. TRIPADVISOR */}
        <div className="flex flex-col items-center md:items-start gap-1 border-l-0 md:border-l border-gray-700 md:pl-8">
           <div className="flex items-center gap-2 mb-1">
              {/* TripAdvisor Logo Text (vereinfacht) */}
              <span className="text-white font-bold text-xl tracking-tight">Tripadvisor</span>
           </div>
           <div className="flex gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                 <div key={i} className="w-4 h-4 rounded-full border border-green-500 bg-green-500 relative flex items-center justify-center">
                   <div className="w-2 h-2 bg-white rounded-full"></div>
                 </div>
              ))}
           </div>
           <div className="text-sm">
             <span className="text-white font-semibold mr-1">#3 of 200+</span>
             <a href="https://www.tripadvisor.de/Attraction_Review-g3239562-d20044179-Reviews-Atlas_Trekkers-Aguergour_Marrakech_Safi.html" target="_blank" className="text-gray-400 underline decoration-gray-600 underline-offset-4 hover:text-white transition">
               Best in Morocco
             </a>
           </div>
        </div>

      </div>
    </div>
  </div>
);
const TrustBanner = () => (
    
  <div className="bg-slate-50 py-4 border-b border-gray-200 text-center flex">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
      <div className="flex items-center justify-center gap-2">
        <ShieldCheck className="w-5 h-5  text-slate-900" />
        <span className="text-sm font-semibold text-slate-700">
          Powered by <span className="font-bold">Atlas Trekkers</span> – Top 3 Rated Agency in Morocco (Trustpilot)
        </span>
      </div>

      <a
        href="/#gallery"
        className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
      >
        <img
          src="https://cdn.shopify.com/s/files/1/0835/9431/4024/files/ChatGPT_Image_21._Marz_2026_17_30_48.svg?v=1774114813"
          alt="Gallery"
          className="h-5 w-auto"
          loading="lazy"
        />
        Gallery
      </a>
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
    const phone = String(fd.get("phone") || "");
    const date = String(fd.get("date") || "");
    const persons = String(fd.get("persons") || "");
    const message = String(fd.get("message") || "");
    const tour = String(fd.get("tour") || "Paragliding Marrakech – Standard (Hotel Pickup)");

    if (!phone.trim()) {
      setOk(false);
      setError("Phone number is required.");
      return;
    }

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
          message:
            message ||
            `Booking request: ${tour} on ${date} for ${persons} people. Phone: ${phone}`,
          phone,
          tour,
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
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold">
               <img
              src="https://cdn.shopify.com/s/files/1/0835/9431/4024/files/ChatGPT_Image_21._Marz_2026_17_30_48.svg?v=1774114813"
              alt="Google"
              className="h-12 w-auto"
              loading="lazy"
            />
            <div className="flex flex-col leading-tight">
              <span className="tracking-tight text-md">Paragdilding Marrakech</span>
              <span className="tracking-tight text-xs text-slate-600">Atlas Trekkers</span>
            </div>

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

            <h1 className="mt-6 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Paragdilding Marrakech – Fly Over the Atlas Mountains
            </h1>
              {/* Starting price line (very clear, minimal) */}
          <p className="mt-2 text-white/90">
            <span className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 text-sm ring-1 ring-white/20 backdrop-blur">
              <span className="font-semibold text-white">Starting at €56</span>
              <span className="text-white/70"> ·Flight time: 10–20 min</span>
            </span>
          </p>
            <p className="mt-3 text-lg text-white/90">
              Safe tandem flights with fully insured professional pilots, breathtaking views, and a smooth booking experience. Perfect for couples, friends, families, and special occasions.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <PrimaryBtn onClick={() => { pushDL("book_click", { source: "hero" }); location.href = "#tours"; }}>
                Book Your Flight <ArrowRight className="h-4 w-4" />
              </PrimaryBtn>
               <a
              href="#tours"
              className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-5 py-3 font-semibold text-white ring-1 ring-white/30 hover:bg-white/20"
            >
              View Tours
            </a>
            </div>

            <div className="mt-6 flex justify-center sm:hidden">
              <RatingBadges
                              trustpilot={{ rating: 4.8, reviewsText: "Based on 197 reviews" }}
                tripadvisor={{ rating: 4.8, reviewsText: "Based on 32 reviews" }}

                google={{ rating: 4.9, reviewsText: "Based on 51 reviews" }}
              />
            </div>


          </motion.div>

        </div>
          <div className="absolute left-1/2 bottom-4 z-10 hidden -translate-x-1/2 sm:block">
          <RatingBadges
            google={{ rating: 4.9, reviewsText: "Based on 51 reviews" }}
            tripadvisor={{ rating: 4.9, reviewsText: "Based on 32 reviews" }}
            trustpilot={{ rating:  4.8, reviewsText: "Based on 197 reviews" }}
          />
        </div>
      </section>
      
                   <TrustBanner />

      {/* ABOUT */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold tracking-tight">About Atlas Trekkers Paragdilding Marrakech</h2>
              <p>
                <strong>Atlas Trekkers Paragdilding Marrakech</strong> is operated by <strong>Atlas Trekkers</strong>,
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
              <TrustpilotSection
  rating={4.8}
  reviewsCount={197}
  trustpilotLink="https://www.trustpilot.com/review/atlastrekkers.com"
  reviews={reviews}
/>  <WhatsAppFloat />
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

                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Phone"
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
              <h4 className="font-semibold">Atlas Trekkers Paragdilding Marrakech</h4>
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
            <p>© {new Date().getFullYear()} Atlas Trekkers Paragdilding Marrakech – Atlas Trekkers</p>
            <p>Domain: marrakechparaglidingsky.com</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
