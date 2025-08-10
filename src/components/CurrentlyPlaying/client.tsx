"use client";

import { Body } from "@/components/ui/Texts";
import useIsPsycho from "@/hooks/useIsPsycho";
import fetcher from "@/lib/fetcher";
import { SpotifyData } from "@/types/spotify";
import { useTranslations } from "next-intl";
import Image from "next/image";
import useSWR from "swr";

export default function CurrentlyPlayingClient() {
  const { data: spotifyData } = useSWR<SpotifyData>("/api/spotify", fetcher, {
    refreshInterval: 30000,
  });

  const isPsycho = useIsPsycho();

  const t = useTranslations("CurrentlyPlaying");

  const {
    isPlaying = false,
    title = "",
    artist = "",
    album = "",
    albumImageUrl = "",
    songUrl = "",
    playingType = "",
  } = spotifyData || {};

  if (isPsycho) return null;

  return (
    <div
      style={{
        opacity: isPlaying ? 1 : 0,
      }}
      className="transition-slow flex gap-4 items-center max-w-md opacity-0 absolute bottom-[-4rem] left-0 w-full justify-center"
    >
      {isPlaying && albumImageUrl && (
        <Image
          loading="lazy"
          fetchPriority="low"
          src={albumImageUrl}
          alt={album}
          width={40}
          height={40}
          className="rounded-full rotate w-10 h-10 select-none"
        />
      )}
      <Body>
        {isPlaying
          ? playingType === "episode"
            ? t("listening") + "  podcast"
            : t("listening") + " "
          : " "}
        {isPlaying && playingType !== "episode" ? (
          <a
            href={songUrl}
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>{isPlaying && title && <>{title}</>}</strong>
            {isPlaying ? " " + t("by") + " " : ""}
            {isPlaying && artist && <>{artist}</>}
          </a>
        ) : null}
      </Body>
    </div>
  );
}
