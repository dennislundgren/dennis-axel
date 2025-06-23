import CurrentlyPlaying from "@/components/CurrentlyPlaying";
import LanguageSelector from "@/components/LanguageSelector";
import Card from "@/components/UI/Card";
import Body from "@/components/UI/typography/Body";
import { Locales } from "@/types/global";
import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Suspense } from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locales }>;
}): Promise<Metadata> {
  const { locale } = await params;
  // Enable static rendering
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
    authors: {
      name: "Dennis Axel Lundgren",
    },
    creator: "Dennis Axel Lundgren",
    alternates: {
      canonical: `https://dennisaxel.com/${locale}`,
      languages: {
        "x-default": "https://dennisaxel.com",
        [locale]: `https://dennisaxel.com/${locale}`,
      },
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locales }>;
}) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);
  const t = await getTranslations("HomePage");

  return (
    <main className="flex min-h-full-dynamic flex-col items-center justify-center p-4 lg:p-24 gap-8">
      <Card>
        <Body>{t("title")},</Body>
        <Body>{t("statement1")}</Body>
        <Body>{t("statement2")}</Body>
      </Card>
      <Suspense>
        <CurrentlyPlaying />
      </Suspense>

      <Suspense>
        <LanguageSelector />
      </Suspense>
    </main>
  );
}
