import React from "react";

const TestimonialCard = ({ name, role, image, text }) => {
  return (
    <div className="py-10 cursor-pointer">
      <div className="text-3xl xl:text-4xl">{text}</div>
      <div className="flex gap-2 mt-5  justify-start items-center">
        <img src={image} alt="" className="w-[50px] h-[50px] rounded-full" />
        <div className="flex flex-col">
          <p className="text-xl font-bold">{name}</p>
          <p className="text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
