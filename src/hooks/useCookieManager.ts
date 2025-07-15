"use client";

import { useEffect, useState } from "react";

export default function useCookieManager() {
  const [consent, setConsent] = useState<string>("");
  useEffect(() => {
    window.postMessage({
      source: "init",
    });
    const temp = (event: MessageEvent<any>) => {
      event.preventDefault();
      event.stopPropagation();
      setConsent(event.data.body);
    };

    window.addEventListener("message", temp);
    return () => window.removeEventListener("message", temp);
  }, []);

  return { consent };
}
