import z from "zod";

export const SpotifyDataSchema = z.object({
  isPlaying: z.boolean(),
  title: z.optional(z.string()),
  artist: z.optional(z.string()),
  album: z.optional(z.string()),
  albumImageUrl: z.optional(z.url()),
  songUrl: z.optional(z.url()),
  playingType: z.enum(["episode", "track"]).optional(),
});

export type SpotifyData = z.infer<typeof SpotifyDataSchema>;
