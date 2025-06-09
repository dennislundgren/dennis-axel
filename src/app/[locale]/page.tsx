import CurrentlyPlaying from "@/components/CurrentlyPlaying";
import Card from "@/components/UI/Card";
import Body from "@/components/UI/typography/Body";
import { routing } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import dynamic from "next/dynamic";
import { Suspense } from "react";

export async function generateStaticParams() {
  // Generate static params for all locales defined in the routing
  return routing.locales.map((locale) => ({
    locale,
  }));
}

const LanguageSelector = dynamic(() => import("@/components/LanguageSelector"));

export default async function Home() {
  console.log("TS: ", Date.now(), " Home page...");
  const t = await getTranslations("HomePage");
  const c = await getTranslations("CurrentlyPlaying");

  console.log("TS: ", Date.now(), " Translations fetched...");
  return (
    <main className="flex min-h-full-dynamic flex-col items-center justify-center p-4 lg:p-24 gap-8">
      <Card>
        <Body>{t("title")},</Body>
        <Body>{t("statement1")}</Body>
        <Body>{t("statement2")}</Body>
      </Card>
      <Suspense fallback={<Body>{c("notListening")}</Body>}>
        <CurrentlyPlaying c={c} />
      </Suspense>

      <LanguageSelector />
    </main>
  );
}
