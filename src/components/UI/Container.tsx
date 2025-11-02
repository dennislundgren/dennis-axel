import type { PropsWithChildren } from "react";

export function Container({ children }: PropsWithChildren) {
  return (
    <div className="border border-foreground p-2 rounded-lg">{children}</div>
  );
}
