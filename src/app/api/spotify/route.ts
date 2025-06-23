const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!;
const client_secret = process.env.NEXT_SPOTIFY_CLIENT_SECRET!;
const refresh_token = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN!;

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";

async function getAccessToken(): Promise<{ access_token: string }> {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${client_id}:${client_secret}`
      ).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.json();
}

export async function GET() {
  const { access_token } = await getAccessToken();

  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    next: {
      revalidate: 60, // Revalidate every 60 seconds
    },
  });

  if (response.status === 204 || response.status > 400) {
    return Response.json({ isPlaying: false });
  }

  const song = await response.json();

  return Response.json({
    isPlaying: song.is_playing,
    title: song.item?.name,
    artist: song.item?.artists
      .map((artist: { name: string }) => artist.name)
      .join(", "),
    album: song.item?.album.name,
    albumImageUrl: song.item?.album.images[0].url,
    songUrl: song.item?.external_urls.spotify,
  });
}
