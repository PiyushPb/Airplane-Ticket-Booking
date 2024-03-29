import React from "react";

const Header = () => {
  return (
    <div className="overflow-hidden rounded-[30px] border-[1px]">
      <div className="w-full h-fit bg-[#e1e7ee] p-5 flex justify-between items-center">
        <div className="flex justify-start items-center gap-3">
          <div className="w-[60px]">
            <img
              src="https://phshirt.com/wp-content/uploads/2022/11/Air-Asia-Logo.png"
              alt="..."
            />
          </div>
          <p className="text-[18px] font-semibold">Air Asia Airlines</p>
        </div>
        <div>
          <p className="text-[14px]">Economy class</p>
        </div>
      </div>
      <div className="p-5">
        <div className="flex max-w-[800px] w-full m-auto justify-between items-center relative z-10">
          <div className="text-center">
            <p className="text-[12px]">Depart</p>
            <p className="text-[18px] font-semibold mt-2">20:15</p>
            <p className="text-[14px] text-gray-600">4 October 2023</p>
          </div>
          <div className="flex items-center my-5 lg:my-0">
            <div className="w-[15px] h-[15px] rounded-full bg-blue-300"></div>
            <div className="w-[15px] h-[1px] border-[1px] border-blue-400 border-dashed lg:w-[30px]"></div>
            <div className="text-[12px] px-2 py-1 text-blue-500 bg-blue-200 rounded-full lg:text-[14px] lg:px-3">
              12h 50m
            </div>
            <div className="w-[15px] h-[1px] border-[1px] border-blue-400 border-dashed lg:w-[30px]"></div>
            <div className="w-[15px] h-[15px] rounded-full bg-blue-300"></div>
          </div>
          <div className="text-center">
            <p className="text-[12px]">Arrive</p>
            <p className="text-[18px] font-semibold mt-2">12:25</p>
            <p className="text-[14px] text-gray-600">5 October 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
