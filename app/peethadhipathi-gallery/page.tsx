"use client"
import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { FadeUp } from "@/components/animate-on-scroll"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { useLanguage } from "@/lib/language-context"

export default function PeethadhipathiGalleryPage() {
  const { t } = useLanguage()
  const [activeSwamiIndex, setActiveSwamiIndex] = useState(0)

  const peethadhipathis = [
    {
      id: 1,
      name: t("swami1.name"),
      title: t("swami1.title"),
      period: t("swami1.period"),
      image: "/mouna-swami-tapas.jpg",
      gallery: [
        "/mouna-swami-tapas.jpg",
        "/mouna-swami-portrait-1.jpg",
        "/mouna-swami-seated.jpg",
        "/mouna-swami-procession.jpg",
      ],
      description: t("swami1.long_description"),
      achievements: [
        t("swami1.achievement1"),
        t("swami1.achievement2"),
        t("swami1.achievement3"),
        t("swami1.achievement4"),
        t("swami1.achievement5"),
        t("swami1.achievement6"),
        t("swami1.achievement7"),
      ],
    },
    {
      id: 2,
      name: t("swami2.name"),
      title: t("swami2.title"),
      period: t("swami2.period"),
      image: "/vimalananda-bharati-portrait.jpg",
      gallery: ["/vimalananda-bharati-portrait.jpg", "/vimalananda-bharati-statue.jpg"],
      description: t("swami2.long_description"),
      achievements: [
        t("swami2.achievement1"),
        t("swami2.achievement2"),
        t("swami2.achievement3"),
        t("swami2.achievement4"),
      ],
    },
    {
      id: 3,
      name: t("swami3.name"),
      title: t("swami3.title"),
      period: t("swami3.period"),
      image: "/trivikrama-ramananda-standing.jpg",
      gallery: ["/trivikrama-ramananda-standing.jpg", "/trivikrama-ramananda-puja.jpg"],
      description: t("swami3.long_description"),
      achievements: [
        t("swami3.achievement1"),
        t("swami3.achievement2"),
        t("swami3.achievement3"),
        t("swami3.achievement4"),
      ],
    },
    {
      id: 4,
      name: t("swami4.name"),
      title: t("swami4.title"),
      period: t("swami4.period"),
      image: "/siva-chidananda-standing.jpg",
      gallery: [
        "/siva-chidananda-standing.jpg",
        "/siva-chidananda-seated.jpg",
      ],
      description: t("swami4.long_description"),
      achievements: [
        t("swami4.achievement1"),
        t("swami4.achievement2"),
        t("swami4.achievement3"),
        t("swami4.achievement4"),
        t("swami4.achievement5"),
      ],
    },
    {
      id: 5,
      name: t("swami5.name"),
      title: t("swami5.title"),
      period: t("swami5.period"),
      image: "/siddheswarananda-blessing.png",
      gallery: [
        "/siddheswarananda-blessing.png",
        "/siddheswarananda-seated.png",
        "/siddheswarananda-garland.jpg",
      ],
      description: t("swami5.long_description"),
      achievements: [
        t("swami5.achievement1"),
        t("swami5.achievement2"),
        t("swami5.achievement3"),
        t("swami5.achievement4"),
        t("swami5.achievement5"),
        t("swami5.achievement6"),
      ],
    },
    {
      id: 6,
      name: t("swami6.name"),
      title: t("swami6.title"),
      period: t("swami6.period"),
      image: "/datteshwarananda-standing.jpg",
      gallery: ["/datteshwarananda-standing.jpg"],
      description: t("swami6.long_description"),
      achievements: [
        t("swami6.achievement1"),
        t("swami6.achievement2"),
        t("swami6.achievement3"),
        t("swami6.achievement4"),
        t("swami6.achievement5"),
      ],
    },
  ]

  const activeSwami = peethadhipathis[activeSwamiIndex]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextSwami = () => {
    setActiveSwamiIndex((prev) => (prev + 1) % peethadhipathis.length)
    setCurrentImageIndex(0)
  }

  const prevSwami = () => {
    setActiveSwamiIndex((prev) => (prev - 1 + peethadhipathis.length) % peethadhipathis.length)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % activeSwami.gallery.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + activeSwami.gallery.length) % activeSwami.gallery.length)
  }

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-stone-50 pt-24 pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-amber-900 mb-4">
                {t("gallery.title")}
              </h1>
              <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
              <p className="max-w-3xl mx-auto text-lg text-neutral-600 italic leading-relaxed">
                {t("gallery.description")}
              </p>
              <p className="mt-4 font-serif text-xl text-amber-800 font-medium">
                {t("gallery.verse")}
              </p>
            </div>
          </FadeUp>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Navigation List */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-ambder-100">
                <div className="p-4 bg-amber-900 text-white">
                  <h3 className="font-serif text-xl font-bold text-center">
                    {t("parampara.title")}
                  </h3>
                </div>
                <div className="divide-y divide-amber-100/50">
                  {peethadhipathis.map((swami, idx) => (
                    <button
                      key={swami.id}
                      onClick={() => {
                        setActiveSwamiIndex(idx)
                        setCurrentImageIndex(0)
                      }}
                      className={`w-full text-left p-4 transition-all duration-300 flex items-center gap-4 hover:bg-amber-50 ${idx === activeSwamiIndex
                        ? "bg-amber-50 border-l-4 border-amber-600"
                        : "border-l-4 border-transparent"
                        }`}
                    >
                      <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-amber-200">
                        <Image
                          src={swami.image}
                          alt={swami.name}
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                      <div>
                        <h4 className={`font-medium ${idx === activeSwamiIndex ? "text-amber-900" : "text-neutral-700"}`}>
                          {swami.name}
                        </h4>
                        <p className="text-xs text-neutral-500">{swami.period}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="hidden lg:block bg-amber-50 p-6 rounded-xl border border-amber-100 text-center">
                <p className="text-amber-900 italic font-medium">
                  "{t("gallery.quote")}"
                </p>
              </div>
            </div>

            {/* Right Column: Main Content */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-amber-100 min-h-[800px]">
                {/* Header Section */}
                <div className="relative h-24 bg-gradient-to-r from-amber-900 to-amber-800 overflow-visible">
                  <div className="absolute -bottom-16 left-8 sm:left-12 p-1 bg-white rounded-xl shadow-lg">
                    <div className="relative w-32 h-40 rounded-lg overflow-hidden border border-amber-100">
                      <Image
                        src={activeSwami.image}
                        alt={activeSwami.name}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                  {/* Navigation Arrows (Top Right) */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
                    <button
                      onClick={prevSwami}
                      className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-sm"
                      aria-label="Previous Swami"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextSwami}
                      className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-sm"
                      aria-label="Next Swami"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                <div className="pt-20 px-8 pb-8">
                  <FadeUp key={activeSwami.id}>
                    <div className="flex flex-col gap-1 mb-6">
                      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-900 leading-tight">
                        {activeSwami.name}
                      </h2>
                      <p className="text-lg text-amber-600 font-medium">
                        {activeSwami.title}
                      </p>
                      <p className="text-neutral-500 font-medium">
                        {activeSwami.period}
                      </p>
                    </div>

                    <div className="grid gap-8">
                      <div className="prose prose-amber max-w-none">
                        <p className="text-lg leading-relaxed text-neutral-700 whitespace-pre-line">
                          {activeSwami.description}
                        </p>
                      </div>

                      {/* Photo Gallery with Slider */}
                      {activeSwami.gallery.length > 0 && (
                        <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-100">
                          <h3 className="font-serif text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                            {t("gallery.photo_gallery")}
                          </h3>
                          <div className="relative aspect-video w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-md group">
                            <Image
                              src={activeSwami.gallery[currentImageIndex]}
                              alt={`${activeSwami.name} - Image ${currentImageIndex + 1}`}
                              fill
                              className="object-contain bg-black/5"
                            />
                            {activeSwami.gallery.length > 1 && (
                              <>
                                <button
                                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition-colors opacity-0 group-hover:opacity-100"
                                >
                                  <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button
                                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition-colors opacity-0 group-hover:opacity-100"
                                >
                                  <ChevronRight className="w-5 h-5" />
                                </button>
                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                                  {activeSwami.gallery.map((_, idx) => (
                                    <div
                                      key={idx}
                                      className={`w-2 h-2 rounded-full transition-colors ${idx === currentImageIndex ? "bg-white" : "bg-white/50"}`}
                                    />
                                  ))}
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Key Contributions */}
                      <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
                        <h3 className="font-serif text-xl font-bold text-amber-900 mb-4">
                          {t("gallery.contributions")}
                        </h3>
                        <ul className="grid gap-3">
                          {activeSwami.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex gap-3 items-start p-3 bg-white rounded-lg shadow-sm border border-amber-100/50 hover:shadow-md transition-shadow">
                              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs font-bold mt-0.5">
                                {idx + 1}
                              </span>
                              <span className="text-neutral-700">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </FadeUp>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a href="/parampara" className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-900 font-medium transition-colors">
              <ChevronLeft className="w-4 h-4" />
              {t("gallery.back")}
            </a>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
