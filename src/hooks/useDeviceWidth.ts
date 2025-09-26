"use client";
import { useEffect, useState } from "react";

export default function useDeviceWidth() {
  const [deviceWidth, setDeviceWidth] = useState<number>(0);
  useEffect(() => {
    const updateWidth = () => setDeviceWidth(window.innerWidth);

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, [deviceWidth]);

  return { deviceWidth };
}
