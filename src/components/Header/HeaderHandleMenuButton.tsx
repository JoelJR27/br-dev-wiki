"use client";
import { ChevronDown } from "lucide-react";
import { useMenuMobile } from "./HeaderMobileNavigation/MobileNavigationProvider";

export function HeaderHandleMenuButton() {
  const { isHandled, toggle } = useMenuMobile();
  return (
    <button
      style={{
        color: isHandled ? "#F3F2F0" : "#4D4B4B",
        backgroundColor: isHandled ? "#2d2e3c" : "transparent",
      }}
      className="h-full px-3 flex items-center gap-2 h2"
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        event.stopPropagation();
        toggle();
      }}
    >
      Menu{" "}
      <ChevronDown
        style={{
          transform: isHandled ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.2s ease-in-out",
        }}
        strokeWidth={3}
      />
    </button>
  );
}
