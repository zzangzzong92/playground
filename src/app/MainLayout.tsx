import { Header } from "@/widgets/header";
import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header isLoggedIn={true} />
      {children}
    </div>
  );
};
