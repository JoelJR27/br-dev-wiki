import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "DevWiki",
  description:
    "A DevWiki é uma enciclopédia colaborativa brasileira para desenvolvedores. Encontre artigos, tutoriais e recursos sobre diversas tecnologias de programação. Contribua com seu conhecimento e ajude a comunidade a crescer!",

  keywords: [
    "DevWiki",
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
  viewport: {
    width: "device-width",
    initialScale: 1,
  },

  icons: {
    icon: "./favicon.ico",
    shortcut: "./favicon.ico",
    apple: "./favicon.ico",
  },

  authors: [
    { name: "Joel Júnior", url: "https://github.com/JoelJR27" },
    { name: "Douglas Firmino" },
  ],
  creator: "Joel Júnior",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body cz-shortcut-listen="true" className="bg-branco">
        <Header />
        {children}
      </body>
    </html>
  );
}
