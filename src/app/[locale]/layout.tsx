import Background from "@/components/Background";
import LanguageSelector from "@/components/LanguageSelector";
import Version from "@/components/Version";
import { routing } from "@/i18n/routing";
import { Locales } from "@/types/global";
import { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Noto_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import "./../globals.css";

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}

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

const noto = Noto_Sans({ subsets: ["latin"] });

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locales }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={noto.className}>
        <NextIntlClientProvider>
          {children}
          <Background />
          <LanguageSelector />
          <Version />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
