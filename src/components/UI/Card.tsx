"use client";
import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-sm p-4 shadow-lg rounded-lg border-foreground-dim border flex flex-col gap-4">
      {children}
    </div>
  );
};

export default Card;
