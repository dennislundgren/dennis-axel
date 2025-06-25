import { TextProps } from "@/types/global";

/** _server component_ */
export default function Body({ children, className = "" }: TextProps) {
  return <p className={`${className} dark:opacity-75`}>{children}</p>;
}
