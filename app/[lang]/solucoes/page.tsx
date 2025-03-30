import SolucoesClient from "@/components/solucoes-client"
import { getDictionary } from "@/dictionaries"
import type { Locale } from "@/i18n-config"

// Esta é uma página servidor (Server Component)
export default async function SolucoesPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  // Carregamos o dicionário no lado do servidor
  const dictionary = await getDictionary(lang)

  // Passamos os dados para o componente cliente
  return <SolucoesClient lang={lang} dictionary={dictionary} />
}

