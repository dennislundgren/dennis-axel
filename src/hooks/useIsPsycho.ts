"use client";

import { useEffect, useState } from "react";

export default function useIsPsycho() {
  const [isPsycho, setIsPsycho] = useState(false);

  useEffect(() => {
    const match = window.matchMedia("(max-height: 348px)");
    setIsPsycho(match.matches);

    const handler = (e: MediaQueryListEvent) => setIsPsycho(e.matches);
    match.addEventListener("change", handler);

    return () => match.removeEventListener("change", handler);
  }, []);

  return isPsycho;
}
