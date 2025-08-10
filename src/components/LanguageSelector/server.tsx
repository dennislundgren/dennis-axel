"use client";

import dynamic from "next/dynamic";

const LanguageSelectorClient = dynamic(() => import("./client"), {
  ssr: false,
});

export default function LanguageSelector() {
  return <LanguageSelectorClient />;
}
