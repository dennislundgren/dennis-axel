"use client";
import Image from "next/image";
import useSWR from "swr";
import Body from "./UI/typography/Body";

type SpotifyData = {
  isPlaying: boolean;
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  songUrl: string;
};

const fetcher = (url: string): Promise<SpotifyData> =>
  fetch(url).then((res) => res.json());

export default function CurrentlyPlaying() {
  const { data } = useSWR<SpotifyData>("/api/spotify", fetcher, {
    refreshInterval: 10000,
  });

  if (!data || !data.isPlaying) {
    return <p>Not playing anything right now.</p>;
  }

  return (
    <div className="flex gap-4 items-center">
      <Image
        src={data.albumImageUrl}
        alt={data.album}
        width={40}
        height={40}
        className="rounded-full rotate w-10 h-10 select-none"
      />
      <Body>
        Lyssnar på:{" "}
        <a
          href={data.songUrl}
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>{data.title}</strong> av {data.artist}
        </a>
      </Body>
    </div>
  );
}
