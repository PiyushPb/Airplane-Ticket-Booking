import React, { useEffect, useRef, useState } from "react";
import AirplaneHead from "../../assets/images/airplaneHead.png";

const SeatReservation = ({ setCurrentActiveForm }) => {
  const seats = {
    A: [1, 2, 3, 4, 5, 6, 7, 8],
    B: [1, 2, 3, 4, 5, 6, 7, 8],
    C: [1, 2, 3, 4, 5, 6, 7, 8],
    D: [1, 2, 3, 4, 5, 6, 7, 8],
  };

  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  const imageRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateContainerSize = () => {
      if (containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        setContainerSize({ width: clientWidth, height: clientHeight });
      }
    };

    updateContainerSize();
    window.addEventListener("resize", updateContainerSize);

    return () => {
      window.removeEventListener("resize", updateContainerSize);
    };
  }, []);

  useEffect(() => {
    if (imageRef.current) {
      const { width, height } = containerSize;
      if (width && height) {
        if (width >= 768) {
          imageRef.current.style.width = `${width}px`;
          imageRef.current.style.height = "auto";
        } else {
          imageRef.current.style.width = "auto";
          imageRef.current.style.height = `${height}px`;
        }
      }
    }
  }, [containerSize]);

  const renderSeats = (row) => {
    return seats[row].map((seat) => (
      <div
        key={seat}
        className="flex justify-center items-center w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] bg-white rounded-md"
      >
        <p className="text-black text-[15px]">
          {row}
          {seat}
        </p>
      </div>
    ));
  };

  return (
    <div className="my-5 bg-white border-[1px] border-gray-200 rounded-[30px] p-5">
      <p className="mb-5 text-4xl">Seat Reservation</p>
      <div className="flex flex-col-reverse md:flex-row mt-5">
        <div
          ref={containerRef}
          className="flex flex-row md:flex-col gap-5 w-fit h-fit p-5 bg-[#f3f5f8] rounded-b-[15px] md:rounded-s-[15px] md:w-auto"
        >
          {Object.keys(seats).map((row) => (
            <div key={row} className="flex flex-col md:flex-row gap-1">
              {renderSeats(row)}
            </div>
          ))}
        </div>

        <div className="w-full hidden md:block">
          <img
            ref={imageRef}
            src={AirplaneHead}
            alt=""
            className="h-full rotate-[270deg] md:rotate-0 md:h-full"
          />
        </div>
      </div>
      <div className="flex justify-start items-center gap-2 mt-10">
        <button
          className="border border-blue-300 text-blue-400 px-10 py-2 rounded-full hover:bg-blue-400 duration-300 hover:text-white"
          onClick={() => setCurrentActiveForm(0)}
        >
          Previous
        </button>
        <button
          className="bg-blue-300 text-white px-10 py-2 rounded-full hover:bg-blue-500 duration-300"
          onClick={() => setCurrentActiveForm(2)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SeatReservation;
