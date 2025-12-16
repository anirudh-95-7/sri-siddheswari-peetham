import { AnimateOnScroll } from "@/components/animate-on-scroll"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { MapPin, Globe } from "lucide-react"

const shrines = [
  {
    name: "Sri Lalitha Peetham",
    location: "Visakhapatnam, Andhra Pradesh",
    description:
      "A sacred shrine dedicated to Sri Lalitha Devi, established as a branch of Sri Siddheswari Peetham to serve devotees in the coastal region of Andhra Pradesh.",
    image: "/sri-lalitha-temple-visakhapatnam.jpg",
    established: "Under H.H. Sri Siddheswarananda Bharati Swami",
  },
  {
    name: "Sri Shirdi Sai Baba Mandir",
    location: "Ongole, Andhra Pradesh",
    description:
      "A temple dedicated to Sri Shirdi Sai Baba, reflecting the Peetham's inclusive spiritual approach and devotion to all forms of the Divine.",
    image: "/shirdi-sai-baba-temple-ongole.jpg",
    established: "Branch temple under Peetham guidance",
  },
  {
    name: "Mouna Prabha",
    location: "Guntur, Andhra Pradesh",
    description:
      "A spiritual center named after the founder's principle of Mouna (silence), serving as a meditation and spiritual practice center.",
    image: "/spiritual-meditation-center-guntur.jpg",
    established: "Spiritual center for meditation practices",
  },
  {
    name: "Sri Siddheswari Branch",
    location: "Srisailam, Andhra Pradesh",
    description:
      "A branch established at the sacred Srisailam, one of the twelve Jyotirlingas, connecting devotees to the divine energy of Lord Mallikarjuna.",
    image: "/srisailam-temple-branch.jpg",
    established: "Branch at the sacred Jyotirlinga site",
  },
]

const organizations = [
  {
    name: "Sri Siddheswari Seva Inc.",
    location: "United States",
    description:
      "A volunteer-based, non-profit organization founded in 2010 to preserve and propagate Sanatana Dharma in the United States and support the activities of Sri Siddheswari Peetham.",
    website: "srisiddheswariseva.org",
    established: "2010",
    activities: ["Dharma preservation", "Cultural programs", "Spiritual education", "Community service"],
  },
]

export default function SisterShrinesPage() {
  return (
    <>
      {/* Add header */}
      <SiteHeader />

      <div className="min-h-screen bg-gradient-to-b from-emerald-50/30 to-white pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 py-20 text-white">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative mx-auto max-w-4xl px-4 text-center">
            <AnimateOnScroll>
              <h1 className="mb-6 font-serif text-4xl font-bold tracking-tight md:text-5xl">
                Affiliated Temples & Organizations
              </h1>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-emerald-100 md:text-xl">
                Discover the network of temples and spiritual centers established under the guidance of Sri Siddheswari
                Peetham, spreading divine grace across regions.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4">
            <AnimateOnScroll>
              <div className="mb-12 text-center">
                <h2 className="mb-4 font-serif text-3xl font-bold text-neutral-900 md:text-4xl">
                  Affiliated Temples & Shrines
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-neutral-600">
                  Sacred spaces established to bring the blessings of Sri Siddheswari Devi closer to devotees across
                  different regions.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid gap-8 md:grid-cols-2">
              {shrines.map((shrine, index) => (
                <AnimateOnScroll key={shrine.name} delay={index * 0.1}>
                  <div className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
                    <div className="aspect-[3/2] overflow-hidden">
                      <img
                        src={shrine.image || "/placeholder.svg"}
                        alt={`${shrine.name} temple`}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="mb-2 font-serif text-xl font-bold text-neutral-900">{shrine.name}</h3>
                      <p className="mb-3 text-sm font-medium text-emerald-700 flex items-center gap-1"><MapPin className="h-4 w-4" /> {shrine.location}</p>
                      <p className="mb-4 text-neutral-600 leading-relaxed">{shrine.description}</p>
                      <div className="rounded-lg bg-emerald-50 p-3">
                        <p className="text-sm text-emerald-800">
                          <strong>Established:</strong> {shrine.established}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Related Organizations Section */}
        <section className="bg-neutral-50 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <AnimateOnScroll>
              <div className="mb-12 text-center">
                <h2 className="mb-4 font-serif text-3xl font-bold text-neutral-900 md:text-4xl">
                  Related Organizations
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-neutral-600">
                  Non-profit organizations working to preserve and propagate the teachings and traditions of Sri
                  Siddheswari Peetham.
                </p>
              </div>
            </AnimateOnScroll>

            {organizations.map((org, index) => (
              <AnimateOnScroll key={org.name} delay={index * 0.1}>
                <div className="rounded-xl bg-white p-8 shadow-lg">
                  <div className="mb-6">
                    <h3 className="mb-2 font-serif text-2xl font-bold text-neutral-900">{org.name}</h3>
                    <p className="mb-2 text-emerald-700 font-medium flex items-center gap-1">
                      <MapPin className="h-4 w-4" /> {org.location} • Established {org.established}
                    </p>
                    {org.website && <p className="text-sm text-neutral-600 flex items-center gap-1"><Globe className="h-4 w-4" /> {org.website}</p>}
                  </div>

                  <p className="mb-6 text-neutral-600 leading-relaxed">{org.description}</p>

                  {org.activities && (
                    <div>
                      <h4 className="mb-3 font-semibold text-neutral-900">Key Activities:</h4>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {org.activities.map((activity) => (
                          <div key={activity} className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-emerald-600" />
                            <span className="text-sm text-neutral-700">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </section>

        {/* Connection Section */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <AnimateOnScroll>
              <div className="rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 p-8 text-white">
                <h2 className="mb-4 font-serif text-2xl font-bold md:text-3xl">
                  One Divine Mission, Many Sacred Spaces
                </h2>
                <p className="mb-6 text-emerald-100 leading-relaxed">
                  Under the guidance of H.H. Sri Siddheswarananda Bharati Swami, these affiliated temples and
                  organizations work together to spread the divine grace of Sri Siddheswari Devi and preserve the
                  ancient wisdom of Sanatana Dharma for future generations.
                </p>
                <div className="text-sm text-emerald-200">
                  "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः" - May all beings be happy and free from illness
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </div>

      {/* Add footer */}
      <SiteFooter />
    </>
  )
}
