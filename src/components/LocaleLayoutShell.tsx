import Background from "@/components/Background";
import CookieManager from "@/components/CookieManager";
import LanguageSelector from "@/components/LanguageSelector/client";
import Version from "@/components/Version/server";
import { Locales } from "@/types/global";
import { NextIntlClientProvider } from "next-intl";

interface Props {
  children: React.ReactNode;
  locale: Locales;
}

export default function LocaleLayoutShell({ children, locale }: Props) {
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
