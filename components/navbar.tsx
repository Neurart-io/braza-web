"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import LanguageSwitcher from "./language-switcher"
import type { Locale } from "@/i18n-config"

export default function Navbar({ lang, dictionary }: { lang: Locale; dictionary: any }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileDropdown, setMobileDropdown] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Extract text values safely with fallbacks
  const solutionsText = typeof dictionary?.solutions === "string" ? dictionary.solutions : "Solutions"
  const aboutUsText = typeof dictionary?.aboutUs === "string" ? dictionary.aboutUs : "About Us"
  const contactText = typeof dictionary?.contact === "string" ? dictionary.contact : "Contact"
  const viewAllSolutionsText =
    typeof dictionary?.viewAllSolutions === "string" ? dictionary.viewAllSolutions : "View All Solutions"

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md py-2 sm:py-3" : "bg-transparent py-3 sm:py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link href={`/${lang}`} className="flex items-center">
          <div className="relative h-8 sm:h-10 w-32 sm:w-40 flex items-center justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20oficial%20Branco%20Sem%20Fundo-gxmRayrxUwXrsDWRKkNVtJomVto9Ih.png"
              alt="Braza.io Logo"
              className="h-full w-auto object-contain"
            />
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
          <div className="relative group">
            <div className="flex items-center space-x-1 text-sm font-medium cursor-pointer group">
              <span>{solutionsText}</span>
              <ChevronDown className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            </div>
            <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-background border border-border overflow-hidden transform scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 origin-top-left z-50">
              <div className="py-1">
                <Link
                  href={`/${lang}/solucoes#automacao-processos`}
                  className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                >
                  {lang === "pt-BR" ? "Automação de Processos" : "Process Automation"}
                </Link>
                <Link
                  href={`/${lang}/solucoes#automacao-marketing`}
                  className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                >
                  {lang === "pt-BR" ? "Automação em Marketing" : "Marketing Automation"}
                </Link>
                <Link
                  href={`/${lang}/solucoes#dev-customizado`}
                  className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                >
                  {lang === "pt-BR" ? "Dev Customizado" : "Custom Development"}
                </Link>
                <Link
                  href={`/${lang}/solucoes#ia-conversacional`}
                  className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                >
                  {lang === "pt-BR" ? "IA Conversacional" : "Conversational AI"}
                </Link>
                <Link
                  href={`/${lang}/solucoes#integracao-sistemas`}
                  className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                >
                  {lang === "pt-BR" ? "Integração de Sistemas" : "Systems Integration"}
                </Link>
                <Link
                  href={`/${lang}/solucoes#seguranca-dados`}
                  className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                >
                  {lang === "pt-BR" ? "Segurança de Dados" : "Data Security"}
                </Link>
                <Link
                  href={`/${lang}/solucoes#web-scraping`}
                  className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                >
                  {lang === "pt-BR" ? "Web Scraping e Extração de Dados" : "Web Scraping & Data Extraction"}
                </Link>
                <Link
                  href={`/${lang}/solucoes`}
                  className="block px-4 py-2 text-sm font-medium bg-muted/50 hover:bg-muted transition-colors"
                >
                  {viewAllSolutionsText}
                </Link>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="flex items-center space-x-1 text-sm font-medium cursor-pointer group">
              <span>{aboutUsText}</span>
              <ChevronDown className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            </div>
            <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-background border border-border overflow-hidden transform scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 origin-top-left z-50">
              <div className="py-1">
                <Link
                  href={`/${lang}/about/our-story`}
                  className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                >
                  {lang === "pt-BR" ? "Nossa História" : "Our Story"}
                </Link>
                <Link href={`/${lang}/about/team`} className="block px-4 py-2 text-sm hover:bg-muted transition-colors">
                  {lang === "pt-BR" ? "Nosso Time" : "Our Team"}
                </Link>
              </div>
            </div>
          </div>

          <Link
            href={`/${lang}/#contact`}
            className="px-3 py-1.5 bg-transparent border border-muted-foreground text-foreground font-medium text-sm rounded-md transition-all duration-300 hover:border-transparent hover:text-braza-dark hover:bg-gradient-to-r hover:from-braza-yellow hover:to-braza-green"
            onClick={(e) => {
              // Se estiver na página inicial, previna o comportamento padrão
              if (window.location.pathname === `/${lang}` || window.location.pathname === `/${lang}/`) {
                e.preventDefault()
                // Encontre a seção de contato e role até ela
                const contactSection = document.getElementById("contact")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" })
                }
              }
            }}
          >
            {contactText}
          </Link>

          <LanguageSwitcher currentLocale={lang} />
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <LanguageSwitcher currentLocale={lang} />

          <button
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-t border-border p-4 sm:p-6 animate-fade-in">
          <div className="flex flex-col space-y-4 sm:space-y-6">
            <div className="flex flex-col space-y-3 sm:space-y-4">
              <div>
                <div
                  className="flex items-center justify-between"
                  onClick={() => setMobileDropdown(mobileDropdown === "solucoes" ? "" : "solucoes")}
                >
                  <span className="text-sm font-medium">{solutionsText}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${mobileDropdown === "solucoes" ? "rotate-180" : ""}`}
                  />
                </div>
                {mobileDropdown === "solucoes" && (
                  <div className="mt-2 ml-4 flex flex-col space-y-2">
                    <Link
                      href={`/${lang}/solucoes#automacao-processos`}
                      className="text-sm text-muted-foreground"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {lang === "pt-BR" ? "Automação de Processos" : "Process Automation"}
                    </Link>
                    <Link
                      href={`/${lang}/solucoes#automacao-marketing`}
                      className="text-sm text-muted-foreground"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {lang === "pt-BR" ? "Automação em Marketing" : "Marketing Automation"}
                    </Link>
                    <Link
                      href={`/${lang}/solucoes#dev-customizado`}
                      className="text-sm text-muted-foreground"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {lang === "pt-BR" ? "Dev Customizado" : "Custom Development"}
                    </Link>
                    <Link
                      href={`/${lang}/solucoes#ia-conversacional`}
                      className="text-sm text-muted-foreground"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {lang === "pt-BR" ? "IA Conversacional" : "Conversational AI"}
                    </Link>
                    <Link
                      href={`/${lang}/solucoes#integracao-sistemas`}
                      className="text-sm text-muted-foreground"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {lang === "pt-BR" ? "Integração de Sistemas" : "Systems Integration"}
                    </Link>
                    <Link
                      href={`/${lang}/solucoes#seguranca-dados`}
                      className="text-sm text-muted-foreground"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {lang === "pt-BR" ? "Segurança de Dados" : "Data Security"}
                    </Link>
                    <Link
                      href={`/${lang}/solucoes#web-scraping`}
                      className="text-sm text-muted-foreground"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {lang === "pt-BR" ? "Web Scraping e Extração de Dados" : "Web Scraping & Data Extraction"}
                    </Link>
                    <Link
                      href={`/${lang}/solucoes`}
                      className="text-sm font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {viewAllSolutionsText}
                    </Link>
                  </div>
                )}
              </div>

              <div>
                <div
                  className="flex items-center justify-between"
                  onClick={() => setMobileDropdown(mobileDropdown === "about" ? "" : "about")}
                >
                  <span className="text-sm font-medium">{aboutUsText}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${mobileDropdown === "about" ? "rotate-180" : ""}`}
                  />
                </div>
                {mobileDropdown === "about" && (
                  <div className="mt-2 ml-4 flex flex-col space-y-2">
                    <Link
                      href={`/${lang}/about/our-story`}
                      className="text-sm text-muted-foreground"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {lang === "pt-BR" ? "Nossa História" : "Our Story"}
                    </Link>
                    <Link
                      href={`/${lang}/about/team`}
                      className="text-sm text-muted-foreground"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {lang === "pt-BR" ? "Nosso Time" : "Our Team"}
                    </Link>
                  </div>
                )}
              </div>
            </div>

            <Link
              href={`/${lang}/#contact`}
              className="px-3 py-1.5 bg-transparent border border-muted-foreground text-foreground font-medium text-center text-sm rounded-md transition-all duration-300 hover:border-transparent hover:text-braza-dark hover:bg-gradient-to-r hover:from-braza-yellow hover:to-braza-green"
              onClick={(e) => {
                // Se estiver na página inicial, previna o comportamento padrão
                if (window.location.pathname === `/${lang}` || window.location.pathname === `/${lang}/`) {
                  e.preventDefault()
                  // Encontre a seção de contato e role até ela
                  const contactSection = document.getElementById("contact")
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" })
                    setIsMenuOpen(false)
                  }
                }
              }}
            >
              {contactText}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

