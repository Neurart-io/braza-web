"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Cpu, Bot, Code, TrendingUp, Database, LinkIcon, Shield } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const solutions = [
  {
    id: "automacao-processos",
    icon: <Cpu className="h-8 w-8 text-braza-yellow" />,
    title: "Automação de Processos",
    description:
      "Otimize fluxos de trabalho e elimine tarefas repetitivas com nossas soluções de automação inteligente.",
    longDescription: [
      "Nossa solução de Automação de Processos utiliza tecnologias avançadas para transformar operações manuais e repetitivas em fluxos de trabalho automatizados e eficientes.",
      "Através da combinação de RPA (Robotic Process Automation), IA e aprendizado de máquina, criamos sistemas que podem executar tarefas complexas com mínima intervenção humana, permitindo que sua equipe se concentre em atividades estratégicas de maior valor.",
      "Nossas automações são personalizadas para se integrar perfeitamente aos seus sistemas existentes, garantindo uma transição suave e resultados rápidos.",
    ],
    benefits: [
      "Redução de até 85% no tempo gasto em tarefas operacionais",
      "Eliminação de erros humanos em processos críticos",
      "Escalabilidade para lidar com volumes variáveis de trabalho",
      "Análise de dados em tempo real para tomada de decisões",
      "ROI significativo em curto prazo",
    ],
    useCases: [
      "Processamento automatizado de documentos e faturas",
      "Extração e validação de dados de formulários",
      "Geração e distribuição de relatórios periódicos",
      "Sincronização de dados entre múltiplos sistemas",
      "Monitoramento contínuo de métricas de negócio",
    ],
  },
  {
    id: "automacao-marketing",
    icon: <TrendingUp className="h-8 w-8 text-braza-yellow" />,
    title: "Automação em Marketing",
    description: "Envie e-mails automáticos, capture leads e faça follow-ups sem esforço.",
    longDescription: [
      "Nossa solução de Automação em Marketing permite criar, executar e otimizar campanhas multicanal de forma automatizada, aumentando a eficiência e os resultados de suas estratégias de marketing.",
      "Desenvolvemos fluxos de trabalho inteligentes que podem segmentar audiências, personalizar mensagens, programar envios e analisar resultados sem intervenção manual constante.",
      "Nossas ferramentas se integram com as principais plataformas de marketing digital, CRMs e sistemas de e-commerce, criando um ecossistema conectado e eficiente.",
    ],
    benefits: [
      "Aumento da eficiência operacional da equipe de marketing",
      "Personalização em escala para diferentes segmentos de clientes",
      "Nurturing de leads automatizado e consistente",
      "Análise de desempenho em tempo real com ajustes automáticos",
      "Otimização contínua baseada em dados de comportamento",
    ],
    useCases: [
      "Campanhas de email marketing automatizadas",
      "Nurturing de leads com conteúdo personalizado",
      "Recuperação de carrinhos abandonados",
      "Programas de fidelidade e reengajamento",
      "Campanhas cross-selling e up-selling baseadas em comportamento",
    ],
  },
  {
    id: "dev-customizado",
    icon: <Code className="h-8 w-8 text-braza-yellow" />,
    title: "Dev Customizado",
    description: "Soluções de software sob medida para os desafios específicos do seu negócio.",
    longDescription: [
      "Nossa solução de Desenvolvimento Customizado cria aplicações e sistemas exclusivos, projetados especificamente para atender às necessidades únicas do seu negócio.",
      "Desenvolvemos software sob medida utilizando metodologias ágeis e as mais modernas tecnologias, garantindo soluções escaláveis, seguras e de fácil manutenção.",
      "Nossa abordagem inclui análise detalhada de requisitos, prototipagem, desenvolvimento iterativo e suporte contínuo, assegurando que o produto final atenda perfeitamente às suas expectativas.",
    ],
    benefits: [
      "Soluções perfeitamente alinhadas às necessidades específicas do negócio",
      "Propriedade total do código e da propriedade intelectual",
      "Flexibilidade para evoluir o sistema conforme o crescimento da empresa",
      "Integração perfeita com sistemas existentes",
      "Suporte dedicado e manutenção contínua",
    ],
    useCases: [
      "Sistemas de gestão empresarial personalizados",
      "Plataformas de e-commerce com funcionalidades exclusivas",
      "Aplicativos móveis para necessidades específicas de negócio",
      "Dashboards e ferramentas de análise de dados customizadas",
      "Sistemas de automação industrial e IoT",
    ],
  },
  {
    id: "ia-conversacional",
    icon: <Bot className="h-8 w-8 text-braza-yellow" />,
    title: "IA Conversacional",
    description: "Assistentes virtuais e chatbots avançados que transformam a experiência de atendimento ao cliente.",
    longDescription: [
      "Nossa solução de IA Conversacional utiliza os mais avançados modelos de linguagem para criar assistentes virtuais e chatbots que compreendem e respondem a consultas de forma natural e contextual.",
      "Desenvolvemos assistentes inteligentes capazes de entender nuances da linguagem humana, manter o contexto da conversa e fornecer respostas precisas e personalizadas para cada cliente.",
      "Nossas soluções podem ser integradas a múltiplos canais de comunicação, incluindo websites, aplicativos móveis, WhatsApp, Telegram e plataformas de mídia social.",
    ],
    benefits: [
      "Atendimento 24/7 sem custos adicionais de pessoal",
      "Redução de até 60% no tempo de resolução de problemas",
      "Escalabilidade para lidar com picos de demanda",
      "Consistência nas respostas e no atendimento",
      "Coleta de insights valiosos sobre as necessidades dos clientes",
    ],
    useCases: [
      "Atendimento ao cliente automatizado",
      "FAQ dinâmico e personalizado",
      "Qualificação e triagem de leads",
      "Agendamento de consultas e reuniões",
      "Suporte técnico de primeiro nível",
    ],
  },
  {
    id: "integracao-sistemas",
    icon: <LinkIcon className="h-8 w-8 text-braza-yellow" />,
    title: "Integração de Sistemas",
    description: "Conecte plataformas e aplicações para um fluxo de dados contínuo e eficiente.",
    longDescription: [
      "Nossa solução de Integração de Sistemas permite conectar diferentes aplicações, plataformas e bancos de dados, criando um ecossistema digital coeso e eficiente para sua empresa.",
      "Desenvolvemos APIs, webhooks e conectores personalizados que permitem a comunicação fluida entre sistemas internos e externos, eliminando silos de informação e processos manuais de transferência de dados.",
      "Nossas integrações são projetadas para serem robustas, seguras e escaláveis, adaptando-se às mudanças em sua infraestrutura tecnológica.",
    ],
    benefits: [
      "Eliminação de processos manuais de transferência de dados",
      "Visão unificada das informações em toda a organização",
      "Redução de erros e inconsistências de dados",
      "Automação de processos entre diferentes departamentos",
      "Maior agilidade na implementação de novos sistemas",
    ],
    useCases: [
      "Integração entre CRM e sistema ERP",
      "Sincronização de dados entre plataformas de e-commerce e logística",
      "Conexão de sistemas legados com novas aplicações",
      "Integração de ferramentas de marketing com sistemas de vendas",
      "Criação de dashboards unificados com dados de múltiplas fontes",
    ],
  },
  {
    id: "seguranca-dados",
    icon: <Shield className="h-8 w-8 text-braza-yellow" />,
    title: "Segurança de Dados",
    description: "Proteção robusta para seus dados e sistemas com as melhores práticas de segurança.",
    longDescription: [
      "Nossa solução de Segurança de Dados oferece proteção abrangente para informações sensíveis e sistemas críticos, utilizando as mais avançadas tecnologias e práticas de cibersegurança.",
      "Desenvolvemos estratégias personalizadas de segurança que incluem criptografia, controle de acesso, monitoramento contínuo e resposta a incidentes, adaptadas ao perfil de risco específico da sua organização.",
      "Nossas soluções são projetadas para proteger dados em repouso, em trânsito e em uso, garantindo conformidade com regulamentações como LGPD, GDPR e outras normas setoriais.",
    ],
    benefits: [
      "Proteção abrangente contra ameaças cibernéticas em evolução",
      "Redução do risco de violações de dados e seus custos associados",
      "Conformidade com regulamentações de proteção de dados",
      "Detecção precoce de atividades suspeitas e tentativas de invasão",
      "Resposta rápida a incidentes de segurança",
    ],
    useCases: [
      "Implementação de políticas de segurança e governança de dados",
      "Avaliações de vulnerabilidade e testes de penetração",
      "Criptografia e anonimização de dados sensíveis",
      "Monitoramento contínuo de segurança e detecção de ameaças",
      "Treinamento de conscientização em segurança para colaboradores",
    ],
  },
  {
    id: "web-scraping",
    icon: <Database className="h-8 w-8 text-braza-yellow" />,
    title: "Web Scraping e Extração de Dados",
    description: "Monitore preços, tendências e extraia dados de sites para inteligência de negócios.",
    longDescription: [
      "Nossa solução de Web Scraping e Extração de Dados permite coletar, processar e analisar informações de diversas fontes online de forma automatizada e em tempo real.",
      "Desenvolvemos crawlers personalizados que podem navegar por websites, extrair dados estruturados e não estruturados, e transformá-los em informações acionáveis para seu negócio.",
      "Nossas ferramentas são projetadas para contornar desafios comuns como bloqueios de IP, CAPTCHAs e mudanças na estrutura dos sites, garantindo a continuidade da coleta de dados.",
    ],
    benefits: [
      "Monitoramento contínuo de preços e produtos da concorrência",
      "Coleta de dados de mercado para análise de tendências",
      "Automação da pesquisa de informações em múltiplas fontes",
      "Alertas em tempo real sobre mudanças relevantes",
      "Enriquecimento de bases de dados com informações externas",
    ],
    useCases: [
      "Monitoramento de preços da concorrência",
      "Coleta de dados para pesquisa de mercado",
      "Extração de informações de produtos de e-commerces",
      "Monitoramento de menções à marca em redes sociais",
      "Coleta de dados públicos para análises estatísticas",
    ],
  },
]

