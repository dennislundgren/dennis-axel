"use client";

import * as motion from "motion/react-client";
import React from "react";

/** _client component_ */
export default function CardWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
    >
      {children}
    </motion.div>
  );
}
