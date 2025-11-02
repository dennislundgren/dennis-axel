import { LanguageSelector } from "@/components/organisms/LanguageSelector";
import { Version } from "@/components/organisms/Version";
import { Background } from "@/components/templates/Background";
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
        <NextIntlClientProvider>
          {children}

          <Background />
          <Version />
          <LanguageSelector />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
