import { Surface } from "@/components/atoms";
import type { PropsWithChildren } from "react";

export function Card({ children }: PropsWithChildren) {
  return (
    <Surface>
      <div className="max-w-md p-4 flex flex-col gap-4">{children}</div>
    </Surface>
  );
}
