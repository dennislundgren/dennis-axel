import { Background } from "@/components/Background";
import { CookieManager } from "@/components/CookieManager";
import { LanguageSelector } from "@/components/LanguageSelector";
import { Version } from "@/components/Version";
import { Locales } from "@/types/global";
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
          <CookieManager />
          <LanguageSelector />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
