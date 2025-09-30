import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen bg-branco text-center flex flex-col items-center">
      <section className="p-8 mb-8 h-screen flex flex-col items-center gap-6 mt-30 md:px-20">
        <h1 className="h1 text-cinza">BRDevWiki</h1>
        <p className="texto-light text-cinza md:w-3/4 lg:w-6/10">
          A <strong className="font-black text-verde">BRDevWiki</strong> é um
          espaço colaborativo onde você aprende os principais conceitos das
          principais tecnologias com conteúdos em português e com linguagem
          simples!
        </p>
        <Link
          rel="noopener noreferrer"
          href={"/por-onde-comecar"}
          className="bg-verde h3 text-branco w-full px-6 py-2 rounded-lg hover:scale-105 transition-transform duration-200 inline-block md:w-3/4"
        >
          Por onde começar?
        </Link>
      </section>
    </main>
  );
}
