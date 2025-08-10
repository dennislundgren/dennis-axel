import CardContent from "@/components/CardContent";
import CurrentlyPlaying from "@/components/CurrentlyPlaying";
import Card from "@/components/UI/Card";
import { Body } from "@/components/UI/Texts";
import { setRequestLocale } from "next-intl/server";
import { Suspense } from "react";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <main className="flex min-h-full-dynamic flex-col items-center justify-center p-4 lg:p-24 gap-8">
      <div className="relative">
        <Suspense
          fallback={
            <Card>
              <Body>Loading</Body>
            </Card>
          }
        >
          <CardContent />
          <CurrentlyPlaying />
        </Suspense>
      </div>
    </main>
  );
}
