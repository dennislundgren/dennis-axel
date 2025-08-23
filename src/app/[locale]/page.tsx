import CardContent from "@/components/CardContent";
import CurrentlyPlaying from "@/components/CurrentlyPlaying";
import { Locales } from "@/types/global";
import { setRequestLocale } from "next-intl/server";

interface Props {
  params: Promise<{ locale: Locales }>;
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex min-h-full-dynamic flex-col items-center justify-center p-4 lg:p-24 gap-8">
      <div className="relative">
        <CardContent />
        <CurrentlyPlaying />
      </div>
    </main>
  );
}
