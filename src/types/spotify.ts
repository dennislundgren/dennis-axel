import z from "zod";

export const SpotifyDataSchema = z.object({
  isPlaying: z.boolean(),
  title: z.string(),
  artist: z.string(),
  album: z.string(),
  albumImageUrl: z.url(),
  songUrl: z.url(),
  playingType: z.enum(["episode", "track"]).optional(),
});

export type SpotifyData = z.infer<typeof SpotifyDataSchema>;
