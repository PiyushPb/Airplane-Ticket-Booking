import React from "react";

import { MdOutlineAirplaneTicket } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";

const TicketContainer = () => {
  return (
    <div className="flex flex-col md:flex-row mt-5">
      <div className="w-[100%] md:w-[60%] flex flex-col justify-between items-center bg-white overflow-hidden rounded-[20px]">
        {/* Ticket header */}
        <div className="flex justify-start items-center gap-3 bg-gray-100 py-3 px-5 rounded-t-[20px] w-full">
          <img
            src="https://phshirt.com/wp-content/uploads/2022/11/Air-Asia-Logo.png"
            alt="AirAsia"
            className="w-[80px] h-[40px] object-contain object-center"
          />
          <p className="text-[18px] font-semibold">Air Asia Airlines</p>
        </div>
        {/* Ticket body */}
        <div className="p-10 flex-1 rounded-b-[20px] flex  flex-col justify-center">
          <div className="p-0">
            <div className="flex max-w-[800px] w-full m-auto justify-between items-center relative z-10">
              <div className="text-center">
                <p className="text-[18px] font-semibold">Mumbai</p>
                <p className="text-[12px]">Depart</p>
                <p className="text-[18px] font-semibold">20:15</p>
                <p className="text-[14px] text-gray-600">4 October 2023</p>
              </div>
              <div className="flex items-center my-5 lg:my-0">
                <div className="w-[15px] h-[15px] rounded-full bg-blue-300"></div>
                <div className="w-[15px] h-[1px] border-[1px] border-blue-400 border-dashed lg:w-[30px]"></div>
                <div className="text-[12px] px-2 py-1 text-blue-500 bg-blue-200 rounded-full lg:text-[14px] lg:px-3 text-center">
                  12h 40m
                </div>
                <div className="w-[15px] h-[1px] border-[1px] border-blue-400 border-dashed lg:w-[30px]"></div>
                <div className="w-[15px] h-[15px] rounded-full bg-blue-300"></div>
              </div>
              <div className="text-center">
                <p className="text-[18px] font-semibold">Delhi</p>
                <p className="text-[12px]">Arrival</p>
                <p className="text-[18px] font-semibold">12:15</p>
                <p className="text-[14px] text-gray-600">5 October 2023</p>
              </div>
            </div>
          </div>
          {/* Instructions */}
          <div className="mt-5 flex flex-col gap-2 md:flex-row">
            <div className="w-full bg-gray-100 p-2 rounded-[15px] flex gap-2 justify-start items-center">
              <MdOutlineAirplaneTicket
                size={20}
                className="mx-2 text-gray-700"
              />
              <p className="text-[10px] text-gray-700">
                Show e-ticket and passenger identity during check-in
              </p>
            </div>
            <div className="w-full bg-gray-100 p-2 rounded-[15px] flex gap-2 justify-start items-center">
              <CiClock2 size={20} className="mx-2 text-gray-700" />
              <p className="text-[10px] text-gray-700">
                Please be at the boarding gate at least 15 minutes before the
                boarding time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Ticker cut here line */}
      <div className="border-t-[2px] md:border-l-[2px] border-black border-dashed my-0 mx-[20px] md:mx-0 md:my-[20px]"></div>

      {/* Ticket footer */}
      <div className="w-[100%] md:w-[40%] bg-white rounded-[20px]">
        <div className="p-5 w-full bg-gray-100 rounded-t-[20px] flex justify-end items-center">
          <p className="text-blue-500">Economy class</p>
        </div>
        {/* passenger details */}
        <div className="p-5 w-full">
          <div className="flex flex-col md:flex-row gap-3 justify-between w-full">
            {/* Name */}
            <div>
              <p className="text-[14px] font-semibold max-w-[150px]">Name</p>
              <p className="text-[14px]">Abhishek Singh</p>
            </div>
            {/* Name */}
            <div>
              <p className="text-[14px] font-semibold max-w-[150px]">Email</p>
              <p className="text-[14px]">qJvU0@example.com</p>
            </div>
          </div>
          <div className="flex gap-3 flex-col md:flex-row justify-between w-full mt-3">
            {/* Passport number */}
            <div>
              <p className="text-[14px] font-semibold max-w-[150px]">
                Passport Number
              </p>
              <p className="text-[14px]">14243435354</p>
            </div>
            {/* Name */}
            <div>
              <p className="text-[14px] font-semibold max-w-[150px]">
                Airline Booking Code
              </p>
              <p className="text-[14px]">XdaU83</p>
            </div>
          </div>
          {/* seat and qr */}
          <div className="flex gap-3 justify-between w-full mt-3">
            <div className="w-full bg-gray-100 rounded-[15px] p-3 flex flex-col justify-center items-center">
              <p className="text-[18px] font-semibold text-center">Seat</p>
              <p className="text-[22px] font-bold text-center">C3</p>
            </div>
            <div className="w-full bg-gray-100 rounded-[15px] p-3 flex justify-center items-center">
              <img
                src="https://quickchart.io/qr?text=http://localhost:5173/ticket"
                alt=""
                className="w-[100px] h-[100px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketContainer;
