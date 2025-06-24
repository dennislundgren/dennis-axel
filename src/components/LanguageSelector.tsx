"use client";

import Surface from "@/components/UI/Surface";
import useDarkMode from "@/hooks/useDarkMode";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Languages } from "lucide-react";
import * as motion from "motion/react-client";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("LanguageSelector");
  const path = usePathname();
  const isDark = useDarkMode();
  const router = useRouter();
  const currentLocale = useLocale();

  const variants = {
    enter: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.05, delayChildren: 0.167 },
    },
    exit: {
      opacity: 0,
      y: 100,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
  };

  const item = {
    enter: { opacity: isDark ? 0.75 : 1 },
    exit: { opacity: 0 },
  };

  return (
    <motion.aside
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      className="fixed bottom-4 right-4 lg:bottom-8 lg:right-8 z-50 flex flex-col-reverse items-end gap-4"
    >
      <motion.div
        className="p-2 rounded-lg cursor-pointer flex-col-reverse flex w-fit"
        animate={{
          scale: isOpen ? 1.1 : 1,
        }}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <Languages className="dark:opacity-75" />
      </motion.div>
      {isOpen && (
        <motion.div
          className="flex flex-col p-2 rounded-lg items-end gap-1"
          initial="exit"
          animate="enter"
          exit="exit"
          variants={variants}
        >
          <Surface className="px-3 py-2">
            {routing.locales.map((targetLocale) => (
              <motion.div
                key={targetLocale}
                className={
                  currentLocale === targetLocale
                    ? "cursor-pointer hidden"
                    : "cursor-pointer"
                }
                variants={item}
                onClick={() => {
                  setIsOpen(false);
                  router.replace(path, { locale: targetLocale });
                }}
                whileHover={{
                  textDecoration: "underline",
                }}
              >
                {t(targetLocale)}
              </motion.div>
            ))}
          </Surface>
        </motion.div>
      )}
    </motion.aside>
  );
}
