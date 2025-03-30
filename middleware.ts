import { type NextRequest, NextResponse } from "next/server"
import { match } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"

// Lista de idiomas suportados
const locales = ["pt-BR", "en"]
const defaultLocale = "pt-BR"

// Função para obter o idioma preferido do usuário
function getLocale(request: NextRequest) {
  // Verificar se já existe um cookie de idioma
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale
  }

  // Detectar o país pelo cabeçalho Cloudflare ou Vercel
  const country = request.headers.get("cf-ipcountry") || request.headers.get("x-vercel-ip-country")

  // Se for Brasil, usar português, caso contrário, usar inglês
  if (country === "BR") {
    return "pt-BR"
  } else if (country) {
    // Se temos um país e não é Brasil, usar inglês diretamente
    return "en"
  }

  // Caso não consiga determinar o país, tentar negociar com base no Accept-Language
  const headers = new Headers(request.headers)
  const acceptLanguage = headers.get("accept-language")

  if (acceptLanguage) {
    const negotiatorHeaders = { "accept-language": acceptLanguage }
    const languages = new Negotiator({ headers: negotiatorHeaders }).languages()

    try {
      return match(languages, locales, defaultLocale)
    } catch (e) {
      console.error("Error matching locale:", e)
    }
  }

  // Se não conseguir determinar, usar o padrão
  return defaultLocale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Ignorar arquivos estáticos e API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/") ||
    pathname.includes("/images/") ||
    pathname.includes(".") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next()
  }

  // Verificar se o caminho já começa com um locale
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

  if (pathnameHasLocale) return NextResponse.next()

  // Obter o locale preferido
  const locale = getLocale(request)

  // Criar nova URL com o locale
  const newUrl = new URL(`/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`, request.url)
  newUrl.search = request.nextUrl.search

  // Definir cookie para manter a preferência de idioma
  const response = NextResponse.redirect(newUrl)
  response.cookies.set("NEXT_LOCALE", locale, {
    maxAge: 60 * 60 * 24 * 30, // 30 dias
    path: "/",
  })

  return response
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}

