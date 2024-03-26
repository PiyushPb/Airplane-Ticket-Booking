import React from "react";

const HeroSectionCard = (props) => {
  return (
    <div className="cursor-pointer">
      <img
        src={props.src}
        alt="..."
        className="w-full h-full object-cover absolute"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 p-5 "></div>
      <div className="absolute bottom-[50px] md:top-[100px] left-[20px] md:left-[50px]">
        <h1 className="text-[30px] md:text-[70px] font-bold leading-tight max-w-[300px] md:max-w-[800px] text-white">
          {props.heading}
        </h1>
        <p className="text-white mt-2 md:mt-2 text-[14px] md:text-lg font-light">
          {props.subheading}
        </p>
        <button className="bg-white text-black mt-3 px-8 py-3 rounded-xl hover:bg-gray-300 transition duration-200 md:mt-5">
          Book now
        </button>
      </div>
    </div>
  );
};

export default HeroSectionCard;
