import Link from "next/link";
import Noti from "@/shared/assets/images/notification.svg";

interface HeaderProps {
  isLoggedIn: boolean;
  userInfo?: string;
  onSignOut?: () => void;
  onSignIn?: () => void;
}

export const Header = ({ isLoggedIn }: HeaderProps) => {
  return (
    <header className="w-full h-[6v] sticky items-center bg-white dark:bg-gray-800 drop-shadow-md">
      <div className="w-4/5 flex sticky justify-between mx-auto mt-[20px]">
        {/* 헤더 왼측에는 로고, 공식문서, 커뮤니티 */}
        <div className="flex items-center">
          <Link href="/" target="_blank">
            <img src={""} alt="logo" className="mr-[8px]" />
          </Link>
          <Link href="/" target="_blank">
            <span className="text-base font-bold text-lg ml-4 hover:text-blue-500">
              공식문서
            </span>
          </Link>
          <Link href="/community" target="_blank">
            <span className="text-base font-bold text-lg ml-4 hover:text-blue-500">
              커뮤니티
            </span>
          </Link>
        </div>

        {/* 헤더 오른쪽에는 알림버튼, 다크모드 토글, 로그인, 회원가입 */}
        <div className="flex items-center space-x-4">
          {/* <button
            className="w-20 h-10 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow"
            onclick="toggleTheme()"
          >
            <div
              id="switch-toggle"
              className="w-12 h-12 relative rounded-full transition duration-500 transform bg-yellow-500 -translate-x-2 p-1 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
                <Link href="/">
                  <img
                    src="profile.png"
                    alt="profile"
                    className="w-20 h-20 rounded-full hover: scale-50"
                  />
                </Link>
              </svg>
            </div>
          </button> */}

          {!isLoggedIn ? (
            <>
              <Link href="/signin" target="_blank">
                <span className="px-4 py-2 hover:text-blue-500 font-bold text-lg">
                  로그인
                </span>
              </Link>
              <Link href="/signup/step1" target="_blank">
                <span className="px-4 py-2 hover:text-blue-500 font-bold text-lg">
                  회원가입
                </span>
              </Link>
            </>
          ) : (
            <>
              <button className="mr-6">
                <img src={Noti.src} alt="noti" />
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};