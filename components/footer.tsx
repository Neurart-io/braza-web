import Link from "next/link"
import { Instagram, Twitter, Linkedin } from "lucide-react"
import type { Locale } from "@/i18n-config"

export default function Footer({ lang, dictionary }: { lang: Locale; dictionary: any }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background py-10 sm:py-16 border-t border-border w-full">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8">
          {/* Logo and Description */}
          <div>
            <Link href={`/${lang}`} className="inline-block mb-4 sm:mb-6">
              <div className="relative h-8 sm:h-10 w-32 sm:w-40 flex items-center justify-start">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20oficial%20Branco%20Sem%20Fundo-gxmRayrxUwXrsDWRKkNVtJomVto9Ih.png"
                  alt="Braza.io Logo"
                  className="h-full w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
              {dictionary?.description ||
                "Transforming companies through intelligent automation and customized AI solutions."}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              {dictionary?.navigation?.title || "Navigation"}
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <>
                <li>
                  <Link
                    href={`/${lang}/solucoes`}
                    className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {lang === "pt-BR" ? "Soluções" : "Solutions"}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${lang}/about/team`}
                    className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {lang === "pt-BR" ? "Quem somos" : "About Us"}
                  </Link>
                </li>
              </>
            </ul>
          </div>

          {/* Contact Section with Social Media */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              {lang === "pt-BR" ? "Contato" : "Contact"}
            </h3>

            <div className="space-y-3">
              {/* Social Media Icons */}
              <div className="pt-2">
                <p className="text-sm text-muted-foreground mb-2">
                  {lang === "pt-BR" ? "Siga-nos nas redes sociais" : "Follow us on social media"}
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/braza.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://x.com/Braza_io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/braza-io/about/?viewAsMember=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground">
            &copy; {currentYear} Braza.io. {dictionary?.copyright || "All rights reserved."} CNPJ: 45.858.805/0001-09
          </p>
        </div>
      </div>
    </footer>
  )
}

