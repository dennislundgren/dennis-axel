import * as motion from "motion/react-client";
import React from "react";

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 1,
        },
      }}
      className="transition-colors max-w-md p-4 shadow-lg rounded-lg bg-[rgb(var(--background-alt-rgb))] border-foreground-dim border dark:border-transparent dark:shadow-none flex flex-col gap-4"
    >
      {children}
    </motion.div>
  );
}
