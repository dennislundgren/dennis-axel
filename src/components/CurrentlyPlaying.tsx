"use client";

import useIsPsycho from "@/hooks/useIsPsycho";
import * as motion from "motion/react-client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";
import Body from "./UI/typography/Body";
interface SpotifyData {
  isPlaying: boolean;
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  songUrl: string;
  playingType?: string;
}

/** _client component_ */
export default function CurrentlyPlaying() {
  const [spotifyData, setSpotifyData] = useState<SpotifyData | null>(null);
  const [hide, setHide] = useState(false);
  const isPsycho = useIsPsycho();

  const t = useTranslations("CurrentlyPlaying");

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const fetchData = async () => {
      const res = await fetch("/api/spotify");
      const data = await res.json();

      if (!data.isPlaying) {
        setHide(true);
        setTimeout(() => {
          setSpotifyData(null);
        }, 1000);
      } else {
        setHide(false);
        setSpotifyData(data);
      }
    };

    fetchData();
    interval = setInterval(fetchData, 10000);

    return () => clearInterval(interval);
  }, []);

  const {
    isPlaying = false,
    title = "",
    artist = "",
    album = "",
    albumImageUrl = "",
    songUrl = "",
    playingType = "",
  } = spotifyData || {};

  if (!isPlaying || isPsycho) return null;

  if (isPlaying && playingType === "episode")
    return (
      <motion.div
        initial={{
          opacity: 0,
          marginTop: "-5rem",
        }}
        animate={
          hide
            ? {
                opacity: 0,
                marginTop: "-4.5rem",
              }
            : {
                opacity: 1,
                marginTop: 0,
                transition: {
                  duration: 1,
                  ease: "easeIn",
                  marginTop: {
                    duration: 0.33,
                    ease: "easeOut",
                  },
                },
              }
        }
        className="flex gap-4 items-center max-w-md"
      >
        <Body>{t("listening")} podcast</Body>
      </motion.div>
    );

  return (
    <motion.div
      initial={{
        opacity: 0,
        marginTop: "-5rem",
      }}
      animate={
        hide
          ? {
              opacity: 0,
              marginTop: "-4.5rem",
            }
          : {
              opacity: 1,
              marginTop: 0,
              transition: {
                duration: 1,
                ease: "easeIn",
                marginTop: {
                  duration: 0.33,
                  ease: "easeOut",
                },
              },
            }
      }
      className="flex gap-4 items-center max-w-md"
    >
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
        {isPlaying ? t("listening") + " " : " "}
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
      </Body>
    </motion.div>
  );
}
