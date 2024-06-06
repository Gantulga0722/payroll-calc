import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "../icons/Icons";

export const BodyFilter = () => {
  return (
    <div className="flex justify-between items-start">
      <div className="flex gap-[10px]">
        <Select>
          <SelectTrigger className="w-[180px] bg-[#F7F7F8]">
            <SelectValue placeholder="Нэр сонгох" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px] bg-[#F7F7F8]">
            <SelectValue placeholder="Хугацаа сонгох" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex">
        <Button className="bg-[#000]">
          <div className="flex gap-2 items-center">
            <p className="text-[14px] font-[600] tracking-[-0.14px] leading-[16px] text-[#FFF]">
              Цалин бодох
            </p>
            <div className="w-5 h-5">
              <PlusIcon />
            </div>
          </div>
        </Button>
      </div>
    </div>
  );
};
