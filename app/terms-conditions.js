import { DownloadIcon } from '@heroicons/react/solid'
import Head from 'next/head';
import { Popover } from '@headlessui/react'
import React from "react"
import { useRouter } from 'next/router'
import useSWR from 'swr'



const fetcher = (...args) => fetch(...args).then((res) => res.json())
export default function Product() {
    const router = useRouter()
    const { pid } = router.query
    const { data, error } = useSWR('../api/searchProducts?id=' + pid, fetcher)

    if (!data) return (<div className="absolute  inset-x-1/2 ">

        <svg className="animate-bounce  w-48 h-48 text-slate-50  " >
            <DownloadIcon />
        </svg>
    </div>)

    return (
        <Popover className="relative bg-white sm:p-5 " >
            <Head>
                <title>
                Terms & Conditions – Atlas Trekkers LTD BOOKING CONDITIONS
                </title>
                <meta
                    title="Terms & Conditions – Atlas Trekkers LTD BOOKING CONDITIONS"
                    name="description"
                    content="The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can be used to identify you personally. Detailed information on the subject of data protection can be found in our data protection declaration listed below this text."

                />
            </Head>
            <NavBar logoImag={true} />

            <main className=" min-h-full  md:flex items-center justify-center bg-white px-6 py-24 sm:py-32 lg:px-8" style={{ backgroundImage: `url(https://cdn.shopify.com/s/files/1/0835/9431/4024/files/atlastrekkers.webp?v=1724584344)`, boxShadow: 'transition' }}>
            <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions – Atlas Trekkers Ltd</h1>

      <p className="mb-4 text-sm text-gray-500">Last updated: May 29, 2025</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>
          By using this website, you agree to the terms set out below. &ldquoWe&ldquo refers to Atlas Trekkers Ltd (Company No. 15915019, Registered in England and Wales). &ldquoYou&ldquo refers to any website visitor or customer.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Services</h2>
        <p>
          We organise tours, accommodation, and travel experiences exclusively within Morocco. Flights are not included. Customers are responsible for booking their own travel to and from Morocco.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Bookings & Payments</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>A booking is confirmed once a deposit or full payment has been received.</li>
          <li>Final payment is due 1 day before the activity start date.</li>
          <li>For bookings made within 1 day, full payment is due immediately.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Cancellations by Customers</h2>
        <p>
          Cancellation policies vary by activity and season. Please refer to the specific activity page on our website for detailed cancellation and refund conditions.
        </p>
        <p>
          For questions, contact us at <a className="text-blue-600 underline" href="mailto:contact@atlastrekkers.com">contact@atlastrekkers.com</a>.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Cancellations by Atlas Trekkers</h2>
        <p>
          We reserve the right to cancel bookings due to weather or safety concerns. In such cases, we offer:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>A free reschedule, or</li>
          <li>A full refund</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Liability</h2>
        <p>
          All activities are undertaken at your own risk. We accept no liability for accidents, delays, losses, or damages outside our control. You are advised to have comprehensive travel insurance.
        </p>
      </section>
      <section className="mb-6">
  <h2 className="text-xl font-semibold mb-2">7. Travel Insurance</h2>
  <p>
    Adequate travel insurance is a condition of your contract with us. You must ensure that your travel insurance fully covers your personal needs, including but not limited to: pre-existing medical conditions, trip cancellation, delays, medical treatment, and repatriation in the event of illness or accident.
  </p>
  <p>
    If you choose to travel without sufficient insurance coverage, you do so at your own risk, and we will not be liable for any costs or losses that would otherwise have been covered by a suitable insurance policy.
  </p>
</section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Fitness & Health</h2>
        <p>
          You confirm that you are physically fit and capable of participating in the chosen activities (e.g., trekking, paragliding).
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Transfers</h2>
        <p>
          Airport transfers (e.g., Marrakesh or Agadir) can be arranged for an additional fee. Transfers are operated by our trusted local partners.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">9. Intellectual Property</h2>
        <p>
          All content, images, text, and branding on this website are the property of Atlas Trekkers Ltd unless stated otherwise. Reproduction without written consent is prohibited.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">10. Law & Jurisdiction</h2>
        <p>
          These terms are governed by the laws of England and Wales. Any disputes will be settled in the courts of England and Wales.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">11. Contact</h2>
        <p>
          For any questions or complaints regarding these terms, please email: <a className="text-blue-600 underline" href="mailto:contact@atlastrekkers.com">contact@atlastrekkers.com</a>
        </p>
      </section>
    </div>
            </main>

            <Footer /></Popover>
    )
}


