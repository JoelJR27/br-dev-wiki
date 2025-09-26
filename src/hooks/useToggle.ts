import { useState } from "react";
export default function useToggle() {
  const [isHandled, setIsHandled] = useState(false);
  const toggle = () => setIsHandled((prev) => !prev);

  return {
    isHandled,
    toggle,
  };
}
