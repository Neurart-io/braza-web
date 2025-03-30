import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import { Instagram, Twitter, Linkedin } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-background scroll-smooth overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <div className="bg-background py-10 sm:py-16 border-t border-border w-full">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8">
            {/* Logo and Description */}
            <div>
              <a href="/" className="inline-block mb-4 sm:mb-6">
                <div className="relative h-8 sm:h-10 w-32 sm:w-40 flex items-center justify-start">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20oficial%20Branco%20Sem%20Fundo-gxmRayrxUwXrsDWRKkNVtJomVto9Ih.png"
                    alt="Braza.io Logo"
                    className="h-full w-auto object-contain"
                  />
                </div>
              </a>

              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                Transformando empresas através da automação inteligente e soluções de IA personalizadas.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Navegação</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a
                    href="/solucoes"
                    className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Soluções
                  </a>
                </li>
                <li>
                  <a
                    href="/about/team"
                    className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Quem somos
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Section with Social Media */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contato</h3>

              <div className="space-y-3">
                {/* Social Media Icons */}
                <div className="pt-2">
                  <p className="text-sm text-muted-foreground mb-2">Siga-nos nas redes sociais</p>
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
              &copy; {new Date().getFullYear()} Braza.io. Todos os direitos reservados. CNPJ: 45.858.805/0001-09
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

