import Link from "next/link";
import { useMenuMobile } from "../Header/HeaderMobileNavigation/MobileNavigationProvider";
import { ChevronRight } from "lucide-react";

interface DropdownLinkProps {
  href: string;
  children: React.ReactNode;
}

export function DropdownLink({ href, children }: DropdownLinkProps) {
  const { isHandled, toggle } = useMenuMobile();
  return (
    <li>
      <Link
      className="flex gap-4 justify-center items-center p-2"
        onClick={() => {
          if (isHandled) {
            toggle();
          }
        }}
        href={href}
      >
        {children}
        <ChevronRight strokeWidth={3} fontStyle="bold" />  
      </Link>
    </li>
  );
}
