import { Surface } from "@/components/atoms/Surface";
import type { PropsWithChildren } from "react";

export function SmallCard({ children }: PropsWithChildren) {
  return (
    <Surface>
      <div className="max-w-md px-2 py-1 flex flex-col gap-4">{children}</div>
    </Surface>
  );
}
