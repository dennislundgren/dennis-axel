import Background from "@/components/Background";
import { routing } from "@/i18n/routing";
import { Locales } from "@/types/global";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Noto_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import "./../globals.css";

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
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
        <NextIntlClientProvider key={locale}>{children}</NextIntlClientProvider>
        <Background />
      </body>
    </html>
  );
}
