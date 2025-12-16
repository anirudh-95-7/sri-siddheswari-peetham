"use client"

import Link from "next/link"
import { FadeUp } from "@/components/animate-on-scroll"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function HomamPage() {
  return (
    <>
      <SiteHeader />

      <main className="mx-auto max-w-3xl px-4 pt-24">
        <FadeUp>
          <h1 className="font-serif text-pretty text-3xl tracking-tight">Homam</h1>
        </FadeUp>
        <FadeUp delay={60}>
          <p className="mt-3 text-neutral-700 leading-relaxed">
            Homam (Havan) is a sacred Vedic fire ritual performed for purification, protection, and fulfillment of noble
            intentions. Below is a concise overview; please refer to the official guide for complete mantras and
            details.
          </p>
        </FadeUp>

        <FadeUp delay={100}>
          <div className="mt-8 rounded-xl border border-neutral-200 bg-white p-5">
            <h2 className="font-serif text-2xl">Standard Homa Procedure (Overview)</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-neutral-800">
              <li>Purification: Āchamanam, Prāṇāyāma, Sankalpa.</li>
              <li>Setup: Kalasha preparation; Kunda Mekalā Pūjā (8 directions); Agni Pīṭha Pūjā (10 directions).</li>
              <li>
                Agni: Seat Agni, light camphor, invoke with OM/VAM/RAM beejas, shield (Hoom Phat), initial offerings.
              </li>
              <li>
                Pancha Pūjā to Agni: Water, sandal, flowers, incense, deepam, naivedyam; ghee reflections and darbha.
              </li>
              <li>Ganapati & Guru Homam: Sequential aahutis for removal of obstacles and guru grace.</li>
              <li>
                Main Deity: Āsana, invocation, unite Agni with your Moola Mantra, Nāḍi Sandhānam, Devatā Preetardham.
              </li>
              <li>Main Homam: Aahutis with ghee and dravyas as per count; Mahā Vyāhṛti Homam.</li>
              <li>
                Offerings: Devatā Bali (pumpkin/coconut), Pūrṇāhuti (12 ghee), Dikpālaka Bali (10 directions), Bhūta
                Bali.
              </li>
              <li>Conclusion: Samarpanam, Udvāsanam (Deity and Agni), Raksha (apply ash).</li>
            </ol>
            <p className="mt-4 text-sm text-neutral-600">
              Full authoritative sequence, mantras, materials, and interruption handling:
            </p>
            <Link
              href="https://www.siddheswaripeetham.org/wp-content/uploads/2015/05/homa-procedure.pdf"
              target="_blank"
              className="mt-2 inline-block text-emerald-700 hover:underline"
            >
              Download: Homa Procedure (PDF)
            </Link>
          </div>
        </FadeUp>

        <FadeUp delay={140}>
          <div className="mt-8 grid gap-4 md:grid-cols-2" id="pratyangira">
            <div className="rounded-xl border border-neutral-200 bg-white p-5">
              <h3 className="font-serif text-xl">Pratyangira Homam</h3>
              <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
                Amavasya Homam is performed each new moon at Paathala Pratyangira Devi temple. Rahu Kala Pooja on
                Tuesdays 2:30–4:00 pm.
              </p>
              <a href="#book" className="mt-3 inline-block text-emerald-700 hover:underline">
                Book Seva
              </a>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-5">
              <h3 className="font-serif text-xl">Ganapathi Homam</h3>
              <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
                For auspicious beginnings and obstacle removal at the Naadi Ganapathi shrine; Vidya and Lakshmi variants
                available.
              </p>
              <a href="#book" className="mt-3 inline-block text-emerald-700 hover:underline">
                Book Seva
              </a>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={180}>
          <div className="mt-10 rounded-xl border border-neutral-200 bg-emerald-50 p-5" id="book">
            <h2 className="font-serif text-2xl">Offer a Homam</h2>
            <p className="mt-2 text-neutral-700">
              Select a homam and share your details (gotra, nakshatra, sankalpa). We will coordinate with the temple for
              scheduling.
            </p>
            <form
              className="mt-4 grid gap-3 md:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault()
                alert("Thank you! We will get in touch to confirm your Homam.")
              }}
            >
              <label className="block">
                <span className="block text-sm text-neutral-700">Homam</span>
                <select className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm">
                  <option>Pratyangira Homam</option>
                  <option>Ganapathi Homam</option>
                  <option>Devi Homam</option>
                  <option>Other (specify in notes)</option>
                </select>
              </label>
              <label className="block">
                <span className="block text-sm text-neutral-700">Preferred Date</span>
                <input
                  type="date"
                  className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm"
                />
              </label>
              <label className="block md:col-span-2">
                <span className="block text-sm text-neutral-700">Devotee Name</span>
                <input
                  type="text"
                  className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm"
                />
              </label>
              <label className="block">
                <span className="block text-sm text-neutral-700">Gotra</span>
                <input
                  type="text"
                  className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm"
                />
              </label>
              <label className="block">
                <span className="block text-sm text-neutral-700">Nakshatra</span>
                <input
                  type="text"
                  className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm"
                />
              </label>
              <label className="block md:col-span-2">
                <span className="block text-sm text-neutral-700">Sankalpa / Notes</span>
                <textarea
                  className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm"
                  rows={4}
                />
              </label>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="rounded-md bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-700 transition"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </FadeUp>

        <section className="h-12" />
      </main>

      <SiteFooter />
    </>
  )
}
