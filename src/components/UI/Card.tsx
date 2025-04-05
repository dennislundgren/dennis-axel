import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="transition-colors max-w-md p-4 shadow-lg rounded-lg bg-background-alt border-foreground-dim border dark:border-transparent dark:shadow-none flex flex-col gap-4">
      {children}
    </div>
  );
};

export default Card;
