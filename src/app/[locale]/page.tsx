import Content from "@/components/Content";
import CurrentlyPlaying from "@/components/CurrentlyPlaying";
import { setRequestLocale } from "next-intl/server";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <main className="flex min-h-full-dynamic flex-col items-center justify-center p-4 lg:p-24 gap-8">
      <Content />
      <CurrentlyPlaying />
    </main>
  );
}
