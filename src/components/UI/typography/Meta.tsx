import { TextProps } from "@/types/global";

/** _server component_ */
export default function Meta({ children, className = "" }: TextProps) {
  return <span className={`${className} text-sm`}>{children}</span>;
}
