import BackgroundTouchMask from "@/components/Background/client";

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
    <div
      style={{
        WebkitMaskImage: `linear-gradient(to right, transparent, rgb(var(--background-alt-rgb)) 20%, rgb(var(--background-alt-rgb)) 80%, transparent 100%)`,
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "100% 100%",
      }}
      className="w-full h-full absolute inset-0"
    >
      {children}
    </div>
  );
}

function HorizontalMask({ children }: { children?: React.ReactNode }) {
  return (
    <div
      style={{
        WebkitMaskImage: `linear-gradient(to bottom, transparent, rgb(var(--background-alt-rgb)) 20%, rgb(var(--background-alt-rgb)) 80%, transparent 100%)`,
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "100% 100%",
      }}
      className="w-full h-full absolute inset-0"
    >
      {children}
    </div>
  );
}
