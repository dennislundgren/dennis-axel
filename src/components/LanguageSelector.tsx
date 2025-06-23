"use client";

import useDarkMode from "@/hooks/useDarkMode";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Languages } from "lucide-react";
import * as motion from "motion/react-client";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("LanguageSelector");
  const path = usePathname();
  const isDark = useDarkMode();

  const variants = {
    enter: {
      opacity: 1,
      y: 0,
      backgroundColor: "rgba(var(--background-alt-rgb), 1)",
      transition: { staggerChildren: 0.05, delayChildren: 0.167 },
    },
    exit: {
      opacity: 0,
      y: 100,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
  };

  const item = {
    enter: { opacity: isDark ? 0.6 : 1 },
    exit: { opacity: 0 },
  };

  return (
    <motion.aside
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        backgroundColor: "rgba(var(--background-alt-rgb), 0)",
      }}
      className="fixed bottom-4 right-4 lg:bottom-8 lg:right-8 z-50 flex flex-col-reverse items-end gap-4"
    >
      <motion.div
        className="p-2 rounded-lg bg-white cursor-pointer flex-col-reverse flex w-fit"
        animate={{
          scale: isOpen ? 1.1 : 1,
          backgroundColor: isOpen
            ? "rgba(var(--background-alt-rgb), 1)"
            : "rgba(var(--background-alt-rgb), 0)",
        }}
        whileHover={{
          scale: 1.1,
          backgroundColor: "rgba(var(--background-alt-rgb), 1)",
        }}
        whileTap={{
          scale: 0.9,
          backgroundColor: "rgba(var(--background-alt-rgb), 0)",
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
          {routing.locales.map((locale) => (
            <motion.div
              key={locale}
              className={
                path?.startsWith(`/${locale}`)
                  ? "hidden dark:opacity-75"
                  : "dark:opacity-75"
              }
              variants={item}
            >
              <Link href={`./${locale}`}>{t(locale)}</Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.aside>
  );
}
