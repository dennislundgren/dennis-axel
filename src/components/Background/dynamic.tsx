"use client";

import dynamic from "next/dynamic";

export const BackgroundTouchMask = dynamic(() => import("./client"), {
  ssr: false,
});
