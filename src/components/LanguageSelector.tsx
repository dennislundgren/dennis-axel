"use client";
import { Link } from "@/i18n/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Languages } from "lucide-react";
import { useState } from "react";

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    enter: {
      opacity: 1,
      y: 0,
      backgroundColor: "rgba(var(--highlight-rgb), 1)",
      transition: { staggerChildren: 0.167, delayChildren: 0.167 },
    },
    exit: {
      opacity: 0,
      y: 100,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
  };

  const item = {
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <motion.aside className="fixed bottom-4 right-4 lg:bottom-8 lg:right-8 z-50 flex flex-col-reverse items-end gap-4">
      <motion.div
        className="p-2 rounded-lg bg-white cursor-pointer flex-col-reverse flex w-fit"
        animate={{
          scale: isOpen ? 1.1 : 1,
          backgroundColor: isOpen
            ? "rgba(var(--highlight-rgb), 1)"
            : "rgba(var(--highlight-rgb), 0)",
        }}
        whileHover={{
          scale: 1.1,
          backgroundColor: "rgba(var(--highlight-rgb), 1)",
        }}
        whileTap={{
          scale: 0.9,
          backgroundColor: "rgba(var(--highlight-rgb), 0)",
        }}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <Languages />
      </motion.div>
      {isOpen && (
        <AnimatePresence>
          <motion.div
            className="flex flex-col p-2 rounded-lg items-end gap-1"
            initial="exit"
            animate="enter"
            exit="exit"
            variants={variants}
          >
            <motion.div variants={item}>
              <Link className="hover:underline" href="./en-GB">
                English
              </Link>
            </motion.div>
            <motion.div variants={item}>
              <Link className="hover:underline" href="./sv-SE">
                Svenska
              </Link>
            </motion.div>
            <motion.div variants={item}>
              <Link className="hover:underline" href="./fi-FI">
                Suomi
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </motion.aside>
  );
}
