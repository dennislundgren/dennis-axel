import { PropsWithChildren } from "react";

export function PageWrapper({ children }: PropsWithChildren) {
  return (
    <main className="flex min-h-full-dynamic flex-col items-center justify-center p-4 lg:p-24 gap-8">
      {children}
    </main>
  );
}
