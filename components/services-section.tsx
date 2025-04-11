"use client"

import { useEffect, useRef } from "react"
import { Cpu, Bot, Code, TrendingUp, Database, LinkIcon, Shield } from "lucide-react"
import type { Locale } from "@/i18n-config"

export default function ServicesSection({ lang, dictionary }: { lang: Locale; dictionary: any }) {
  // Ensure we have valid items data with a fallback to an empty array
  const items = Array.isArray(dictionary?.items) ? dictionary.items : []

  // Extract text values safely with fallbacks
  const titleFirst = dictionary?.title?.first || "Our"
  const titleHighlighted = dictionary?.title?.highlighted || "Solutions"
  const description =
    typeof dictionary?.description === "string"
      ? dictionary.description
      : "We develop advanced technologies that drive digital transformation for businesses."

  const sectionRef = useRef<HTMLDivElement>(null)
  const blocksRef = useRef<(HTMLDivElement | null)[]>(Array(items.length).fill(null))

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-fade-in")
              observer.unobserve(entry.target)
            }, 100)
          }
        })
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    blocksRef.current.forEach((block) => {
      if (block) observer.observe(block)
    })

    return () => {
      blocksRef.current.forEach((block) => {
        if (block) observer.unobserve(block)
      })
    }
  }, [])

  // Função para obter o ícone correto para cada serviço
  const getIcon = (id: string) => {
    switch (id) {
      case "automacao-processos":
        return <Cpu className="h-5 w-5 sm:h-6 sm:w-6 text-braza-yellow" />
      case "ia-conversacional":
        return <Bot className="h-5 w-5 sm:h-6 sm:w-6 text-braza-yellow" />
      case "web-scraping":
        return <Database className="h-5 w-5 sm:h-6 sm:w-6 text-braza-yellow" />
      case "automacao-marketing":
        return <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-braza-yellow" />
      case "integracao-sistemas":
        return <LinkIcon className="h-5 w-5 sm:h-6 sm:w-6 text-braza-yellow" />
      case "dev-customizado":
        return <Code className="h-5 w-5 sm:h-6 sm:w-6 text-braza-yellow" />
      case "seguranca-dados":
        return <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-braza-yellow" />
      default:
        return <Cpu className="h-5 w-5 sm:h-6 sm:w-6 text-braza-yellow" />
    }
  }

  return (
    <section
      id="services"
      className="py-16 sm:py-20 md:py-24 bg-[#050505] relative overflow-hidden w-full"
      ref={sectionRef}
    >
      {/* Simple solid background */}
      <div className="absolute inset-0 bg-[#050505]"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left column with flame icon and heading */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start justify-center">
            <div className="mb-6 relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-braza-yellow to-braza-green rounded-full opacity-20 blur-xl transition-all duration-300 group-hover:opacity-60 group-hover:blur-2xl"></div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Icone%20Fogo-Rrf2Q6T6a64Zp4HK70lyLj7CVQA5Ap.png"
                alt="Braza.io Flame"
                className="w-full h-full object-contain relative z-10"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center lg:text-left">
              {titleFirst} <span className="gradient-text">{titleHighlighted}</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground text-center lg:text-left max-w-sm">
              {description}
            </p>
          </div>

          {/* Right column with service boxes */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {items.map((service: any, index: number) => (
              <div
                key={service?.id || index}
                className="bg-[#151515] border border-[#050505] p-3 sm:p-4 rounded-md opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
                ref={(el) => (blocksRef.current[index] = el)}
              >
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="mt-1 p-1.5 sm:p-2 bg-[#050505] rounded-md flex-shrink-0">
                    {getIcon(service?.id || "")}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">{service?.title || ""}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">{service?.description || ""}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

