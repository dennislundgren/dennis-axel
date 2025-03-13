import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(darkMode.matches);

    const handler = (e: MediaQueryListEvent) => {
      setIsDark(e.matches);
    };

    darkMode.addEventListener("change", handler);

    return () => {
      darkMode.removeEventListener("change", handler);
    };
  }, []);

  return isDark;
}
