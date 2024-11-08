import Noti from "@/shared/assets/images/notification.svg";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import Image from "next/image";

interface NoficeProps {
  contents: string[];
}

export const Notice = ({ contents }: NoficeProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild className="h-5  w-6 cursor-pointer">
        <Image src={Noti} alt="notification" />
      </PopoverTrigger>
      <PopoverContent>
        <div className="w-80 grid gap-4 bg-white rounded-[4px] border border-gray-300">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">알림</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          {/* {여기에 알림 내용들이 map} */}
          {contents.length > 0 ? (
            <div>
              <p>아직 알림이 없습니다</p>
            </div>
          ) : (
            contents.map((content: string, id) => <div key={id}>{content}</div>)
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};
