import { LocaleLayoutShell } from "@/components/templates";
import { routing } from "@/i18n/routing";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { PropsWithChildren } from "react";

import "./../globals.css";

export { generateMetadata } from "@/lib/generateMetadata";
export { generateStaticParams } from "@/lib/generateStaticParams";

interface Props extends PropsWithChildren {
  params: Promise<{ locale: string }>;
}

export default async function Layout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);

  return <LocaleLayoutShell locale={locale}>{children}</LocaleLayoutShell>;
}
