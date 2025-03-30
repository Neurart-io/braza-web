"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Cpu, Bot, Code, TrendingUp, Database, LinkIcon, Shield } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import type { Locale } from "@/i18n-config"

export default function SolucoesClient({
  lang,
  dictionary,
}: {
  lang: Locale
  dictionary: any
}) {
  const solutionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const searchParams = useSearchParams()

  // Função para rolar até a seção específica
  const scrollToSection = (id: string) => {
    if (solutionRefs.current[id]) {
      solutionRefs.current[id]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  // Verificar se há um hash na URL e rolar até a seção correspondente
  useEffect(() => {
    // Extrair o hash da URL (remover o '#' se presente)
    const hash = window.location.hash.replace("#", "")

    if (hash && solutionRefs.current[hash]) {
      // Pequeno timeout para garantir que a página esteja totalmente carregada
      setTimeout(() => {
        scrollToSection(hash)
      }, 300)
    }
  }, [searchParams])

  // Ensure we have valid solutions data
  const solutions = Array.isArray(dictionary?.solutions?.items) ? dictionary.solutions.items : []

  // Extract text values safely
  const solutionsTitle = dictionary?.solutions?.title?.first || "Our"
  const solutionsHighlighted = dictionary?.solutions?.title?.highlighted || "Solutions"
  const solutionsDescription =
    typeof dictionary?.solutions?.description === "string" ? dictionary.solutions.description : ""
  const aboutSolutionText =
    typeof dictionary?.solutions?.aboutSolution === "string" ? dictionary.solutions.aboutSolution : "About the Solution"
  const benefitsText = typeof dictionary?.solutions?.benefits === "string" ? dictionary.solutions.benefits : "Benefits"
  const useCasesText = typeof dictionary?.solutions?.useCases === "string" ? dictionary.solutions.useCases : "Use Cases"
  const requestInfoText =
    typeof dictionary?.solutions?.requestInfo === "string"
      ? dictionary.solutions.requestInfo
      : "Request More Information"

  // CTA section text
  const ctaTitleFirst = dictionary?.solutions?.cta?.title?.first || "Ready to transform your business with"
  const ctaTitleHighlighted = dictionary?.solutions?.cta?.title?.highlighted || "intelligent automation"
  const ctaDescription =
    typeof dictionary?.solutions?.cta?.description === "string"
      ? dictionary.solutions.cta.description
      : "Contact us for a personalized consultation."
  const ctaButtonText =
    typeof dictionary?.solutions?.cta?.button === "string" ? dictionary.solutions.cta.button : "Talk to an Expert"

  return (
    <main className="min-h-screen w-full bg-background">
      <Navbar lang={lang} dictionary={dictionary.navbar} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#101010] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {solutionsTitle} <span className="gradient-text">{solutionsHighlighted}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {solutionsDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Solutions List */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-16 md:gap-24">
            {solutions.map((solution: any, index: number) => (
              <div
                key={solution.id}
                id={solution.id}
                ref={(el) => (solutionRefs.current[solution.id] = el)}
                className="scroll-mt-32"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-4 space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-[#151515] rounded-lg border border-border">
                        {getIconForSolution(solution.id)}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold">{solution.title}</h2>
                    </div>
                    <p className="text-lg text-muted-foreground">{solution.description}</p>
                  </div>

                  <div className="lg:col-span-8 space-y-8">
                    <div className="bg-[#151515] p-6 md:p-8 rounded-lg border border-border">
                      <h3 className="text-xl font-semibold mb-4">{aboutSolutionText}</h3>
                      <div className="space-y-4">
                        {Array.isArray(solution.longDescription) &&
                          solution.longDescription.map((paragraph: string, i: number) => (
                            <p key={i} className="text-muted-foreground">
                              {paragraph}
                            </p>
                          ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-[#151515] p-6 md:p-8 rounded-lg border border-border">
                        <h3 className="text-xl font-semibold mb-4">{benefitsText}</h3>
                        <ul className="space-y-2">
                          {Array.isArray(solution.benefits) &&
                            solution.benefits.map((benefit: string, i: number) => (
                              <li key={i} className="flex items-start">
                                <span className="text-braza-yellow mr-2">•</span>
                                <span className="text-muted-foreground">{benefit}</span>
                              </li>
                            ))}
                        </ul>
                      </div>

                      <div className="bg-[#151515] p-6 md:p-8 rounded-lg border border-border">
                        <h3 className="text-xl font-semibold mb-4">{useCasesText}</h3>
                        <ul className="space-y-2">
                          {Array.isArray(solution.useCases) &&
                            solution.useCases.map((useCase: string, i: number) => (
                              <li key={i} className="flex items-start">
                                <span className="text-braza-green mr-2">•</span>
                                <span className="text-muted-foreground">{useCase}</span>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex justify-center md:justify-end">
                      <Link
                        href={`/${lang}/#contact`}
                        className="inline-block relative gradient-border hover:bg-white/5 font-medium transition-colors rounded-md"
                      >
                        <span className="relative z-10 bg-background px-6 py-3 block rounded-md">
                          {requestInfoText}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>

                {index < solutions.length - 1 && <div className="mt-16 md:mt-24 border-b border-border"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 md:py-24 bg-[#101010]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              {ctaTitleFirst} <span className="gradient-text">{ctaTitleHighlighted}</span>?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8">{ctaDescription}</p>
            <Link
              href={`/${lang}/#contact`}
              className="inline-block relative gradient-border hover:bg-white/5 font-medium transition-colors rounded-md"
            >
              <span className="relative z-10 bg-background px-8 py-3 block rounded-md">{ctaButtonText}</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer lang={lang} dictionary={dictionary.footer} />
    </main>
  )
}

// Função auxiliar para obter o ícone correto para cada solução
function getIconForSolution(id: string) {
  switch (id) {
    case "automacao-processos":
      return <Cpu className="h-8 w-8 text-braza-yellow" />
    case "ia-conversacional":
      return <Bot className="h-8 w-8 text-braza-yellow" />
    case "web-scraping":
      return <Database className="h-8 w-8 text-braza-yellow" />
    case "automacao-marketing":
      return <TrendingUp className="h-8 w-8 text-braza-yellow" />
    case "integracao-sistemas":
      return <LinkIcon className="h-8 w-8 text-braza-yellow" />
    case "dev-customizado":
      return <Code className="h-8 w-8 text-braza-yellow" />
    case "seguranca-dados":
      return <Shield className="h-8 w-8 text-braza-yellow" />
    default:
      return <Cpu className="h-8 w-8 text-braza-yellow" />
  }
}

