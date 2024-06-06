import { BodyFilter } from "./BodyFilter";
import { DemoPage } from "./table/TableBody";

export const PageBody = () => {
  return (
    <div className="flex w-[1635px] flex-col mt-[58px] ml-[250px] gap-6 bg-[#F7F7F8] ">
      <div className="flex ml-[16px] mt-[10px]">
        <p className="text-6 font-[700] text-[#121316] tracking-[-0.24px] leading-8">
          Цалингийн тооцоолол
        </p>
      </div>
      <div className="flex h-[716px] pt-[16px] pr-[16px] pb-[24px] pl-[16px] flex-col rounded-[12px] bg-[#FFF]">
        <div className="flex flex-col gap-4">
          <BodyFilter />
          <DemoPage />
        </div>
      </div>
    </div>
  );
};
