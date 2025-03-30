import { getDictionary } from "@/dictionaries";
import type { Locale } from "@/i18n-config";
import Navbar from "@/components/navbar";
import { Linkedin, Twitter, Github, Instagram } from "lucide-react";
import Link from "next/link";

// Convert back to a server component to avoid React rendering issues
export default async function TeamPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  // Fetch dictionary on the server
  const dictionary = await getDictionary(lang);

  // Team members data
  const teamMembers = [
    {
      name: "Victor Rodrigues",
      role: lang === "pt-BR" ? "CEO & Co-fundador" : "CEO & Co-founder",
      image: "/images/victor-rodrigues.png",
      bio:
        lang === "pt-BR"
          ? "Ex-Santander e BRK, Victor tem muitos anos de experiência em Dados e IA."
          : "Former Santander and BRK, Victor has many years of experience in Data and AI.",
      social: {
        linkedin:
          "https://www.linkedin.com/in/victor-fernando-rodrigues-232a32128/",
      },
    },
    {
      name: "Lucas Santos",
      role: lang === "pt-BR" ? "CTO & Co-fundador" : "CTO & Co-founder",
      image: "/images/lucas-santos.png",
      bio:
        lang === "pt-BR"
          ? "Ex-Spread e Loop, Lucas tem longa carreira em Desenvolvimento Full Stack."
          : "Former Spread and Loop, Lucas has a long career in Full Stack Development.",
      social: {
        linkedin: "https://www.linkedin.com/in/rodrlucas/",
      },
    },
    {
      name: "Yuri Costa",
      role:
        lang === "pt-BR"
          ? "Chief AI Officer & Co-fundador"
          : "Chief AI Officer & Co-founder",
      image: "/images/yuri-costa.png",
      bio:
        lang === "pt-BR"
          ? "Ex-AI Chatbot Developer na Acquera, Yuri é o responsável pela IA dos produtos da Braza.io."
          : "Formerly an AI Chatbot Developer at Acquera, Yuri is responsible for the AI of Braza.io's products.",
      social: {
        linkedin: "https://www.linkedin.com/in/notyurigagarin/",
      },
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen w-full bg-background">
      <Navbar lang={lang} dictionary={dictionary} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#101010] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {lang === "pt-BR" ? "Nosso " : "Our "}
              <span className="gradient-text">
                {lang === "pt-BR" ? "Time" : "Team"}
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {lang === "pt-BR"
                ? "Conheça as pessoas talentosas por trás da Braza.io"
                : "Meet the talented people behind Braza.io"}
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-[#151515] rounded-lg overflow-hidden border border-border transition-all duration-300 hover:border-braza-yellow/50 hover:shadow-lg hover:shadow-braza-yellow/10"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={
                      member.image || "/placeholder.svg?height=400&width=400"
                    }
                    alt={member.name || "Team member"}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151515] to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">
                    {member.name || "Team Member"}
                  </h3>
                  <p className="text-sm text-braza-yellow mb-3">
                    {member.role || ""}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {member.bio || ""}
                  </p>
                  <div className="flex space-x-3">
                    {member.social?.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={18} />
                      </a>
                    )}
                    {member.social?.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Twitter"
                      >
                        <Twitter size={18} />
                      </a>
                    )}
                    {member.social?.github && (
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              {lang === "pt-BR"
                ? "Conheça nossa história"
                : "Learn about our story"}
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-8">
              {lang === "pt-BR"
                ? "Descubra como a Braza.io nasceu e nossa jornada até aqui."
                : "Discover how Braza.io was born and our journey so far."}
            </p>
            <Link
              href={`/${lang}/about/our-story`}
              className="inline-block relative gradient-border hover:bg-white/5 font-medium transition-colors rounded-md"
            >
              <span className="relative z-10 bg-background px-6 py-3 block rounded-md">
                {lang === "pt-BR" ? "Nossa História" : "Our Story"}
              </span>
            </Link>
          </div>
        </div>
      </section>

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
                {lang === "pt-BR"
                  ? "Transformando empresas através da automação inteligente e soluções de IA personalizadas."
                  : "Transforming companies through intelligent automation and customized AI solutions."}
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                {lang === "pt-BR" ? "Navegação" : "Navigation"}
              </h3>
              <ul className="space-y-2 sm:space-y-3">
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
                    {lang === "pt-BR"
                      ? "Siga-nos nas redes sociais"
                      : "Follow us on social media"}
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
              &copy; {currentYear} Braza.io.{" "}
              {lang === "pt-BR"
                ? "Todos os direitos reservados."
                : "All rights reserved."}{" "}
              CNPJ: 45.858.805/0001-09
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
