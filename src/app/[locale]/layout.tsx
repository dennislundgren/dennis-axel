import LocaleLayoutShell from "@/components/LocaleLayoutShell";
import { routing } from "@/i18n/routing";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import "./../globals.css";

export { generateStaticParams } from "@/lib/generateStaticParams";
export { generateMetadata } from "@/lib/metadata";

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return <LocaleLayoutShell locale={locale}>{children}</LocaleLayoutShell>;
}
