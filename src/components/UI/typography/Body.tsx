import React from "react";

interface BodyProps {
  children: React.ReactNode;
  className?: string;
}

const Body = ({ children, className = "" }: BodyProps) => {
  return <p className={`${className} dark:opacity-[60%]`}>{children}</p>;
};

export default Body;
