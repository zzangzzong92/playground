import Link from "next/link";
import Noti from "@/shared/assets/images/notification.svg";
import { SignIn } from "@/features/sign-in";

interface HeaderProps {
  isLoggedIn: boolean;
  userInfo?: string;
  onSignOut?: () => void;
  onSignIn?: () => void;
}

export const Header = ({ isLoggedIn }: HeaderProps) => {
  return (
    <header className="w-full h-20 bg-red-500">
      <SignIn />
    </header>
  );
};
