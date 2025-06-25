"use client";

import Surface from "@/components/UI/Surface";
import useDarkMode from "@/hooks/useDarkMode";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Languages } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

/** _client component_ */
export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("LanguageSelector");
  const path = usePathname();
  const isDark = useDarkMode();
  const router = useRouter();
  const currentLocale = useLocale();

  return (
    <aside className="fixed bottom-4 right-4 lg:bottom-8 lg:right-8 z-50 flex flex-col-reverse items-end gap-4">
      <div
        className="p-2 rounded-lg cursor-pointer flex-col-reverse flex w-fit hover:scale-105 transition active:scale-95"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <Languages className="dark:opacity-75" />
      </div>
      {isOpen && (
        <div className="flex flex-col p-2 rounded-lg items-end gap-1">
          <Surface className="px-3 py-2">
            {routing.locales.map((targetLocale) => (
              <div
                key={targetLocale}
                className={
                  currentLocale === targetLocale
                    ? "cursor-pointer hidden"
                    : "cursor-pointer hover:underline"
                }
                onClick={() => {
                  setIsOpen(false);
                  router.replace(path, { locale: targetLocale });
                }}
              >
                {t(targetLocale)}
              </div>
            ))}
          </Surface>
        </div>
      )}
    </aside>
  );
}
