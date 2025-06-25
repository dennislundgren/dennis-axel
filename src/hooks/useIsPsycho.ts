"use client";

import { useSyncExternalStore } from "react";

/** _client component_ */
export default function useIsPsycho() {
  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}

function subscribe(callback: () => void) {
  const match = window.matchMedia("(max-height: 348px)");
  match.addEventListener("change", callback);
  return () => match.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia("(max-height: 348px)").matches;
}
