import type { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
}

export function Surface({ className, children }: Props) {
  return (
    <div
      className={`transition shadow-md rounded-lg border-foreground-dim border dark:border-transparent dark:shadow-none bg-blur ${className}`}
    >
      {children}
    </div>
  );
}
