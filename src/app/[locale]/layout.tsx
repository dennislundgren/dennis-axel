import Card from "@/components/UI/Card";
import Body from "@/components/UI/typography/Body";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { Noto_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import "./../globals.css";

const noto = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dennis Axel",
  description: "Dennis Axel är en mästare på att programmera hemsidor.",
};

async function LocaleLayoutContent({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  console.log("TS: ", Date.now(), " Locale layout content init...");
  // Ensure that the incoming `locale` is valid
  const { locale } = params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  console.log("TS: ", Date.now(), " Locale layout content return...");

  return <NextIntlClientProvider>{children}</NextIntlClientProvider>;
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang="en">
      <body className={noto.className}>
        <Suspense
          fallback={
            <div className="flex min-h-full-dynamic items-center justify-center">
              <Card>
                <Body>Loading...</Body>
              </Card>
            </div>
          }
        >
          <LocaleLayoutContent params={params}>{children}</LocaleLayoutContent>
        </Suspense>
      </body>
    </html>
  );
}
