import React from "react";

interface H2Props {
  children: React.ReactNode;
  className?: string;
}

const H2 = ({ children, className = "" }: H2Props) => {
  return <h2 className={`${className}`}>{children}</h2>;
};

export default H2;
