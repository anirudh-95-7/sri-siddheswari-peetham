"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const node = ref.current
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => setVisible(true), delay)
            obs.disconnect()
          }
        })
      },
      { threshold: 0.15 },
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      } ${className}`}
    >
      {children}
    </div>
  )
}
