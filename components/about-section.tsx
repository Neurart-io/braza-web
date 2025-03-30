import ScrollAnimationWrapper from "./scroll-animation-wrapper"
import type { Locale } from "@/i18n-config"

export default function AboutSection({ lang, dictionary }: { lang: Locale; dictionary: any }) {
  // Extract text values safely with fallbacks
  const titleFirst = dictionary?.title?.first || "Transforming"
  const titleHighlighted = dictionary?.title?.highlighted || "businesses"
  const description =
    typeof dictionary?.description === "string"
      ? dictionary.description
      : "Our AI automation solutions are helping companies reach new levels of efficiency and innovation."

  // Ensure metrics is an array with fallback to empty array
  const metrics = Array.isArray(dictionary?.metrics) ? dictionary.metrics : []

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-muted w-full">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <ScrollAnimationWrapper direction="left">
            <div className="relative h-[350px] sm:h-[450px] md:h-[575px] lg:h-[690px] w-full sm:w-[90%] md:w-[80%] mx-auto overflow-hidden rounded-xl border-2 border-[#222] shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-b from-braza-yellow/10 to-braza-green/10 z-0"></div>
              <video autoPlay loop muted playsInline className="w-full h-full object-cover relative z-10 opacity-20">
                <source
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/65772-515379427_small-7t9TLSUF6ocSqkSJTQmsinZycMyTNm.mp4"
                  type="video/mp4"
                />
              </video>

              {/* Logo overlay with blur effect */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32">
                  <div className="absolute inset-0 bg-gradient-to-r from-braza-yellow/40 to-braza-green/40 rounded-full blur-3xl"></div>
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Icon%20Logo%20branco%20Sem%20fundo-letraB-MpcTPe7rnMD7IIjgE0kTJy9f5Nhy23.png"
                    alt="Braza.io Logo"
                    className="w-full h-full object-contain relative z-10"
                  />
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper direction="right" delay={200}>
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                {titleFirst} <span className="gradient-text">{titleHighlighted}</span>
              </h2>

              <p className="text-sm sm:text-base md:text-xl text-muted-foreground">{description}</p>

              <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-8">
                {metrics.map((metric: any, index: number) => (
                  <div
                    key={index}
                    className="bg-[#1a1a1a] p-4 sm:p-6 rounded-lg border border-braza-yellow/10 shadow-lg"
                  >
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                      <span className="gradient-text">{metric?.value || ""}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">{metric?.title || ""}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">{metric?.description || ""}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  )
}

