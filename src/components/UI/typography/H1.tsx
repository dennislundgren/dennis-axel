import { TextProps } from "@/types/global";
import { memo } from "react";

export default memo(function H1({ children, className = "" }: TextProps) {
  return <h1 className={`${className}`}>{children}</h1>;
});
