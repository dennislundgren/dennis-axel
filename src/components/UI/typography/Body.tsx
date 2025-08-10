import { TextProps } from "@/types/global";
import { memo } from "react";

export default memo(function Body({ children, className = "" }: TextProps) {
  return <p className={`${className} dark:opacity-75`}>{children}</p>;
});
