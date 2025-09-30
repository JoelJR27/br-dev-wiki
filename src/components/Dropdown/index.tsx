"use client";

import useToggle from "@/hooks/useToggle";
import { DropdownButton } from "./DropdownButton";
import { DropdownContent } from "./DropdownContent";
interface DropdownProps {
  buttonTitle: string;
  children: React.ReactNode;
}
export default function Dropdown({ buttonTitle, children }: DropdownProps) {
  const { isHandled, toggle } = useToggle();
  return (
    <li>
      <DropdownButton
        title={buttonTitle}
        onClick={toggle}
        isHandled={isHandled}
      />
      <section
        style={{
          transform: isHandled ? "scaleY(1)" : "scaleY(0)",
          transformOrigin: "top",
          transition: "transform 0.3s ease",
        }}
        aria-expanded={isHandled}
        aria-hidden={!isHandled}
      >
        {isHandled && (
          <DropdownContent>
            {children}
          </DropdownContent>
        )}
      </section>
    </li>
  );
}
