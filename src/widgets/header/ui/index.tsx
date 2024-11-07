"use client";

import Link from "next/link";
import Logo from "@/shared/assets/images/doffylogo.svg";

import { SignIn } from "@/features/sign-in";
import { Notice } from "@/features/notice/ui";
import Image from "next/image";
import { useState } from "react";

interface HeaderProps {
  isLoggedIn: boolean;
  userInfo?: string;
  onSignOut?: () => void;
  onSignIn?: () => void;
}

type MenyType = "Docs" | "Community";

export const Header = ({ isLoggedIn }: HeaderProps) => {
  const [menuType, setMenuType] = useState<MenyType>("Docs");
  return (
    <header className="flex h-20 max-w-screen-2xl mx-auto justify-between items-center">
      <div className="flex items-center gap-6">
        <Link href="/">
          <Image src={Logo} alt="logo" />
        </Link>
        <Link href="/">
          <p className="text-gray-300 font-black hover:bg-gradient-to-b hover:from-[#2af598] hover:to-[#009efd] hover:bg-clip-text hover:text-transparent">
            Documents
          </p>
        </Link>
        <Link href="/community">
          <p className="text-gray-300 font-black hover:bg-gradient-to-b hover:from-[#2af598] hover:to-[#009efd] hover:bg-clip-text hover:text-transparent">
            Community
          </p>
        </Link>
      </div>
      {!isLoggedIn ? (
        <>
          <SignIn />
        </>
      ) : (
        <div className="flex items-center gap-8">
          <Notice contents={[""]} />
        </div>
      )}
    </header>
  );
};
