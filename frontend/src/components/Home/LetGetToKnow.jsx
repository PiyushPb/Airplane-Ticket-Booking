import React from "react";

const LetGetToKnow = () => {
  return (
    <div className="w-full h-fit overflow-hidden rounded-[30px] bg-cover bg-center py-10 px-5 flex justify-center items-center min-h-[600px] bg-no-repeat bg-[url('https://images.unsplash.com/photo-1515916712510-8590717327d3')] bg-[#F4F4F4] relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/30"></div>
      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center px-5 py-10">
        <h1
          className="text-4xl md:text-6xl font-bold text-center
        text-white max-w-[400px] md:max-w-[700px] mb-5"
        >
          Find special prices to favorite destinations
        </h1>
        <button className="bg-white text-black mt-3 px-8 py-3 rounded-xl hover:bg-gray-300 transition duration-200 md:mt-5">
          Book now
        </button>
      </div>
    </div>
  );
};

export default LetGetToKnow;
