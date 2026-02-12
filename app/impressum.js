/* eslint-disable react-hooks/rules-of-hooks */
import Footer from "../components/Footer"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { plans } from "../services/plans"
import { Popover } from '@headlessui/react'
import NavBar from '../components/NavBar'
import React from "react"
import { useRouter } from 'next/router'
import Head from 'next/head';
import { useTranslation } from 'next-i18next'

export default function impressum() {
    const { t } = useTranslation('common', { lng: 'en' })
    const router = useRouter()
    const { pid } = router.query
    const plan = plans.filter((plan) => { if (plan.id === Number(pid)) { return (plan) } })
    return (
        <Popover className="relative bg-white">
            <Head>
                <title>
                    {t('Imprint')}
                </title>
                <meta
                    title={t('Imprint')}
                    name="description"
                    content="Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die [....]"

                />
            </Head>

            <NavBar logoImag={true} />
            <>
                {/*
        This example requires updating your template:

        ```
        <html className="h-full">
        <body className="h-full">
        ```
      */}
                <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 " style={{ backgroundImage: `url(https://cdn.shopify.com/s/files/1/0835/9431/4024/files/atlastrekkers.webp?v=1724584344)`, boxShadow: 'transition' }}>
                <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Impressum</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Atlas Trekkers Ltd (United Kingdom)</h2>
        <p>Company Number: 15915019</p>
        <p>Registered Office: 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Atlas Trekkers Group SARL (Morocco)</h2>
        <p>Company Registration (RC): 152051</p>
        <p>ICE Number: 003545273000042</p>
        <p>Address: ALMASSAR N° 837, Appt N°3, Route de Safi, Marrakech-Medina (AR), Morocco</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Contact</h2>
        <p>Phone: +212 661 177 588</p>
        <p>Email: <a className="text-blue-600 underline" href="mailto:contact@atlastrekkers.com">contact@atlastrekkers.com</a></p>
        <p>VAT ID: available on request</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">EU Online Dispute Resolution</h2>
        <p>
          The European Commission provides a platform for online dispute resolution (ODR):{' '}
          <a
            className="text-blue-600 underline"
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
        </p>
        <p>We are not obligated and not willing to participate in a dispute resolution procedure before a consumer arbitration board.</p>
      </section>
    </div>
                </main>
            </>

            <Footer /></Popover>
    )
}
export async function getStaticProps(context) {
    return {
        props: {
            ...(await serverSideTranslations('en')),
        },
    };
}