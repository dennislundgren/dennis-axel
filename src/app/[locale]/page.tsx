import { Body } from "@/components/atoms/Texts";
import { Card } from "@/components/molecules/Card";
import { CurrentlyPlaying } from "@/components/organisms/CurrentlyPlaying";
import { PageWrapper } from "@/components/templates/PageWrapper";
import { Locales } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";

interface Props {
  params: Promise<{ locale: Locales }>;
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <PageWrapper>
      <Content />
      <CurrentlyPlaying />
    </PageWrapper>
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
