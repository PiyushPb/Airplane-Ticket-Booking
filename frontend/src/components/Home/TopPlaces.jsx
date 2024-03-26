import React from "react";
import HotelCards from "../Card/HotelCards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { flightLocationData } from "../../assets/data/FlightData";

const TopPlaces = () => {
  return (
    <div className="mt-5">
      <div>
        <h1 className="text-[35px] md:text-[50px] font-bold">
          Choose your tour!
        </h1>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 70,
          },
        }}
      >
        {flightLocationData.map((data, index) => (
          <SwiperSlide
            className="w-full flex justify-center items-center"
            key={index}
          >
            <HotelCards data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopPlaces;
