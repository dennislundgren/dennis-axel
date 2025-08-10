import Surface from "@/components/UI/Surface";
import { memo } from "react";

interface Props {
  children: React.ReactNode;
}

export default memo(function Card({ children }: Props) {
  return (
    <Surface>
      <div className="max-w-md p-4 flex flex-col gap-4">{children}</div>
    </Surface>
  );
});
