"use client";

import { HeaderHandleMenuButton } from "./HeaderHandleMenuButton";
import HeaderDesktopNavigation from "./HeaderDesktopNavigation";
import useDeviceWidth from "@/hooks/useDeviceWidth";

export function HeaderNavigation() {
  const { deviceWidth } = useDeviceWidth();

  return (
    <>
      {deviceWidth <= 1024 ? (
        <HeaderHandleMenuButton />
      ) : (
        <HeaderDesktopNavigation />
      )}
    </>
  );
}
