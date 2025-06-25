"use client";

import { useSyncExternalStore } from "react";

/** _client component_ */
export default function useDarkMode() {
  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}

function subscribe(callback: () => void) {
  const darkMode = window.matchMedia("(prefers-color-scheme: dark)");
  darkMode.addEventListener("change", callback);
  return () => darkMode.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}
