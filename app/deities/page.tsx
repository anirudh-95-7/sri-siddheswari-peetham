"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeUp } from "@/components/animate-on-scroll"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

const DEITIES = [
  {
    key: "raja-rajeswari",
    slug: "raja-rajeswari",
    img: "/sri-raja-rajeswari-exact.png",
  },
  {
    key: "sri-chakra",
    slug: "sri-chakra",
    img: "/maha-meru-worship-with-lamps.png",
  },
  {
    key: "naadi-ganapathi",
    slug: "naadi-ganapathi",
    img: "/naadi-ganapathi-exact.jpg",
  },
  {
    key: "pratyangira",
    slug: "pratyangira",
    img: "/pratyangira-devi-elaborate.png",
  },
  {
    key: "kaala-bhairava",
    slug: "kaala-bhairava",
    img: "/kala-bhairava-exact.png",
  },
  {
    key: "kameswara-swami",
    slug: "kameswara-swami",
    img: "/kameswara-swami.png",
    sevas: ["Abhishekam", "Rudrabhishekam", "Archana"],
  },
  {
    key: "ratnagarbha-ganapati",
    slug: "ratnagarbha-ganapati",
    img: "/ratnagarbha-ganapati.png",
    sevas: ["Ganapathi Homam", "Abhishekam", "Modaka Offering"],
  },
  {
    key: "narasimha-swami",
    slug: "narasimha-swami",
    img: "/narasimha-swami-exact.png",
    sevas: ["Narasimha Homam", "Abhishekam", "Archana", "Sahasranama Parayana"],
  },
  {
    key: "radha-krishna",
    slug: "radha-krishna",
    img: "/radha-krishna-new.png",
    sevas: ["Abhishekam", "Archana", "Bhagavad Gita Parayana", "Bhajans"],
  },
  {
    key: "sanjeevaraya-hanuman",
    slug: "sanjeevaraya-hanuman",
    img: "/sanjeevaraya-hanuman-final.png",
    sevas: ["Hanuman Chalisa", "Abhishekam", "Archana", "Sundara Kanda Parayana"],
  },
  {
    key: "swetha-kali",
    slug: "swetha-kali",
    img: "/swetha-kali-exact.png",
    sevas: ["Kali Puja", "Abhishekam", "Archana", "Sahasranama Parayana", "Special Friday Puja"],
  },
  {
    key: "naga-devatha",
    slug: "naga-devatha",
    img: "/naga-devatha.png",
    sevas: ["Naga Puja", "Milk Abhishekam", "Archana", "Naga Kavacham", "Special Panchami Puja"],
  },
  {
    key: "dandaayudha-pani",
    slug: "dandaayudha-pani",
    img: "/dandaayudha-pani.png",
    sevas: ["Abhishekam", "Archana", "Special Puja", "Danda Puja"],
  },
  {
    key: "seetha-rama",
    slug: "seetha-rama",
    img: "/seetha-rama.png",
    sevas: ["Ramayana Parayana", "Abhishekam", "Archana", "Sahasranama Parayana", "Special Rama Navami Puja"],
  },
]

import { useLanguage } from "@/lib/language-context"

export default function DeitiesPage() {
  const { t } = useLanguage()
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-8 pt-24 md:pt-28">
        <FadeUp>
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl text-amber-900 mb-4">{t('deities.hero.title')}</h1>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              {t('deities.hero.description')}
            </p>
          </div>
        </FadeUp>

        <section className="mt-8 md:mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {DEITIES.map((d, i) => (
              <FadeUp key={d.slug} delay={80 + i * 60}>
                <article className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={d.img || "/placeholder.svg"}
                      alt={`${t(`deity.${d.key}.name`)} - shrine or deity`}
                      className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <div className="flex gap-2">
                        <Link href={`/events?deity=${encodeURIComponent(d.slug)}`} className="flex-1">
                          <Button size="sm" className="w-full bg-amber-600 text-white hover:bg-amber-700 text-xs">
                            View Schedule
                          </Button>
                        </Link>
                        <Link href={`/sevas/book?deity=${encodeURIComponent(d.slug)}`} className="flex-1">
                          <Button
                            size="sm"
                            variant="outline"
                            className="w-full border-white text-white hover:bg-white hover:text-amber-900 text-xs bg-transparent"
                          >
                            Book Seva
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-xl text-amber-900 mb-3 group-hover:text-amber-700 transition-colors">
                      {t(`deity.${d.key}.name`)}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">{t(`deity.${d.key}.desc`)}</p>

                    {d.sevas && (
                      <div className="mt-4 pt-4 border-t border-neutral-100">
                        <div className="flex items-center justify-between text-xs text-neutral-500">
                          <span>Sevas: {d.sevas.join(", ")}</span>
                          <span className="px-2 py-1 bg-amber-50 text-amber-700 rounded-full">Active</span>
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </section>

        <FadeUp delay={600}>
          <div className="mt-16 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
            <h2 className="font-serif text-3xl text-amber-900 text-center mb-8">{t('deities.schedule.title')}</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { time: "5:30 AM", seva: t("deities.schedule.suprabhatam"), desc: t("deities.schedule.suprabhatam.desc") },
                { time: "6:00 AM", seva: t("deities.schedule.abhishekam"), desc: t("deities.schedule.abhishekam.desc") },
                { time: "7:30 AM", seva: t("deities.schedule.alankaram"), desc: t("deities.schedule.alankaram.desc") },
                { time: "12:00 PM", seva: t("deities.schedule.madhyahna"), desc: t("deities.schedule.madhyahna.desc") },
                { time: "6:00 PM", seva: t("deities.schedule.sandhya"), desc: t("deities.schedule.sandhya.desc") },
                { time: "8:00 PM", seva: t("deities.schedule.sayana"), desc: t("deities.schedule.sayana.desc") },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-amber-300 transition-colors">
                      <span className="text-amber-800 font-bold text-sm">{item.time}</span>
                    </div>
                    <h3 className="font-semibold text-amber-900 mb-1">{item.seva}</h3>
                    <p className="text-xs text-neutral-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={700}>
          <p className="mt-8 text-center text-sm text-neutral-500">
            {t('deities.schedule.note')}
          </p>
        </FadeUp>
      </main>
      <SiteFooter />
    </>
  )
}
