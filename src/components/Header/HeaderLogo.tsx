"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import { useMenuMobile } from "./HeaderMobileNavigation/MobileNavigationProvider";

export function HeaderLogo() {
  const { isHandled, toggle } = useMenuMobile();
  return (
    <Link
      className="pl-4"
      href={"/"}
      onClick={() => {
        if (isHandled) toggle();
      }}
    >
      <Image
        className="hover:scale-110 transition-transform duration-200 cursor-pointer w-[75px]"
        src={logo}
        alt="Logo BRDevWiki"
        priority
      />
    </Link>
  );
}
