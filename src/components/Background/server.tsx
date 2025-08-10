import BackgroundTouchMask from "@/components/Background/client";
import { memo } from "react";

interface Props {
  children?: React.ReactNode;
}

function VerticalMask({ children }: Props) {
  return (
    <div className="w-full h-full absolute inset-0 vertical-mask">
      {children}
    </div>
  );
}

function HorizontalMask({ children }: Props) {
  return (
    <div className="w-full h-full absolute inset-0 horizontal-mask">
      {children}
    </div>
  );
}

export default memo(function Background() {
  return (
    <div className="w-full h-full absolute inset-0 z-[-1]">
      <VerticalMask>
        <HorizontalMask>
          <BackgroundTouchMask />
        </HorizontalMask>
      </VerticalMask>
    </div>
  );
});
