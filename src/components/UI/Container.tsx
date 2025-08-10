import React, { memo } from "react";

interface Props {
  children: React.ReactNode;
}

export default memo(function Container({ children }: Props) {
  return (
    <div className="border border-foreground p-2 rounded-lg">{children}</div>
  );
});
