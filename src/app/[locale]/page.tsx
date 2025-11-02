import { Body } from "@/components/atoms/Texts";
import { Card } from "@/components/molecules/Card";
import { CurrentlyPlaying } from "@/components/organisms/CurrentlyPlaying";
import { Locales } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";

interface Props {
  params: Promise<{ locale: Locales }>;
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex min-h-full-dynamic flex-col items-center justify-center p-4 lg:p-24 gap-8">
      <div className="relative">
        <Content />
        <CurrentlyPlaying />
      </div>
    </main>
  );
}

async function Content() {
  const t = await getTranslations("HomePage");
  return (
    <Card>
      <Body>{t("developer")}</Body>
    </Card>
  );
}
