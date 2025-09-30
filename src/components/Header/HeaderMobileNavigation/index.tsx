"use client";

import { useMenuMobile } from "./MobileNavigationProvider";
import Dropdown from "../../Dropdown";
import { DropdownLink } from "@/components/Dropdown/DropdownLink";
import SocialMediaList from "@/components/SocialIMediaList";

export default function HeaderMobileNavigation() {
  const { isHandled } = useMenuMobile();

  return (
    <>
      {isHandled && (
        <nav className="bg-branco w-full h-[calc(100vh-4rem)] fixed top-[4rem] left-0 z-9 lg:hidden">
          <ul className="flex flex-col items-center mt-5 divide-azul-escuro divide-y-1 *:w-full ">
            <Dropdown buttonTitle="Javascript">
              <DropdownLink href="/javascript/">
                Aprenda Javascript
              </DropdownLink>
            </Dropdown>
          </ul>
          <SocialMediaList />
        </nav>
      )}
    </>
  );
}
