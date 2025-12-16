"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { translations, type Language } from "./translations"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem("language") as Language
    if (saved && ["en", "te", "hi", "ta"].includes(saved)) {
      setLanguageState(saved)
      document.documentElement.lang = saved
    } else {
      document.documentElement.lang = "en"
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
    document.documentElement.lang = lang
  }

  const t = (key: string): string => {
    // Use English for server-side rendering and initial hydration to prevent mismatches
    // Only use the selected language state after the component has mounted on the client
    const currentLang = mounted ? language : "en"
    const translation = translations[currentLang]?.[key] || translations.en[key] || key
    // Replace {year} with current year
    return translation.replace("{year}", new Date().getFullYear().toString())
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}

// Re-export the Language type for convenience
export type { Language }
