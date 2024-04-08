import React from "react";

const FareSummary = ({ price, numberOfPassengers }) => {
  return (
    <div className="w-full rounded-[30px] border border-gray-300 overflow-hidden">
      <p className="text-4xl p-5">Fare Summary</p>
      <div className="w-full border-b-[1px] border-gray-300"></div>
      <div className="p-5">
        <div className="flex flex-col gap-3">
          {/* <div className="flex justify-between">
            <p className="text-[14px] text-gray-600">
              Food, Snack and Drink 3x
            </p>
            <p className="text-[14px] text-gray-600">Rs. 3000</p>
          </div> */}
          {/* Ticket */}
          <div className="flex justify-between">
            <p className="text-[14px] text-gray-600">
              Ticket {numberOfPassengers}x
            </p>
            <p className="text-[14px] text-gray-600">
              {numberOfPassengers * price}
            </p>
          </div>
          {/* Discount */}
          <div className="flex justify-between">
            <p className="text-[14px] text-gray-600">Discount</p>
            <p className="text-[14px] text-gray-600">-</p>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-300">
        <div className="p-5">
          <div className="flex justify-between">
            <p className="text-[18px] font-semiBold text-black">Total</p>
            <p className="text-[18px] font-semiBold text-black">
              Rs. {price * numberOfPassengers}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FareSummary;
