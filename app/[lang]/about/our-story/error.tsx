"use client"

import Link from "next/link"

export default function Error() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-bold mb-4">Algo deu errado</h2>
      <p className="mb-8 text-center">Não foi possível carregar esta página. Por favor, tente novamente mais tarde.</p>
      <Link
        href="/"
        className="px-6 py-3 bg-transparent border border-muted-foreground text-foreground font-medium rounded-md transition-all duration-300 hover:border-transparent hover:text-braza-dark hover:bg-gradient-to-r hover:from-braza-yellow hover:to-braza-green"
      >
        Voltar para a página inicial
      </Link>
    </div>
  )
}

