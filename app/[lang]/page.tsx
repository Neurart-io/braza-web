import { getDictionary } from "@/dictionaries";
import type { Locale } from "@/i18n-config";
import HomeClient from "@/components/home-client";

export default async function Home({ params }: { params: { lang: Locale } }) {
  const lang = (await params).lang;

  const dictionary = await getDictionary(lang);

  return <HomeClient lang={lang} dictionary={dictionary} />;
}
