import CardWrapper from "@/components/UI/Card/client";
import React from "react";

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <CardWrapper>
      <div className="transition-colors max-w-md p-4 shadow-lg rounded-lg border-foreground-dim border dark:border-transparent dark:shadow-none flex flex-col gap-4 bg-blur">
        {children}
      </div>
    </CardWrapper>
  );
}
