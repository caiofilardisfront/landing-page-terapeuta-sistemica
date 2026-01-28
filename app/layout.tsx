import type { Metadata } from "next"
import { Playfair_Display } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Waleska Quintela | Advocacia Trabalhista Empresarial",
  description:
    "Descubra como sair do contencioso tradicional e atuar de forma estrategica, preventiva e consultiva para empresas com Waleska Quintela.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={playfair.variable}>{children}</body>
    </html>
  )
}
