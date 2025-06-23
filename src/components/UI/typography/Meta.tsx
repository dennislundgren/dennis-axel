import { TextProps } from "@/types/global";

export default function Meta({ children, className = "" }: TextProps) {
  return <span className={`${className} text-sm`}>{children}</span>;
}
