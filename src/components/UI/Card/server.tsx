import CardWrapper from "@/components/UI/Card/client";
import Surface from "@/components/UI/Surface";
import React from "react";

/** _server component_ */
export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <CardWrapper>
      <Surface>
        <div className="max-w-md p-4 flex flex-col gap-4">{children}</div>
      </Surface>
    </CardWrapper>
  );
}
