import "server-only"
import type { Locale } from "@/i18n-config"

const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  "pt-BR": () => import("./pt-BR.json").then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]?.() ?? dictionaries["pt-BR"]()
}

