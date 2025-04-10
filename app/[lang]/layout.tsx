import type React from "react";
import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { i18n } from "@/i18n-config";
import "../globals.css";
import ScrollToTop from "@/components/scroll-to-top";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  title: "Braza.io | Software & AI",
  description:
    "Software House especializada em IA para clientes enterprise",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  const lang = (await params).lang;

  return (
    <html lang={lang} className="scroll-smooth">
      <body
        className={`${ibmPlexSans.variable} font-sans min-h-screen w-full overflow-x-hidden`}
      >
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
