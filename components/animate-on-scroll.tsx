"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export function FadeUp({
  className,
  children,
  delay = 0,
}: {
  className?: string
  children: React.ReactNode
  delay?: number
}) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) {
      el.classList.add("opacity-100", "translate-y-0")
      return
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setTimeout(() => {
              el.classList.add("opacity-100", "translate-y-0")
            }, delay)
            obs.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15 },
    )

    el.classList.add("opacity-0", "translate-y-3")
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={cn("transition-all duration-700", className)}>
      {children}
    </div>
  )
}

export function AnimateOnScroll({
  className,
  children,
  delay = 0,
}: {
  className?: string
  children: React.ReactNode
  delay?: number
}) {
  return (
    <FadeUp className={className} delay={delay}>
      {children}
    </FadeUp>
  )
}
