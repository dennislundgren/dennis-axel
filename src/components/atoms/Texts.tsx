import type { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
}

export const Detail = ({ children, className = "" }: Props) => {
  return <span className={`${className} text-sm`}>{children}</span>;
};

export const Body = ({ children, className = "" }: Props) => {
  return <p className={`${className} dark:opacity-75`}>{children}</p>;
};

export const H2 = ({ children, className = "" }: Props) => {
  return <h2 className={`${className}`}>{children}</h2>;
};

export const H1 = ({ children, className = "" }: Props) => {
  return <h1 className={`${className}`}>{children}</h1>;
};