export default function SolucoesPage() {
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

  return (
    <main className="min-h-screen w-full bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#101010] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Nossas <span className="gradient-text">Soluções</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Desenvolvemos tecnologias avançadas que impulsionam a transformação digital das empresas, combinando
              automação inteligente e IA para resolver desafios complexos de negócio.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions List */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-16 md:gap-24">
            {solutions.map((solution, index) => (
              <div
                key={solution.id}
                id={solution.id}
                ref={(el) => (solutionRefs.current[solution.id] = el)}
                className="scroll-mt-32"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-4 space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-[#151515] rounded-lg border border-border">{solution.icon}</div>
                      <h2 className="text-2xl md:text-3xl font-bold">{solution.title}</h2>
                    </div>
                    <p className="text-lg text-muted-foreground">{solution.description}</p>
                  </div>

                  <div className="lg:col-span-8 space-y-8">
                    <div className="bg-[#0a0a0a] p-6 md:p-8 rounded-lg border border-border">
                      <h3 className="text-xl font-semibold mb-4">Sobre a Solução</h3>
                      <div className="space-y-4">
                        {solution.longDescription.map((paragraph, i) => (
                          <p key={i} className="text-muted-foreground">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-[#0a0a0a] p-6 md:p-8 rounded-lg border border-border">
                        <h3 className="text-xl font-semibold mb-4">Benefícios</h3>
                        <ul className="space-y-2">
                          {solution.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-braza-yellow mr-2">•</span>
                              <span className="text-muted-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-[#0a0a0a] p-6 md:p-8 rounded-lg border border-border">
                        <h3 className="text-xl font-semibold mb-4">Casos de Uso</h3>
                        <ul className="space-y-2">
                          {solution.useCases.map((useCase, i) => (
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
                        href="/#contact"
                        className="inline-block relative gradient-border hover:bg-white/5 font-medium transition-colors rounded-md"
                      >
                        <span className="relative z-10 bg-background px-6 py-3 block rounded-md">
                          Solicitar mais informações
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
              Pronto para transformar seu negócio com <span className="gradient-text">automação inteligente</span>?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8">
              Entre em contato conosco para uma consulta personalizada e descubra como nossas soluções podem impulsionar
              a eficiência e o crescimento da sua empresa.
            </p>
            <Link
              href="/#contact"
              className="inline-block relative gradient-border hover:bg-white/5 font-medium transition-colors rounded-md"
            >
              <span className="relative z-10 bg-background px-8 py-3 block rounded-md">Fale com um especialista</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

