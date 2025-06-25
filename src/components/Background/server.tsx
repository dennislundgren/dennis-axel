import BackgroundTouchMask from "@/components/Background/client";

/** _server component_ */
export default function Background() {
  return (
    <div className="w-full h-full absolute inset-0 z-[-1]">
      <VerticalMask>
        <HorizontalMask>
          <BackgroundTouchMask />
        </HorizontalMask>
      </VerticalMask>
    </div>
  );
}

function VerticalMask({ children }: { children?: React.ReactNode }) {
  return (
    <div className="w-full h-full absolute inset-0 vertical-mask">
      {children}
    </div>
  );
}

function HorizontalMask({ children }: { children?: React.ReactNode }) {
  return (
    <div className="w-full h-full absolute inset-0 horizontal-mask">
      {children}
    </div>
  );
}
