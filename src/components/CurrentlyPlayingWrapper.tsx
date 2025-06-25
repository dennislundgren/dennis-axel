// app/components/CurrentlyPlayingWrapper.tsx
"use client";

import dynamic from "next/dynamic";

const CurrentlyPlaying = dynamic(() => import("./CurrentlyPlaying"), {
  ssr: false,
  loading: () => <></>,
});

export default CurrentlyPlaying;
