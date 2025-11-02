"use client";

import { useSyncExternalStore } from "react";

export function useDarkMode() {
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
