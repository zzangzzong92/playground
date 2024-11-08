import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
}

export const SectionLayout = ({ children }: SectionProps) => {
  return <div className="mx-auto w-full max-w-screen-2xl">{children}</div>;
};
