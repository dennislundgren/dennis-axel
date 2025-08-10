import { TextProps } from "@/types/global";

export const Meta = ({ children, className = "" }: TextProps) => {
  return <span className={`${className} text-sm`}>{children}</span>;
};

export const Body = ({ children, className = "" }: TextProps) => {
  return <p className={`${className} dark:opacity-75`}>{children}</p>;
};

export const H2 = ({ children, className = "" }: TextProps) => {
  return <h2 className={`${className}`}>{children}</h2>;
};

export const H1 = ({ children, className = "" }: TextProps) => {
  return <h1 className={`${className}`}>{children}</h1>;
};
