import { DownloadIcon } from '@heroicons/react/solid'
import Footer from "../components/Footer"
import Head from 'next/head';
import { Popover } from '@headlessui/react'
import React from "react"
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

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
    const onClick = (e) => {
      const target = e.target ;
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
        <a href="#home" className="flex items-center gap-2 font-semibold text-slate-800">
          <img
            src="/logo-quad-agadir.svg"
            onError={(e) => {
              (e.currentTarget).src =
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
const fetcher = (...args) => fetch(...args).then((res) => res.json())
export default function Product() {
    const router = useRouter()
    const { pid } = router.query
    const { data, error } = useSWR('../api/searchProducts?id=' + pid, fetcher)
    const { t } = useTranslation('privacyPolicy', { lng: 'en' })

    if (!data) return (<div className="absolute  inset-x-1/2 ">

        <svg className="animate-bounce  w-48 h-48 text-slate-50  " >
            <DownloadIcon />
        </svg>
    </div>)

    return (
        <Popover className="relative bg-white sm:p-5 " style={{ fontFamily: 'Montserrat, sans-serif' }} >
            <Head>
  
  <title>Atlas Trekkers | Privacy Policy</title>
  <meta name="description" content={t('seo_description')} />
  <meta name="robots" content="index,follow" />
  {/* Open Graph */}
  <meta property="og:title" content="Atlas Trekkers | Privacy Policy" />
  <meta property="og:description" content={t('seo_description')} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://atlastrekkers.com/privacy-policy" />
  {/* Twitter Card */}
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Atlas Trekkers | Privacy Policy" />
  <meta name="twitter:description" content={t('seo_description')} />
</Head>
            <Nav />

            <main className=" min-h-full  md:flex items-center justify-center bg-white px-6 py-24 sm:py-32 lg:px-8" style={{ backgroundImage: `url(https://cdn.shopify.com/s/files/1/0835/9431/4024/files/atlastrekkers.webp?v=1724584344)`, boxShadow: 'transition' }}>
                <div className="text-center break-all xl:grid place-items-center sm:text-center xl:w-8/12		 items-center px-0 sm:px-5 lg:px-30">

                    <h1 className="mt-4 text-2xl text-center font-bold tracking-tight  sm:text-4xl underline decoration-[#2c4454] underline-offset-8">
                        {t('1')}{t('78')}
                    </h1>
                    <h2 className="mt-12 text-xl font-bold tracking-tight  sm:text-md"   >{t(2)}</h2>
                    <h3 className="mt-6 text-md font-bold tracking-tight  sm:text-xl"   >{t(3)}</h3>
                    <p className=" text-left   py-2   ">{t(4)}</p>
                    <h3 className=" font-bold   py-1   ">{t(5)}</h3>
                    <h4 className="  font-bold  text-md py-3   " >{t(6)}</h4>
                    <p className=" text-left   py-2   ">{t(7)}</p>
                    <h4 className="  font-bold     py-3   ">{t(8)}</h4>
                    <p className=" text-left   py-2   ">{t(9)}</p>
                    <p className=" text-left   py-2   ">{t(10)}</p>
                    <h4 className="  font-bold     py-3   ">{t(11)}</h4>
                    <p className=" text-left   py-2   ">{t(12)}</p>
                    <h4 className="  font-bold     py-3   ">{t(13)}</h4>
                    <p className=" text-left   py-2   ">{t(14)}</p>
                    <p className=" text-left   py-2   ">{t(15)}</p>
                    <h3 className="mt-6 text-xl font-bold tracking-tight  sm:text-xl" >{t(16)}</h3>
                    <p className=" text-left   py-2   ">{t(17)}</p>
                    <h2 className="mt-6 text-xl font-bold tracking-tight  sm:text-xl"  >{t(18)}</h2>
                    <p className=" text-left   py-2   " >{t(19)}</p>
                    <h3 className="mt-6 text-xl font-bold tracking-tight  sm:text-xl" >{t(20)}</h3>
                    <p className=" text-left   py-2   ">{t(21)}</p>
                    <p >{t('22')}
                        <a className="break-words" href="https://www.shopify.de/legal/datenschutz" target="_blank" >https://www.shopify.de/legal/datenschutz</a>.
                    </p>
                    <p className=" text-left   py-2   ">{t('23')}</p>

                    <h2 className="mt-6 text-xl font-bold tracking-tight  sm:text-xl" >{t(24)}</h2>
                    <h3 className="mt-6 text-xl font-bold tracking-tight  sm:text-xl" >{t(25)}</h3>
                    <p className=" text-left   py-2   ">{t(26)}</p>
                    <p className=" text-left   py-2   ">{t(27)}</p>
                    <p className=" text-left   py-2   ">{t(28)}</p>
                    <h3 className="mt-6 text-xl font-bold tracking-tight  sm:text-xl" >{t(29)}</h3>
                    <p className=" text-left   py-2   ">{t(30)} <br></br>
                        {t('31')}<br></br>
                        {t('32')}<br />
                        {t('33')}
                        <br></br> {t('34')}</p>

                    <h3 className="mt-6 text-xl font-bold tracking-tight  sm:text-xl"  >  {t('35')}</h3>
                    <p className=" text-left   py-2   " > {t('36')}</p>
                    <h3 className="mt-6 text-xl font-bold tracking-tight  sm:text-xl" > {t('37')}</h3>
                    <p className=" text-left   py-2   "> {t('38')}</p>
                    <h3 className="mt-6 text-xl font-bold tracking-tight  sm:text-xl" > {t('39')}</h3>
                    <p className=" text-left   py-2   "> {t('40')}</p>
                    <h3 className="mt-6 text-xl font-bold tracking-tight  sm:text-xl" > {t('41')}</h3>
                    <p className=" text-left   py-2   "> {t('42')}</p>
                    <h3 className="mt-6 text-xl font-bold tracking-tight  sm:text-xl" > {t('43')}</h3>
                    <p className=" text-left   py-2   "> {t('44')}</p>
                    <p className=" text-left   py-2   "> {t('45')}</p>
                    <h3 className="mt-6 text-xl font-bold tracking-tight  sm:text-xl" > {t('46')}</h3>
                    <p className=" text-left   py-2   "> {t('47')}</p>
                    <h3 className="mt-6 text-xl font-bold tracking-tight  sm:text-xl" > {t('48')}</h3>
                    <p className=" text-left   py-2   "> {t('49')}</p>
                    <h3 className="mt-6 text-xl font-bold tracking-tight  sm:text-xl" > {t('50')}</h3>
                    <p className=" text-left   py-2   " > {t('51')}</p>
                    <h3 className="mt-6 text-xl font-bold tracking-tight  sm:text-xl" > {t('52')}</h3>
                    <p className=" text-left   py-2   ">{t('53')}</p>
                    <ul className=" text-left   py-2   " > <li>{t('54')}</li>
                        <li>{t('55')}</li>
                        <li>{t('56')}</li>
                        <li>{t('57')}</li>
                    </ul>
                    <p className=" text-left   py-2   ">{t('58')}</p>
                    <h2 className="mt-6 text-xl font-bold tracking-tight  sm:text-xl"  >{t('59')}</h2>
                    <h3 className="mt-6 text-xl font-bold tracking-tight  sm:text-xl" >{t('60')}</h3>
                    <p className=" text-left   py-2   ">{t('61')}</p>
                    <p className=" text-left   py-2   ">{t('62')} <a className="break-words" href="https://developers.facebook.com/docs/plugins/?locale=de_DE" target="_blank" >https://developers.facebook.com/docs/plugins/?locale=de_DE</a>.</p>
                    <p className=" text-left   py-2   ">{t('63')} <a className="break-words" href="https://de-de.facebook.com/privacy/explanation" target="_blank" >https://de-de.facebook.com/privacy/explanation</a>.</p>
                    <p className=" text-left   py-2   ">{t('64')}</p>
                    <p className=" text-left   py-2   ">{t('65')}</p>
                    <p className=" text-left   py-2   ">{t('66')} <a className="break-words" href="https://www.facebook.com/legal/EU_data_transfer_addendum" target="_blank" >https://www.facebook.com/legal/EU_data_transfer_addendum</a>, <a className="break-words" href="https://de-de.facebook.com/help/566994660333381" target="_blank" >https://de-de.facebook.com/help/566994660333381</a> und <a className="break-words" href="https://www.facebook.com/policy.php" target="_blank" >https://www.facebook.com/policy.php</a>.</p>
                    <p className=" text-left      ">{t('67')}<a className="break-words" href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt0000000GnywAAC&status=Active" target="_blank" >https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt0000000GnywAAC&status=Active</a></p>
                    <h3 className="mt-6 text-xl font-bold tracking-tight  sm:text-xl" >{t('68')}</h3>
                    <p className=" text-left   py-2   ">{t('69')}</p>
                    <p className=" text-left   py-2   " >{t('70')}</p>
                    <p className=" text-left   py-2   ">{t('71')}</p>
                    <p className=" text-left   py-2   ">{t('72')}</p>
                    <p className=" text-left   py-2   " >{t('73')}
                        <p className=" text-left   py-2   ">{t('74')} <a className="break-words" href="https://www.facebook.com/legal/EU_data_transfer_addendum" target="_blank" >https://www.facebook.com/legal/EU_data_transfer_addendum</a>, <a className="break-words" href="https://privacycenter.instagram.com/policy/" target="_blank" >https://privacycenter.instagram.com/policy/</a> & <a className="break-words" href="https://de-de.facebook.com/help/566994660333381" target="_blank" >https://de-de.facebook.com/help/566994660333381</a>.</p>
                        {t('75')} <a className="break-words" href="https://privacycenter.instagram.com/policy/" target="_blank" >https://privacycenter.instagram.com/policy/</a> <br></br>
                        {t('76')}<a className="break-words" href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt0000000GnywAAC&status=Active" target="_blank" >https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt0000000GnywAAC&status=Active</a></p>

                </div>
            </main>

            <Footer /></Popover>
    )
}


export async function getStaticProps(context) {
    return {
        props: {
            ...(await serverSideTranslations('en', ["privacyPolicy",
                "common"])),
        },
    };
}