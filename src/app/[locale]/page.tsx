import Content from "@/components/Content";
import CurrentlyPlaying from "@/components/CurrentlyPlaying";
import { Locales } from "@/types/global";
import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locales }>;
}): Promise<Metadata> {
  const { locale } = await params;
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
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `https://dennisaxel.com/${locale}`,
      siteName: "Dennis Axel Lundgren",
      type: "website",
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locales }>;
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
