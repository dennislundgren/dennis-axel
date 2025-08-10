import { TextProps } from "@/types/global";
import { memo } from "react";

export default memo(function Meta({ children, className = "" }: TextProps) {
  return <span className={`${className} text-sm`}>{children}</span>;
});
