import { TextProps } from "@/types/global";
import { memo } from "react";

export default memo(function H2({ children, className = "" }: TextProps) {
  return <h2 className={`${className}`}>{children}</h2>;
});
