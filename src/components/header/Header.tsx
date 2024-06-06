import { DotMenu, Logo } from "../icons/Icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="w-screen px-[24px] py-1 flex  bg-[#000] items-center justify-between fixed">
      <div className="flex w-[1206px] h-[50px] items-center">
        <button>
          <div className="flex w-6 h-6 justify-center items-center">
            <Logo />
          </div>
        </button>
      </div>
      <div className="flex gap-4 items-center">
        <div className="w-6 h-6"></div>
        <div className="w-6 h-6"></div>
        <div className="flex h-10 justify-center gap-2 items-center">
          <div className="flex justify-center items-center">
            <button>
              <div className="p-2">
                <DotMenu />
              </div>
            </button>
          </div>
          <button>
            <div className="pl-2">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>GT</AvatarFallback>
              </Avatar>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
