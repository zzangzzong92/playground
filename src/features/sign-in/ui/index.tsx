import { Button } from "@/components/ui/button";
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
        <Button variant="ghost">Sign In</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Sign In</DialogTitle>
          <DialogDescription>
            로그인하면 커뮤니티와 블로그 활동이 가능해집니당~
          </DialogDescription>
        </DialogHeader>
        <div className="flex-col items-center">
          <div className="w-344px h-64px rounded-30px bg-yellow border-yellow-300">
            카카오 로그인
          </div>
          <div className="w-[344px] h-[64px] rounded-[30px] bg-yellow border-yellow-300">
            구글 로그인
          </div>
        </div>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
