"use client";

import Body from "@/components/UI/typography/Body";
import useIsPsycho from "@/hooks/useIsPsycho";
import fetcher from "@/lib/fetcher";
import * as motion from "motion/react-client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import useSWR from "swr";
interface SpotifyData {
  isPlaying: boolean;
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  songUrl: string;
  playingType?: "episode";
}

/** _client component_ */
export default function CurrentlyPlaying() {
  const { data: spotifyData } = useSWR<SpotifyData>("/api/spotify", fetcher, {
    refreshInterval: 1000,
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
    <motion.div
      initial={{
        opacity: 0,
        marginTop: "-5rem",
      }}
      animate={
        !isPlaying
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
        {isPlaying
          ? playingType === "episode"
            ? t("listening") + "  podcast"
            : t("listening") + " "
          : " "}
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
