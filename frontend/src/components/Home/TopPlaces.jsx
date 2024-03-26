import React from "react";
import HotelCards from "../Card/HotelCards";

const TopPlaces = () => {
  return (
    <div className="mt-5">
      <h1 className="text-3xl font-bold">Top Places</h1>
      <p className="text-sm mt-2">Our top destinations</p>

      <HotelCards />
    </div>
  );
};

export default TopPlaces;
