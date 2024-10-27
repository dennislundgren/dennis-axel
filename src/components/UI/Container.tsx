import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border border-foreground p-2 rounded-lg">{children}</div>
  );
};

export default Container;
