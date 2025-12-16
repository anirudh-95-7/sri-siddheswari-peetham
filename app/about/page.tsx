import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import Image from "next/image"
import { FadeUp } from "@/components/animate-on-scroll"
import { Mountain, ExternalLink, Leaf, CircleDot } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-8 pt-24 md:pt-28">
        {/* Hero Section */}
        <FadeUp>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 p-8 md:p-12">
            <div className="relative z-10">
              <h1 className="font-serif text-4xl md:text-5xl text-amber-900 mb-4">About Sri Siddheswari Peetham</h1>
              <p className="text-lg text-amber-800 leading-relaxed max-w-2xl">
                A sacred sanctuary established in 1936, dedicated to preserving ancient Vedic traditions and spiritual
                wisdom in the heart of Courtallam's divine landscape.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-200/30 rounded-full blur-2xl"></div>
          </div>
        </FadeUp>

        {/* History Section */}
        <div className="mt-16 grid gap-12 md:grid-cols-2 items-center">
          <FadeUp delay={100}>
            <div className="group">
              <Image
                src="/swamiji-at-peetham.jpeg"
                alt="H.H Sri Siddheswarananda Bharati Swami"
                width={500}
                height={400}
                className="rounded-xl shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105"
              />
              <p className="text-sm text-center text-neutral-600 mt-3">H.H Sri Siddheswarananda Bharati Swami</p>
            </div>
          </FadeUp>

          <FadeUp delay={200}>
            <div className="space-y-6">
              <h2 className="font-serif text-3xl text-amber-900">Sacred Foundation</h2>
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  Sri Siddheswari Peetham was established at Courtallam, in the Tirunelveli district of Tamil Nadu, by{" "}
                  <strong>Sri Sri Sri Sivachidananda Saraswati Swami (Mounaswami)</strong>, revered as the silent sage of Courtallam.
                </p>
                <p>
                  Born as Sivayya in a village in Bapatla taluk, he led a devoted grihastha life before the sudden
                  death of a relative in the Godavari awakened in him a deep awareness of life's impermanence. In 1906,
                  he left home in search of a Guru, receiving sannyasa from Sri Achutananda Saraswati.
                </p>
                <p>
                  At an All-India Vedic conference in Kashmir, his Guru warned him about the subtle rise of ego through
                  unasked display of knowledge. Taking this to heart, he vowed lifelong silence (mouna), communicating
                  only through gestures and written notes — hence the name "Mouna Swamy."
                </p>
                <p>
                  The sacred idol of <strong>Sri Siddheswari Devi (Raja Rajeswari Devi)</strong> was installed on
                  October 3, 1916, marking the beginning of this divine sanctuary. He attained Mahasamadhi on December
                  28, 1943, and devotees continue to experience his presence and blessings to this day.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Location & Significance */}
        <FadeUp delay={300}>
          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-amber-100 hover:shadow-xl transition-all duration-300">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center group">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                  <span className="text-2xl text-amber-700"><Mountain className="w-8 h-8" /></span>
                </div>
                <h3 className="font-semibold text-amber-900 mb-2">Sacred Location</h3>
                <p className="text-sm text-neutral-600">
                  Nestled in Courtallam, known as Agasthya Kshethram, famous for its healing waterfalls and natural
                  beauty.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                  <span className="text-2xl text-amber-700"><CircleDot className="w-8 h-8" /></span>
                </div>
                <h3 className="font-semibold text-amber-900 mb-2">Vedic Traditions</h3>
                <p className="text-sm text-neutral-600">
                  Following the ancient traditions of Sri Adi Shankaracharya, preserving higher knowledge and Veda
                  Dharma.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                  <span className="text-2xl text-amber-700"><Leaf className="w-8 h-8" /></span>
                </div>
                <h3 className="font-semibold text-amber-900 mb-2">Natural Healing</h3>
                <p className="text-sm text-neutral-600">
                  Best visited during southwest monsoon (June-September) for the full experience of nature's medicinal
                  herbs.
                </p>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Guru Parampara */}
        <div className="mt-16">
          <FadeUp delay={400}>
            <h2 className="font-serif text-3xl text-center text-amber-900 mb-8">Guru Parampara</h2>
          </FadeUp>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Sri Sri Sri Sivachidananda Saraswati Swami",
                title: "Founder (Mounaswami)",
                period: "1916-1943",
              },
              { name: "H.H Sri Vimalananda Bharati Swamy", title: "Second Peethadhipathi", period: "1936-1965" },
              {
                name: "H.H Sri Trivikrama Ramananda Bharati Swamy",
                title: "Third Peethadhipathi",
                period: "1965-1985",
              },
              { name: "H.H Sri Siva Chidananda Bharati Swamy", title: "Fourth Peethadhipathi", period: "1985-2010" },
              {
                name: "H.H Sri Siddheswarananda Bharati Swami",
                title: "Present Peethadhipathi",
                period: "2010-Present",
              },
            ].map((guru, index) => (
              <FadeUp key={index} delay={500 + index * 100}>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200 hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-amber-300 transition-colors">
                      <span className="text-amber-800 font-bold">{index + 1}</span>
                    </div>
                    <h3 className="font-semibold text-amber-900 text-sm mb-1">{guru.name}</h3>
                    <p className="text-xs text-amber-700 mb-1">{guru.title}</p>
                    <p className="text-xs text-neutral-600">{guru.period}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* Presiding Deity */}
        <FadeUp delay={800}>
          <div className="mt-16 text-center bg-gradient-to-r from-amber-900 to-orange-800 text-white rounded-2xl p-12 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-serif text-3xl mb-4 text-white">Presiding Deity</h2>
              <p className="text-xl mb-2">Sri Raja Rajeshwari Devi</p>
              <p className="text-lg opacity-90 mb-4">(Sri Siddheswari Devi)</p>
              <p className="max-w-2xl mx-auto leading-relaxed opacity-90">
                The divine mother goddess, installed with great reverence on October 3, 1916, continues to bless
                devotees with her infinite grace and compassion, making this peetham a beacon of spiritual light.
              </p>
            </div>
            <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          </div>
        </FadeUp>
      </main>
      <SiteFooter />
    </>
  )
}
