import { HeaderNavigation } from "./HeaderNavigation";
import { HeaderLogo } from "./HeaderLogo";

export default function Header() {
  return (
    <header className="bg-branco border-verde border-b-2 sticky w-full z-10 top-0 flex items-center justify-between md:px-10 lg:px-10 xl:px-20 2xl:px-40 h-20">
      <HeaderLogo />
      <HeaderNavigation />
    </header>
  );
}
