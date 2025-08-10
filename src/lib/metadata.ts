import { Locales } from "@/types/global";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

interface Props {
  params: Promise<{ locale: Locales }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
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
