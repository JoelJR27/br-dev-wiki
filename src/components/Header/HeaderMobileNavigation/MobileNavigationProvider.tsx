"use client";
import useToggle from "@/hooks/useToggle";
import { useState, createContext, use, useContext } from "react";

type MenuMobileContextType = {
  isHandled: boolean;
  toggle: () => void;
};
const MobileNavigationContext = createContext<
  MenuMobileContextType | undefined
>({
  isHandled: false,
  toggle: () => {},
});

interface MobileNavigationProviderProps {
  children: React.ReactNode;
}
function MobileNavigationProvider({ children }: MobileNavigationProviderProps) {
  const { isHandled, toggle } = useToggle();
  return (
    <MobileNavigationContext.Provider value={{ isHandled, toggle }}>
      {children}
    </MobileNavigationContext.Provider>
  );
}

const useMenuMobile = () => {
  const context = useContext(MobileNavigationContext);

  if (!context) {
    throw new Error("useMenuMobile deve ser usado dentro de um Provider.");
  }
  return context;
};

export { MobileNavigationProvider, useMenuMobile };
