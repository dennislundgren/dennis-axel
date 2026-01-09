"use client";

import { Body } from "@/components/atoms/Texts";
import { fetcher } from "@/lib/fetcher";
import { SpotifyData } from "@/types/spotify";
import { useTranslations } from "next-intl";
import Image from "next/image";
import type { PropsWithChildren } from "react";
import useSWR from "swr";

export function CurrentlyPlaying() {
  const { data: spotifyData } = useSWR<SpotifyData>("/api/spotify", fetcher, {
    refreshInterval: 10000,
  });

  if (!spotifyData) return null;

  return (
    <Wrapper {...spotifyData}>
      <AlbumCover {...spotifyData} />
      <Description {...spotifyData} />
    </Wrapper>
  );
}

interface Props extends PropsWithChildren<SpotifyData> {}

function Wrapper({
  children,
  isPlaying,
}: Pick<Props, "children" | "isPlaying">) {
  return (
    <div
      style={{
        opacity: isPlaying ? 1 : 0,
      }}
      className="transition-slow flex gap-4 items-center opacity-0 absolute -bottom-24 max-w-3xl w-screen justify-center translate-x-1/2 right-1/2 px-4"
    >
      {children}
    </div>
  );
}

function AlbumCover({
  isPlaying,
  albumImageUrl,
  album,
}: Pick<Props, "isPlaying" | "album" | "albumImageUrl">) {
  if (!isPlaying || !albumImageUrl) return null;
  return (
    <Image
      loading="lazy"
      fetchPriority="low"
      src={albumImageUrl}
      alt={album}
      width={40}
      height={40}
      className="rounded-full rotate w-10 h-10 select-none transition-slow"
    />
  );
}

function Description({
  isPlaying,
  playingType,
  songUrl,
  title,
  artist,
}: Pick<Props, "isPlaying" | "playingType" | "songUrl" | "title" | "artist">) {
  const t = useTranslations("CurrentlyPlaying");

  return (
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
  );
}
