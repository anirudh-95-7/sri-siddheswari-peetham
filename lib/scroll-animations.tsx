"use client"

import { useEffect } from "react"

export function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
      }
    })
  }, observerOptions)

  // Observe all elements with scroll animation classes
  const elements = document.querySelectorAll(
    ".scroll-fade-in, .scroll-slide-left, .scroll-slide-right, .scroll-zoom-in",
  )

  elements.forEach((el) => observer.observe(el))

  return () => observer.disconnect()
}

export function useScrollAnimations() {
  useEffect(() => {
    const cleanup = initScrollAnimations()
    return cleanup
  }, [])
}
