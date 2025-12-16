"use client"

import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  parseISO,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns"
import { useMemo, useState } from "react"

export type CalendarEvent = {
  id: string
  title: string
  date: string // yyyy-MM-dd
  time?: string
  deity?: string
  location?: string
  description?: string
}

type Props = {
  events: CalendarEvent[]
  deityFilter?: string
  initialMonth?: string
}

const weekdays = ["S", "M", "T", "W", "T", "F", "S"]

export default function EventsCalendar({ events, deityFilter, initialMonth }: Props) {
  const [month, setMonth] = useState<Date>(initialMonth ? parseISO(initialMonth) : new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const start = startOfWeek(startOfMonth(month))
  const end = endOfWeek(endOfMonth(month))
  const days = eachDayOfInterval({ start, end })

  const filtered = useMemo(() => {
    return deityFilter ? events.filter((e) => (e.deity || "").toLowerCase() === deityFilter.toLowerCase()) : events
  }, [events, deityFilter])

  const byDay = useMemo(() => {
    const map = new Map<string, CalendarEvent[]>()
    for (const e of filtered) {
      if (!map.has(e.date)) map.set(e.date, [])
      map.get(e.date)!.push(e)
    }
    return map
  }, [filtered])

  const selectedKey = selectedDate ? format(selectedDate, "yyyy-MM-dd") : ""
  const selectedEvents = selectedKey ? byDay.get(selectedKey) || [] : []

  return (
    <div className="w-full bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 px-6 py-4 border-b border-amber-100">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setMonth((m) => subMonths(m, 1))}
            className="w-8 h-8 rounded-full border border-amber-200 flex items-center justify-center text-amber-700 hover:bg-amber-100 hover:scale-110 transition-all duration-200"
            aria-label="Previous month"
          >
            ←
          </button>
          <div className="text-lg font-semibold text-amber-900">{format(month, "MMMM yyyy")}</div>
          <button
            onClick={() => setMonth((m) => addMonths(m, 1))}
            className="w-8 h-8 rounded-full border border-amber-200 flex items-center justify-center text-amber-700 hover:bg-amber-100 hover:scale-110 transition-all duration-200"
            aria-label="Next month"
          >
            →
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-7 mb-2">
          {weekdays.map((w, index) => (
            <div key={`${w}-${index}`} className="text-center text-xs font-medium text-neutral-500 py-2">
              {w}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {days.map((d) => {
            const key = format(d, "yyyy-MM-dd")
            const has = byDay.has(key)
            const inMonth = isSameMonth(d, month)
            const selected = selectedDate ? isSameDay(d, selectedDate) : false
            const eventCount = byDay.get(key)?.length || 0

            return (
              <button
                key={key}
                onClick={() => setSelectedDate(d)}
                className={`relative aspect-square rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-md
                  ${inMonth ? "text-neutral-900" : "text-neutral-400"}
                  ${selected
                    ? "bg-amber-500 text-white shadow-lg scale-105"
                    : has
                      ? "bg-amber-50 border border-amber-200 hover:bg-amber-100"
                      : "hover:bg-neutral-50"
                  }`}
                aria-label={`Select ${format(d, "PPP")}${has ? ` - ${eventCount} events` : ""}`}
              >
                <span className="absolute inset-0 flex items-center justify-center">{format(d, "d")}</span>
                {has && !selected && (
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                  </div>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {selectedEvents.length > 0 && (
        <div className="border-t border-neutral-200 bg-neutral-50 p-4">
          <h3 className="text-sm font-semibold text-neutral-900 mb-3">
            {format(selectedDate!, "MMMM d, yyyy")} Events
          </h3>
          <div className="space-y-2">
            {selectedEvents.map((e) => (
              <div
                key={e.id}
                className="bg-white rounded-lg p-3 border border-neutral-200 hover:shadow-sm hover:border-amber-200 transition-all duration-200 group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm text-neutral-900 truncate group-hover:text-amber-900 transition-colors">
                      {e.title}
                    </p>
                    <div className="flex items-center gap-2 mt-1 text-xs text-neutral-600">
                      {e.time && <span>{e.time}</span>}
                      {e.deity && (
                        <span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full">{e.deity}</span>
                      )}
                      {e.location && <span>{e.location}</span>}
                    </div>
                  </div>
                  <button className="text-xs text-amber-600 hover:text-amber-700 font-medium whitespace-nowrap hover:scale-105 transition-all">
                    Book Seva
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
