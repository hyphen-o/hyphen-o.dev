import type React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return <div className="flex flex-col items-center">{children}</div>;
};
