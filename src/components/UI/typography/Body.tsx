import React from "react";

interface BodyProps {
  children: React.ReactNode;
  className?: string;
}

const Body = ({ children, className = "" }: BodyProps) => {
  return <p className={`${className}`}>{children}</p>;
};

export default Body;
