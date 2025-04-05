import CurrentlyPlaying from "@/components/CurrentlyPlaying";
import Card from "@/components/UI/Card";
import Body from "@/components/UI/typography/Body";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

const LanguageSelector = dynamic(() => import("@/components/LanguageSelector"));

export default function Home() {
  const t = useTranslations("HomePage");
  const c = useTranslations("CurrentlyPlaying");

  return (
    <main className="flex min-h-full-dynamic flex-col items-center justify-center p-4 lg:p-24 gap-8">
      <Card>
        <Body>{t("title")},</Body>
        <Body>{t("statement1")}</Body>
        <Body>{t("statement2")}</Body>
      </Card>
      <CurrentlyPlaying c={c} />
      <LanguageSelector />
    </main>
  );
}
