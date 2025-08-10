import CardContent from "@/components/CardContent";
import CurrentlyPlaying from "@/components/CurrentlyPlaying";
import { setRequestLocale } from "next-intl/server";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: Props) {
  console.log("Page rendered\t", Date.now());
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
