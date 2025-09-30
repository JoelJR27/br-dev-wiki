import Link from "next/link";

export default function HeaderDesktopNavigation() {
  return (
    <nav className="text-cinza flex *:p-5 *:hover:bg-azul-escuro *:hover:text-branco h3 gap-2">
      <Link href="/html">HTML</Link>

      <Link href="/css">CSS</Link>

      <Link href="/javascript">JavaScript</Link>

      <Link href="/typescript">TypeScript</Link>
    </nav>
  );
}
