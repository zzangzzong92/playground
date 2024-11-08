"use client";

import Link from "next/link";
import Logo from "@/shared/assets/images/doffylogo.svg";

import { SignIn } from "@/features/sign-in";
import { Notice } from "@/features/notice/ui";
import Image from "next/image";
import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
    <header className="mx-auto flex h-20 max-w-screen-2xl items-center justify-between">
      <div className="flex items-center gap-6">
        <Link href="/">
          <Image src={Logo} alt="logo" />
        </Link>
        <Link href="/">
          <p className="font-black text-gray-300 hover:bg-gradient-to-b hover:from-[#2af598] hover:to-[#009efd] hover:bg-clip-text hover:text-transparent">
            Documents
          </p>
        </Link>
        <Link href="/community">
          <p className="font-black text-gray-300 hover:bg-gradient-to-b hover:from-[#2af598] hover:to-[#009efd] hover:bg-clip-text hover:text-transparent">
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
          <Sheet>
            <SheetTrigger asChild>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="img"
                  className="size-10 cursor-pointer"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <div className="flex gap-3">
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="img"
                        className="size-10"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className="items-center justify-center pt-2">{"User's Nickname"}</p>
                  </div>
                </SheetTitle>
              </SheetHeader>
              <div className="mt-5 w-full border border-gray-200" />
            </SheetContent>
          </Sheet>
        </div>
      )}
    </header>
  );
};
