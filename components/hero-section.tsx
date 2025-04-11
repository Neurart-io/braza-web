"use client"

import Link from "next/link"
import type { Locale } from "@/i18n-config"

export default function HeroSection({ lang, dictionary }: { lang: Locale; dictionary: any }) {
  // Extract text values safely with fallbacks
  const titleFirst = dictionary?.title?.first || "Scale Your Business with"
  const titleHighlighted = dictionary?.title?.highlighted || "Automation and AI"
  const description =
    typeof dictionary?.description === "string"
      ? dictionary.description
      : "We transform complex business processes into automated AI solutions."
  const buttonDefault = dictionary?.button?.default || "Contact Us"
  const buttonHover = dictionary?.button?.hover || "Let's Go!"

  return (
    <section className="relative min-h-screen w-full flex items-center pt-20 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.4)" }}
        >
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abstract-lines.3840x2160-kldWMZyOeUALAFW8q8CZRliV6vylVv.webm"
            type="video/webm"
          />
        </video>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6 md:space-y-8 w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight opacity-0 animate-fade-up">
              {titleFirst} <span className="gradient-text">{titleHighlighted}</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white max-w-xl opacity-0 animate-fade-up animate-delay-200">
              {description}
            </p>

            <div className="opacity-0 animate-fade-up animate-delay-300">
              <Link
                href={`/${lang}/#contact`}
                className="inline-block relative font-medium transition-colors rounded-md group"
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
                <span className="relative z-10 bg-white text-braza-dark px-6 sm:px-8 py-2.5 sm:py-3 block rounded-md overflow-hidden">
                  <span className="relative z-20 inline-flex flex-col h-[24px] overflow-hidden">
                    <span className="transition-transform duration-300 transform group-hover:-translate-y-full text-braza-dark">
                      {buttonDefault}
                    </span>
                    <span className="absolute top-0 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0 text-braza-dark">
                      {buttonHover}
                    </span>
                  </span>
                  <span className="absolute -inset-3 bg-braza-green/40 rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-all duration-300 z-0 group-hover:scale-110"></span>
                </span>
              </Link>
            </div>

            {/* Microsoft for Startups Badge */}
            <div className="flex items-center mt-8 opacity-0 animate-fade-up animate-delay-400">
              <span className="text-sm text-white mr-3">Backed by</span>
              <div className="flex items-center">
                <img
                  src="/images/microsoft-logo.png"
                  alt="Microsoft Logo"
                  className="h-12 w-auto"
                  style={{ filter: "brightness(0) invert(1)" }} // Ensure logo is white
                />
                <span className="text-sm text-white mx-3">|</span>
                <span className="text-sm text-white">Microsoft for Startups</span>
              </div>
            </div>
          </div>

          {/* Right side column kept empty as requested */}
          <div className="relative h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] opacity-0 animate-fade-in animate-delay-400 hidden lg:block">
            {/* Content removed as requested but space maintained */}
          </div>
        </div>
      </div>
    </section>
  )
}
