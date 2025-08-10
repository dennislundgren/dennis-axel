"use client";

import dynamic from "next/dynamic";

const CookieManagerClient = dynamic(() => import("./client"), {
  ssr: false,
});

export default function CookieManager() {
  return <CookieManagerClient />;
}
