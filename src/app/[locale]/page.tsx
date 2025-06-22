import Card from "@/components/UI/Card";
import Body from "@/components/UI/typography/Body";
import { getTranslations } from "next-intl/server";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const LanguageSelector = dynamic(() => import("@/components/LanguageSelector"));

export default async function Home() {
  const t = await getTranslations("HomePage");
  const c = await getTranslations("CurrentlyPlaying");

  return (
    <main className="flex min-h-full-dynamic flex-col items-center justify-center p-4 lg:p-24 gap-8">
      <Card>
        <Body>{t("title")},</Body>
        <Body>{t("statement1")}</Body>
        <Body>{t("statement2")}</Body>
      </Card>
      {/* <Suspense>
        <CurrentlyPlaying c={c} />
      </Suspense> */}

      <Suspense
        fallback={
          <aside className="fixed bottom-4 right-4 lg:bottom-8 lg:right-8 z-50 flex flex-col-reverse items-end gap-4">
            <Body>Loading language selector...</Body>
          </aside>
        }
      >
        <LanguageSelector />
      </Suspense>
    </main>
  );
}
