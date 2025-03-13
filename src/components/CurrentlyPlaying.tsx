"use client";
import Image from "next/image";
import useSWR from "swr";
import Body from "./UI/typography/Body";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import DynamicText from "./UI/typography/DynamicText";
import { useTranslations } from "next-intl";

interface SpotifyData {
  isPlaying: boolean;
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  songUrl: string;
}

const fetcher = (url: string): Promise<SpotifyData> =>
  fetch(url).then((res) => res.json());

export default function CurrentlyPlaying() {
  const { data } = useSWR<SpotifyData>("/api/spotify", fetcher, {
    refreshInterval: 10000,
  });
  const t = useTranslations("CurrentlyPlaying");
  const [artist, setArtist] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [album, setAlbum] = useState<string>("");
  const [albumImageUrl, setAlbumImageUrl] = useState<string>("");
  const [songUrl, setSongUrl] = useState<string>("");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (!data) return;
    setArtist(data.artist);
    setTitle(data.title);
    setAlbum(data.album);
    setAlbumImageUrl(data.albumImageUrl);
    setSongUrl(data.songUrl);
    setIsPlaying(data.isPlaying);
  }, [data]);

  return (
    <div className="flex gap-4 items-center max-w-md">
      {isPlaying && albumImageUrl && (
        <Image
          src={albumImageUrl}
          alt={album}
          width={40}
          height={40}
          className="rounded-full rotate w-10 h-10 select-none"
        />
      )}
      <Body>
        <DynamicText text={isPlaying ? t("listening") : t("notListening")} />{" "}
        <motion.a
          href={songUrl}
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.strong>
            {isPlaying && title && <DynamicText text={title} />}
          </motion.strong>{" "}
          {isPlaying && artist && <DynamicText text={t("by") + " " + artist} />}
        </motion.a>
      </Body>
    </div>
  );
}
