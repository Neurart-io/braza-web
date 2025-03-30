import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
      <h2 className="text-4xl font-bold mb-4">404</h2>
      <p className="text-xl mb-8">Page not found</p>
      <Link
        href="/"
        className="px-6 py-3 bg-transparent border border-muted-foreground text-foreground font-medium rounded-md transition-all duration-300 hover:border-transparent hover:text-braza-dark hover:bg-gradient-to-r hover:from-braza-yellow hover:to-braza-green"
      >
        Return Home
      </Link>
    </div>
  )
}

