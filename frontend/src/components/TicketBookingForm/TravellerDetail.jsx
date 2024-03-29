import React, { useState } from "react";
import { countries } from "../../assets/data/Countries";

const TravellerDetail = ({ setCurrentActiveForm }) => {
  const [selectedTitle, setSelectedTitle] = useState("");

  const handleTitleClick = (title) => {
    setSelectedTitle(title);
  };

  return (
    <div className="my-5 bg-white border-[1px] border-gray-200 rounded-[30px] p-5">
      <div>
        <p className="mb-5 text-4xl">Traveller Details</p>
        <p className="mb-2">Select Title</p>
        <div className="flex gap-5">
          <div
            className={`px-5 py-2 border-[1px] cursor-pointer border-gray-200 rounded-md ${
              selectedTitle === "Mr" ? "!border-blue-500" : ""
            }`}
            onClick={() => handleTitleClick("Mr")}
          >
            <label className=" cursor-pointer">Mr</label>
          </div>
          <div
            className={`px-5 py-2 border-[1px] cursor-pointer border-gray-200 rounded-md ${
              selectedTitle === "Mrs" && "!border-blue-500"
            }`}
            onClick={() => handleTitleClick("Mrs")}
          >
            <label className=" cursor-pointer">Mrs</label>
          </div>
          <div
            className={`px-5 py-2 border-[1px] cursor-pointer border-gray-200 rounded-md ${
              selectedTitle === "Ms" && "!border-blue-500"
            }`}
            onClick={() => handleTitleClick("Ms")}
          >
            <label className=" cursor-pointer">Ms</label>
          </div>
        </div>
      </div>
      {/* Traveller Details */}
      <div className="mb-5">
        <div className="flex flex-col gap-5 md:flex-row md:gap-5 w-full py-3">
          <div className="w-full md:w-1/2">
            <label htmlFor="firstName" className="block text-sm">
              First Name
            </label>
            <input
              type="text"
              placeholder="First Name"
              id="firstName"
              className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
            />
          </div>
          <div className="w-full md:w-1/2">
            <label htmlFor="lastName" className="block text-sm">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Last Name"
              id="lastName"
              className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
            />
          </div>
        </div>
        {/* ---------------- */}
        <div className="flex flex-col gap-5 md:flex-row md:gap-5 w-full py-3">
          <div className="w-full md:w-1/2">
            <label htmlFor="dob" className="block text-sm">
              Date of birth
            </label>
            <input
              type="date"
              id="dob"
              className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
            />
          </div>
          <div className="w-full md:w-1/2">
            <label htmlFor="passportNumber" className="block text-sm">
              Passport Number
            </label>
            <input
              type="number"
              placeholder="Passport Number"
              id="passportNumber"
              className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
            />
          </div>
        </div>
        {/* ---------------- */}
        <div className="flex flex-col gap-5 md:flex-row md:gap-5 w-full py-3">
          <div className="w-full md:w-1/2">
            <label htmlFor="country" className="block text-sm">
              Country
            </label>
            <select
              id="country"
              className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
            >
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full md:w-1/2">
            <label htmlFor="stat" className="block text-sm">
              State
            </label>
            <input
              type="text"
              placeholder="State"
              id="stat"
              className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
            />
          </div>
        </div>
        {/* ---------------- */}
        <div className="flex flex-col gap-5 md:flex-row md:gap-5 w-full py-3">
          <div className="w-full md:w-1/2">
            <label htmlFor="phNumber" className="block text-sm">
              Phone Number
            </label>
            <input
              type="number"
              id="phNumber"
              placeholder="Phone Number"
              className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
            />
          </div>
          <div className="w-full md:w-1/2">
            <label htmlFor="email" className="block text-sm">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
            />
          </div>
        </div>
        <button
          className="bg-blue-300 text-white px-10 py-2 rounded-full hover:bg-blue-500 duration-300 mt-2"
          onClick={() => {
            setCurrentActiveForm(1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TravellerDetail;
