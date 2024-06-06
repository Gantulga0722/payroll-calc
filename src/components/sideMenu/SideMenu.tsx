import {
  DayoffIcon,
  EmployersIcon,
  HomePageIcon,
  JobPostIcon,
} from "../icons/Icons";

export const SideMenu = () => {
  return (
    <div className="flex h-screen py-[18px] border-r border-e-[#ECEDF0] bg-[#FFF] mt-[58px] fixed">
      <div className="flex flex-col gap-4">
        <button>
          <div className="w-[222px] h-10 flex items-center bg-[#FFF] hover:bg-[#F7F7F8]">
            <div className="py-2 px-4 justify-center items-center w-24px h-24px">
              <HomePageIcon />
            </div>
            <p className="text-4 font-[600] text-[#121316] tracking-[-0.3px] leading-5">
              Нүүр хуудас
            </p>
          </div>
        </button>
        <button>
          <div className="w-[222px] h-10 flex items-center bg-[#FFF] hover:bg-[#F7F7F8]">
            <div className="py-2 px-4 justify-center items-center w-24px h-24px">
              <EmployersIcon />
            </div>
            <p className="text-4 font-[600] text-[#121316] tracking-[-0.3px] leading-5">
              Ажилчид
            </p>
          </div>
        </button>
        <button>
          <div className="w-[222px] h-10 flex items-center bg-[#FFF] hover:bg-[#F7F7F8]">
            <div className="py-2 px-4 justify-center items-center w-24px h-24px">
              <DayoffIcon />
            </div>
            <p className="text-4 font-[600] text-[#121316] tracking-[-0.3px] leading-5">
              Чөлөө
            </p>
          </div>
        </button>
        <button>
          <div className="w-[222px] h-10 flex items-center bg-[#FFF] hover:bg-[#F7F7F8]">
            <div className="py-2 px-4 justify-center items-center w-24px h-24px">
              <JobPostIcon />
            </div>
            <p className="text-4 font-[600] text-[#121316] tracking-[-0.3px] leading-5">
              Ажлын зар
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};
