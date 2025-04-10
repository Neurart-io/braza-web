import type React from "react"
import type { Metadata } from "next"
import { IBM_Plex_Sans } from "next/font/google"
import "./globals.css"

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Braza.io | Software & AI",
  description: "Software House especializada em IA para clientes enterprise",
    generator: 'v0.dev',
    icons: {
      icon: "/favicon.png"
    }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${ibmPlexSans.variable} font-sans min-h-screen w-full overflow-x-hidden`}>{children}</body>
    </html>
  )
}



import './globals.css'