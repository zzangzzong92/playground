import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const SignIn = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* <Button variant="ghost">
          <p className="text-gray-400 font-black">Sign In</p>
        </Button> */}
        <p className="text-gray-300 font-black hover:bg-gradient-to-b hover:from-[#2af598] hover:to-[#009efd] hover:bg-clip-text hover:text-transparent cursor-pointer">
          Sign In
        </p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            <p className="text-4xl">Sign In</p>
          </DialogTitle>
          <DialogDescription>
            로그인하면 커뮤니티와 블로그 활동이 가능해집니당~
          </DialogDescription>
        </DialogHeader>
        <div className="flex-col items-center justify-center mt-5">
          <div className="flex h-[44px] w-[300px] mx-auto rounded-[30px] border-0 bg-yellow-300 mb-5 items-center justify-center cursor-pointer">
            <p className=" ">카카오 로그인</p>
          </div>
          <div className="flex h-[44px] w-[300px] mx-auto rounded-[30px] border border-gray-300 mb-5 bg-white items-center justify-center cursor-pointer">
            <p>구글 로그인</p>
          </div>
          <div className="flex h-[44px] w-[300px] mx-auto rounded-[30px]  bg-black items-center justify-center cursor-pointer">
            <p className="text-white">github 로그인</p>
          </div>
        </div>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
