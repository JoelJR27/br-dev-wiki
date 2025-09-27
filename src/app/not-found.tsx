import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-[calc(100vh-6rem)] flex flex-col gap-4 items-center justify-center">
      <h1 className="h1 text-verde">Opa, página não encontrada! </h1>
      <p className="text-cinza texto-regular">
        Desculpe, mas a página que você está procurando não existe. Verifique se
        o URL está correto ou volte para a página inicial.
      </p>
      <Link className="text-verde underline h3" href="/">
        Voltar para a página inicial
      </Link>
    </div>
  );
}
