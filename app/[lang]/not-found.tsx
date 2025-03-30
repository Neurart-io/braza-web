import Link from "next/link";
import type { Locale } from "@/i18n-config";

export default async function NotFound({
  params,
}: {
  params: { lang: Locale };
}) {
  let lang: Locale;

  if (params == null) {
    lang = "pt-BR";
  } else {
    lang = (await params).lang;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
      <h2 className="text-4xl font-bold mb-4">404</h2>
      <p className="text-xl mb-8">
        {lang === "pt-BR" ? "Página não encontrada" : "Page not found"}
      </p>
      <Link
        href={`/${lang}`}
        className="px-6 py-3 bg-transparent border border-muted-foreground text-foreground font-medium rounded-md transition-all duration-300 hover:border-transparent hover:text-braza-dark hover:bg-gradient-to-r hover:from-braza-yellow hover:to-braza-green"
      >
        {lang === "pt-BR" ? "Voltar para a página inicial" : "Return Home"}
      </Link>
    </div>
  );
}
