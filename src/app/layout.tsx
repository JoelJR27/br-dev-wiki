import "./globals.css";
import type { Metadata } from "next";
import type { Viewport } from "next";
import { Nunito_Sans } from "next/font/google";
import { MobileNavigationProvider } from "@/components/Header/HeaderMobileNavigation/MobileNavigationProvider";
import Header from "@/components/Header";
import HeaderMobileNavigation from "@/components/Header/HeaderMobileNavigation";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-nunito",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "BRDevWiki",
  description:
    "A BRDevWiki é uma enciclopédia colaborativa brasileira para desenvolvedores. Encontre artigos, tutoriais e recursos sobre diversas tecnologias de programação. Contribua com seu conhecimento e ajude a comunidade a crescer!",

  keywords: [
    "BRDevWiki",
    "desenvolvimento",
    "programação",
    "tecnologia",
    "colaboração",
    "dev",
    "wiki",
    "artigos",
    "tutoriais",
    "recursos",
    "comunidade",
    "software",
    "código aberto",
    "ferramentas de desenvolvimento",
    "linguagens de programação",
    "frameworks",
    "bibliotecas",
    "melhores práticas",
    "dicas de programação",
    "projetos de código aberto",
    "inovação tecnológica",
  ],

  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },

  authors: [{ name: "Joel Júnior", url: "https://github.com/JoelJR27" }],
  creator: "Joel Júnior",
  category: "technology",
  openGraph: {
    title: "BRDevWiki",
    description:
      "A BRDevWiki é uma enciclopédia colaborativa brasileira para desenvolvedores. Encontre artigos, tutoriais e recursos sobre diversas tecnologias de programação. Contribua com seu conhecimento e ajude a comunidade a crescer!",
    siteName: "BRDevWiki",
    locale: "pt-BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`scroll-smooth ${nunito.className}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body cz-shortcut-listen="true" className="bg-branco relative">
        <MobileNavigationProvider>
          <Header />
          <HeaderMobileNavigation />
        </MobileNavigationProvider>
        {children}
      </body>
    </html>
  );
}
