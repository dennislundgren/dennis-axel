import { useEffect, useState } from "react";

export default function useIsTouch() {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const match = window.matchMedia("(pointer: coarse)");
    setIsTouch(match.matches);

    const handler = (e: MediaQueryListEvent) => setIsTouch(e.matches);
    match.addEventListener("change", handler);

    return () => match.removeEventListener("change", handler);
  }, []);

  return isTouch;
}
