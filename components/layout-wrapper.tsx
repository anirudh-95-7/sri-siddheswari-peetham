"use client"

import type React from "react"

import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { SiteHeader } from "./site-header"
import SiteFooter from "./site-footer"

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const [showWebsite, setShowWebsite] = useState(false)

  useEffect(() => {
    if (!isHomePage) {
      setShowWebsite(true)
    } else {
      setShowWebsite(false)
    }
  }, [isHomePage])

  const shouldShowHeaderFooter = !isHomePage || showWebsite

  return (
    <>
      {shouldShowHeaderFooter && <SiteHeader />}
      <div className={shouldShowHeaderFooter ? "pt-16 md:pt-20" : ""}>{children}</div>
      {shouldShowHeaderFooter && <SiteFooter />}
    </>
  )
}
