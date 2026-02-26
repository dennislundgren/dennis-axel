import { BackgroundTouchMask } from "@/components/templates/Background/client";
import type { PropsWithChildren } from "react";

function VerticalMask({ children }: PropsWithChildren) {
  return (
    <div className="w-full h-full absolute inset-0 vertical-mask">
      {children}
    </div>
  );
}

function HorizontalMask({ children }: PropsWithChildren) {
  return (
    <div className="w-full h-full absolute inset-0 horizontal-mask">
      {children}
    </div>
  );
}

export function Background() {
  return (
    <div className="w-full h-full absolute inset-0 z-[-1] bg-zinc-50 dark:bg-zinc-950">
      <VerticalMask>
        <HorizontalMask>
          <BackgroundTouchMask />
        </HorizontalMask>
      </VerticalMask>
    </div>
  );
}
