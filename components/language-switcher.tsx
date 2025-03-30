"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Globe } from "lucide-react"
import type { Locale } from "@/i18n-config"

interface LanguageSwitcherProps {
  currentLocale: Locale
}

export default function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const toggleDropdown = () => setIsOpen(!isOpen)

  const switchLanguage = (locale: Locale) => {
    if (locale === currentLocale) return

    // Get current path without locale
    const currentPath = window.location.pathname
    const pathWithoutLocale = currentPath.replace(/^\/(pt-BR|en)/, "") || "/"

    // Set cookie
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=${60 * 60 * 24 * 30}`

    // Navigate to the same page with new locale
    router.push(`/${locale}${pathWithoutLocale}`)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-1 text-sm font-medium cursor-pointer"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="h-4 w-4" />
        <span>{currentLocale === "pt-BR" ? "PT" : "EN"}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-24 rounded-md shadow-lg bg-background border border-border overflow-hidden z-50">
          <div className="py-1">
            <button
              onClick={() => switchLanguage("pt-BR")}
              className={`block w-full text-left px-4 py-2 text-sm ${currentLocale === "pt-BR" ? "bg-muted" : "hover:bg-muted"} transition-colors`}
            >
              Português
            </button>
            <button
              onClick={() => switchLanguage("en")}
              className={`block w-full text-left px-4 py-2 text-sm ${currentLocale === "en" ? "bg-muted" : "hover:bg-muted"} transition-colors`}
            >
              English
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

