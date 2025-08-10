"use client";

import dynamic from "next/dynamic";

const CurrentlyPlayingClient = dynamic(() => import("./client"), {
  ssr: false,
});

export default function CurrentlyPlaying() {
  return <CurrentlyPlayingClient />;
}
