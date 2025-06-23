import { TextProps } from "@/types/global";

export default function H1({ children, className = "" }: TextProps) {
  return <h1 className={`${className}`}>{children}</h1>;
}
