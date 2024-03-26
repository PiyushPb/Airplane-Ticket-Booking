import React from "react";
import { RiStarSFill } from "react-icons/ri";

const HotelCards = () => {
  return (
    <div className=" max-w-[350px] rounded-t-[30px] overflow-hidden bg-white shadow-md">
      <img
        src="https://images.unsplash.com/photo-1571896349842-33c89424de2d"
        alt=""
        className="w-full h-[200px] object-cover"
      />
      <div>
        <h1 className="text-xl font-bold mt-3">Himalaya</h1>
        <div className="flex items-center gap-1">
          <RiStarSFill className="text-yellow-500" size={30} />
          <p className="text-sm">4.5</p>
        </div>
      </div>
    </div>
  );
};

export default HotelCards;
