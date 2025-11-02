export async function getSpotifyData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const response = await fetch(`${baseUrl}/api/spotify`, {
    cache: "no-store",
  });
  return response.json();
}
