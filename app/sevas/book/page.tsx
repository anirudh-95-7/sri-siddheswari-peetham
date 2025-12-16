import Link from "next/link"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function BookSevaPage({
  searchParams,
}: {
  searchParams: { deity?: string }
}) {
  const deity = searchParams?.deity
  return (
    <>
      <SiteHeader />

      <main className="mx-auto max-w-3xl px-4 py-10 pt-24">
        <h1 className="font-serif text-3xl">Book a Seva</h1>
        <p className="mt-3 text-neutral-700">
          {deity ? (
            <>
              You’re booking for <span className="font-medium">{deity.replaceAll("-", " ")}</span>. Choose a suitable
              date from the Events calendar and confirm with the office.
            </>
          ) : (
            <>Choose your deity and preferred date on the Events page, then confirm your booking with the office.</>
          )}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href={`/events${deity ? `?deity=${encodeURIComponent(deity)}` : ""}`} className="inline-flex">
            <span className="rounded-md bg-amber-600 px-4 py-2 text-white transition hover:bg-amber-700">
              Browse Events & Schedule
            </span>
          </Link>
          <Link href="/contact" className="inline-flex">
            <span className="rounded-md border border-neutral-300 px-4 py-2 text-neutral-800 transition hover:bg-neutral-50">
              Contact Peetham Office
            </span>
          </Link>
        </div>

        <div className="mt-10 rounded-lg border border-neutral-200 bg-white p-4">
          <h2 className="text-lg font-semibold">What’s next</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-700">
            <li>Pick a date/time from the Events calendar.</li>
            <li>Call or email the office to confirm availability and offerings.</li>
            <li>Complete the donation as guided and arrive 15 minutes early on the day.</li>
          </ul>
        </div>
      </main>

      <SiteFooter />
    </>
  )
}
