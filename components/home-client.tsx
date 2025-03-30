"use client"

import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import type { Locale } from "@/i18n-config"

export default function HomeClient({
  lang,
  dictionary,
}: {
  lang: Locale
  dictionary: any
}) {
  return (
    <main className="min-h-screen w-full bg-background scroll-smooth overflow-x-hidden">
      <Navbar lang={lang} dictionary={dictionary} />
      <HeroSection lang={lang} dictionary={dictionary.hero} />
      <ServicesSection lang={lang} dictionary={dictionary.services} />
      <AboutSection lang={lang} dictionary={dictionary.about} />
      <ContactSection lang={lang} dictionary={dictionary.contact} />
      <Footer lang={lang} dictionary={dictionary.footer} />
    </main>
  )
}

