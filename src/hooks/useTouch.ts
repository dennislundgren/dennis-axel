"use client";

import { useEffect, useState } from "react";

/** _client component_ */
export default function useTouch() {
  const [isTouching, setIsTouching] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const handleTouchStart = () => setIsTouching(true);
  const handleTouchEnd = () => setIsTouching(false);

  useEffect(() => {
    const match = window.matchMedia("(pointer: coarse)");
    setIsTouch(match.matches);

    const handler = (e: MediaQueryListEvent) => setIsTouch(e.matches);
    match.addEventListener("change", handler);

    return () => match.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return { isTouch, isTouching };
}
