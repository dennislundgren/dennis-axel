"use client";

import { Surface } from "@/components/atoms/Surface";
import { Loader } from "@/components/molecules/Loader";
import { Link } from "@/i18n/navigation";
import { Locales, routing } from "@/i18n/routing";
import { clsx } from "clsx";
import { Languages } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <LanguageToggle isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && <LanguagePopover />}
    </Wrapper>
  );
}

function Wrapper({ children }: PropsWithChildren) {
  return (
    <aside className="fixed bottom-4 right-4 lg:bottom-8 lg:right-8 z-50 flex flex-col-reverse items-end gap-4">
      {children}
    </aside>
  );
}

function LanguageToggle({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [focused, setFocused] = useState<boolean>(false);

  const listener = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Enter") setIsOpen(!isOpen);
    },
    [isOpen, setIsOpen],
  );

  useEffect(() => {
    if (!focused) return;

    window.addEventListener("keydown", listener);

    return () => window.removeEventListener("keydown", listener);
  }, [focused, listener]);
  return (
    <Surface
      tabIndex={0}
      className="p-2 rounded-lg cursor-pointer flex-col-reverse flex w-fit hover:scale-105 transition active:scale-95 focus:scale-105"
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      onFocus={() => {
        setFocused(true);
      }}
      onBlur={() => {
        setFocused(false);
      }}
    >
      <Languages size={20} className="dark:opacity-75" />
    </Surface>
  );
}

function LanguagePopover() {
  const [isLoading, setIsLoading] = useState<
    { locale: Locales; loading: boolean }[]
  >(routing.locales.map((locale) => ({ locale, loading: false })));

  const t = useTranslations("LanguageSelector");
  const currentLocale = useLocale();

  return (
    <Surface
      className={clsx(
        "px-3 py-2 flex flex-col",
        isLoading.some(({ loading }) => loading) && "cursor-wait select-none",
      )}
    >
      {routing.locales.map((targetLocale, i) => (
        <Link
          href="/"
          locale={targetLocale}
          key={i}
          className={clsx(
            currentLocale === targetLocale ? "hidden" : "cursor-pointer",
            isLoading.some(({ loading }) => loading)
              ? "cursor-wait select-none"
              : "hover:underline",
          )}
          onClick={() => {
            !isLoading.some(({ loading }) => loading) &&
              setIsLoading(
                isLoading.map((obj) =>
                  obj.locale === targetLocale
                    ? { loading: true, locale: targetLocale }
                    : obj,
                ),
              );
          }}
        >
          {isLoading[i].loading ? <Loader /> : t(targetLocale)}
        </Link>
      ))}
    </Surface>
  );
}
