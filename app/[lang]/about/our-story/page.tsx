import Link from "next/link"
import { Instagram, Twitter, Linkedin } from "lucide-react"

// Completely static page with no dependencies
export default function OurStoryPage() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen w-full bg-background">
      {/* Static Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-md py-2 sm:py-3">
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="relative h-8 sm:h-10 w-32 sm:w-40 flex items-center justify-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20oficial%20Branco%20Sem%20Fundo-gxmRayrxUwXrsDWRKkNVtJomVto9Ih.png"
                alt="Braza.io Logo"
                className="h-full w-auto object-contain"
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
            <Link href="/" className="text-sm font-medium">
              Home
            </Link>
            <Link href="/solucoes" className="text-sm font-medium">
              Soluções
            </Link>
            <Link href="/about/team" className="text-sm font-medium">
              Nosso Time
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#050505] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Nossa <span className="gradient-text">História</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Como a Braza.io nasceu e nossa jornada até aqui
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 lg:col-start-3">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>O Início da Nossa Jornada</h2>
                <p>
                  A Braza.io nasceu da decisão ousada de três jovens empreendedores que escolheram deixar para trás suas
                  antigas carreiras e se dedicar integralmente a uma visão: revolucionar o mercado de automação com o
                  poder da inteligência artificial.
                </p>
                <p>
                  Em um cenário onde 99% das empresas ainda dependem de tecnologias ultrapassadas como RPA tradicional e
                  chatbots básicos baseados em regras, vimos uma oportunidade urgente. O mundo estava mudando
                  rapidamente, mas a automação na maioria das empresas permanecia estagnada. Acreditávamos que havia
                  espaço para algo novo — algo verdadeiramente inteligente.
                </p>
                <p>
                  Com isso em mente, a Braza.io foi fundada não para seguir tendências, mas para quebrá-las. Desde o
                  início, nosso objetivo era trazer a automação inteligente para o primeiro plano — soluções que pensam,
                  aprendem e evoluem.
                </p>

                <h2>Nossa Evolução</h2>
                <p>
                  Em nossos estágios iniciais, nos concentramos inteiramente em entender os pontos de dor das empresas
                  modernas e construir soluções que realmente resolvessem problemas. Em vez de oferecer ferramentas de
                  automação genéricas, criamos sistemas personalizados e orientados por IA capazes de se adaptar à
                  complexidade do mundo real.
                </p>
                <p>
                  Crescemos rapidamente mantendo-nos enxutos, ouvindo nossos clientes e iterando constantemente. Cada
                  automação que entregamos não era apenas uma economia de tempo — era um passo à frente na transformação
                  digital.
                </p>

                <h2>Onde Estamos Hoje</h2>
                <p>
                  Hoje, a Braza.io é muito mais do que uma startup. Somos uma empresa orientada por missão com a ambição
                  de remodelar como as empresas pensam sobre automação. Oferecemos serviços que vão desde automação
                  inteligente de processos até portais de usuário personalizados, scraping integrado com IA e automação
                  de tráfego — todos projetados para capacitar equipes e desbloquear crescimento exponencial.
                </p>
                <p>E estamos apenas começando.</p>
                <p>
                  Acreditamos que o futuro da automação não é robótico — é inteligente. E na Braza.io, estamos aqui para
                  construí-lo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Static Footer */}
      <footer className="bg-[#000000] py-10 sm:py-16 border-t border-[#151515] w-full">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8">
            {/* Logo and Description */}
            <div>
              <Link href="/" className="inline-block mb-4 sm:mb-6">
                <div className="relative h-8 sm:h-10 w-32 sm:w-40 flex items-center justify-start">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20oficial%20Branco%20Sem%20Fundo-gxmRayrxUwXrsDWRKkNVtJomVto9Ih.png"
                    alt="Braza.io Logo"
                    className="h-full w-auto object-contain"
                  />
                </div>
              </Link>

              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                Transformando empresas através da automação inteligente e soluções de IA personalizadas.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Navegação</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link
                    href="/solucoes"
                    className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Soluções
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about/team"
                    className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Quem somos
                  </Link>
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
              &copy; {currentYear} Braza.io. Todos os direitos reservados. CNPJ: 45.858.805/0001-09
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

