import { LanguageSelector } from "@/components/organisms/LanguageSelector";
import { Version } from "@/components/organisms/Version";
import { Background } from "@/components/templates/Background";
import Header from "@/components/templates/Header";
import { DeckProvider } from "@/hooks/useDeck.hook";
import { Locales } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import type { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  locale: Locales;
}

export function LocaleLayoutShell({ children, locale }: Props) {
  return (
    <html lang={locale}>
      <body>
        <Header />
        <NextIntlClientProvider>
          <DeckProvider>
            {children}

            <Background />
            <Version />
            <LanguageSelector />
          </DeckProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
