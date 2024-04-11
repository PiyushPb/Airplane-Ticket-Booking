import React from "react";

import { GoPaperAirplane } from "react-icons/go";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlinePeople } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";

const ValuesWeProvide = () => {
  return (
    <div className="py-[50px] max-w-[1400px] mx-auto">
      <div>
        <h1 className="text-[35px] md:text-[50px] text-center font-bold">
          Top values for you
        </h1>
        <p className="text-center">
          Try variety of benefits using our services
        </p>
      </div>
      <div className="flex justify-center md:justify-between items-center gap-5 mt-5 flex-wrap">
        <div className="flex justify-center items-center flex-col max-w-[200px]">
          <div className="w-[50px] h-[50px] bg-gray-200 rounded-full text-2xl text-gray-500 flex justify-center items-center">
            <GoPaperAirplane className="rotate-[-35deg] text-black" />
          </div>
          <h1 className="text-xl font-bold mt-2">Airport pickup</h1>
          <p className="text-sm text-center mt-1">
            We provide escort from the airport to the hotel
          </p>
        </div>
        {/* ------------------------------- */}
        <div className="flex justify-center items-center flex-col max-w-[200px]">
          <div className="w-[50px] h-[50px] bg-gray-200 rounded-full text-2xl text-gray-500 flex justify-center items-center">
            <IoWalletOutline className=" text-black" />
          </div>
          <h1 className="text-xl font-bold mt-2">Easy payment</h1>
          <p className="text-sm text-center mt-1">
            Quick and easy booking of flights for upcoming dates
          </p>
        </div>
        {/* ------------------------------- */}
        <div className="flex justify-center items-center flex-col max-w-[200px]">
          <div className="w-[50px] h-[50px] bg-gray-200 rounded-full text-2xl text-gray-500 flex justify-center items-center">
            <MdOutlinePeople className="text-black" />
          </div>
          <h1 className="text-xl font-bold mt-2">Best tour guide</h1>
          <p className="text-sm text-center mt-1">
            Best tour guide is ready to guide your trip
          </p>
        </div>
        {/* ------------------------------- */}
        <div className="flex justify-center items-center flex-col max-w-[200px]">
          <div className="w-[50px] h-[50px] bg-gray-200 rounded-full text-2xl text-gray-500 flex justify-center items-center">
            <CiDiscount1 className="text-black" />
          </div>
          <h1 className="text-xl font-bold mt-2">Lots of promos</h1>
          <p className="text-sm text-center mt-1">
            Various promotions and drawing of discount
          </p>
        </div>
      </div>
    </div>
  );
};

export default ValuesWeProvide;
