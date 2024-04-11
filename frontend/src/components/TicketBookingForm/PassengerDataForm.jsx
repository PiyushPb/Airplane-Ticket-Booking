// PassengerDataForm.js
import React, { useEffect } from "react";
import { countries } from "../../assets/data/Countries";

const PassengerDataForm = ({
  passengerNumber,
  handlePassengerDataChange,
  formData,
}) => {
  const handleChange = (e, field) => {
    if (e.target.type === "file") {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const fileData = event.target.result;
          handlePassengerDataChange(passengerNumber, { [field]: fileData });
        };
        reader.readAsDataURL(file);
      }
    } else {
      const { value } = e.target;
      handlePassengerDataChange(passengerNumber, { [field]: value });
    }
  };

  return (
    <div className="my-5 bg-white border-[1px] border-gray-200 rounded-[30px] p-5">
      <div>
        <p className="mb-5 text-4xl">
          Traveller Details - Passenger {passengerNumber}
        </p>
      </div>
      {/* Traveller Details */}
      <div className="mb-5">
        <div className="flex flex-col gap-5 md:flex-row md:gap-5 w-full py-3">
          <div className="w-full md:w-1/2">
            <label
              htmlFor={`firstName-${passengerNumber}`}
              className="block text-sm"
            >
              First Name
            </label>
            <input
              type="text"
              placeholder="First Name"
              id={`firstName-${passengerNumber}`}
              value={formData.firstName}
              className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
              onChange={(e) => handleChange(e, "firstName")}
            />
          </div>
          <div className="w-full md:w-1/2">
            <label
              htmlFor={`lastName-${passengerNumber}`}
              className="block text-sm"
            >
              Last Name
            </label>
            <input
              type="text"
              placeholder="Last Name"
              id={`lastName-${passengerNumber}`}
              value={formData.lastName}
              className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
              onChange={(e) => handleChange(e, "lastName")}
            />
          </div>
        </div>
        {/* Date of Birth and Passport Number */}
        <div className="flex flex-col gap-5 md:flex-row md:gap-5 w-full py-3">
          <div className="w-full md:w-1/2">
            <label htmlFor={`dob-${passengerNumber}`} className="block text-sm">
              Date of birth
            </label>
            <input
              type="date"
              id={`dob-${passengerNumber}`}
              value={formData.dob}
              className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
              onChange={(e) => handleChange(e, "dob")}
            />
          </div>
          <div className="w-full md:w-1/2">
            <label
              htmlFor={`passportNumber-${passengerNumber}`}
              className="block text-sm"
            >
              Passport Number
            </label>
            <input
              type="number"
              placeholder="Passport Number"
              id={`passportNumber-${passengerNumber}`}
              value={formData.passportNumber}
              className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
              onChange={(e) => handleChange(e, "passportNumber")}
            />
          </div>
        </div>
        {/* Country and State */}
        <div className="flex flex-col gap-5 md:flex-row md:gap-5 w-full py-3">
          <div className="w-full md:w-1/2">
            <label
              htmlFor={`country-${passengerNumber}`}
              className="block text-sm"
            >
              Country
            </label>
            <select
              id={`country-${passengerNumber}`}
              className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
              onChange={(e) => handleChange(e, "country")}
              value={formData.country}
            >
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full md:w-1/2">
            <label
              htmlFor={`stat-${passengerNumber}`}
              className="block text-sm"
            >
              State
            </label>
            <input
              type="text"
              placeholder="State"
              id={`stat-${passengerNumber}`}
              value={formData.state}
              className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
              onChange={(e) => handleChange(e, "state")}
            />
          </div>
        </div>
        {/* Phone Number and Email */}
        <div className="flex flex-col gap-5 md:flex-row md:gap-5 w-full py-3">
          <div className="w-full md:w-1/2">
            <label
              htmlFor={`phNumber-${passengerNumber}`}
              className="block text-sm"
            >
              Phone Number
            </label>
            <input
              type="number"
              id={`phNumber-${passengerNumber}`}
              value={formData.phoneNumber}
              placeholder="Phone Number"
              className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
              onChange={(e) => handleChange(e, "phoneNumber")}
            />
          </div>
          <div className="w-full md:w-1/2">
            <label
              htmlFor={`email-${passengerNumber}`}
              className="block text-sm"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              id={`email-${passengerNumber}`}
              value={formData.email}
              className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
              onChange={(e) => handleChange(e, "email")}
            />
          </div>
        </div>
        {/* PASSPORT SIZE PHOTO */}
        <div className="flex flex-col gap-5 md:flex-row md:gap-5 w-full py-3">
          <div className="w-full md:w-1/2">
            <label
              htmlFor={`passportSizePhoto-${passengerNumber}`}
              className="block text-sm"
            >
              Passport Size Photo
            </label>
            <input
              type="file"
              id={`passportSizePhoto-${passengerNumber}`}
              className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
              onChange={(e) => handleChange(e, "passportSizePhoto")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassengerDataForm;
