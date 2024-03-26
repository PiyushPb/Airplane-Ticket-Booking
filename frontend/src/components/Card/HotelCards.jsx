import React from "react";
import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiLocationMarker } from "react-icons/hi";

const HotelCards = (props) => {
  return (
    <div className="w-[240px] rounded-[30px] overflow-hidden border-[1px] border-gray-300 pb-5 h-full">
      <div className="relative rounded-[30px] overflow-hidden">
        <img
          src={props.data.imageUrl}
          alt=""
          className="w-full h-[280px] object-cover"
        />
        <div className="flex justify-center items-center gap-[10px] absolute top-5 right-5 bg-black/40 px-3 py-1 rounded-full">
          <p className="text-white">{props.data.rating}</p>
          <FaStar className="text-white" />
        </div>
      </div>
      <div>
        <div className="px-5">
          <h1 className="text-[18px] font-bold mt-5">{props.data.location}</h1>
          <div className="flex items-center gap-1">
            <HiLocationMarker />
            <p>{props.data.country}</p>
          </div>
          <button className="bg-black hover:bg-[#1E293B] w-full text-white px-5 py-2 mt-5 rounded-lg transition duration-100">
            Book Flight now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelCards;
