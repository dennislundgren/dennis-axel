"use client";

import Surface from "@/components/UI/Surface";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Languages } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(false);
  const t = useTranslations("LanguageSelector");
  const path = usePathname();
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
          <Surface className="px-3 py-2 flex flex-col">
            {routing.locales.map((targetLocale) => (
              <Link
                href={path}
                locale={targetLocale}
                key={targetLocale}
                className={
                  currentLocale === targetLocale
                    ? "cursor-pointer hidden"
                    : "cursor-pointer hover:underline"
                }
                prefetch={active ? null : false}
                onMouseEnter={() => setActive(true)}
              >
                {t(targetLocale)}
              </Link>
            ))}
          </Surface>
        </div>
      )}
    </aside>
  );
}
