import React, { useEffect, useState } from "react";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const ReviewTicket = ({
  formData,
  setCurrentActiveForm,
  selectedSeats,
  handleFlightBooking,
}) => {
  const [clientSecretSettings, setClientSecretSettings] = useState({
    clientSecret: "",
    loading: true,
  });

  // Check if formData is empty
  if (Object.keys(formData).length === 0) {
    return <p>No passenger data available.</p>;
  }

  const [terms, setTerms] = React.useState(false);
  const [aggreed, setAgreed] = React.useState(false);

  const toggleTerms = () => {
    setTerms(!terms);
  };

  const toggleAgreed = () => {
    setAgreed(!aggreed);
  };

  return (
    <>
      <div className="my-5 bg-white border-[1px] border-gray-200 rounded-[30px] p-5">
        <p className="mb-5 text-4xl">Review Ticket</p>
        {Object.keys(formData).map((passengerId, index) => {
          const passenger = formData[passengerId];
          return (
            <div key={index} className="mt-10">
              <p className="">Passenger {index + 1} Details</p>
              <div>
                {/* Traveller Details */}

                <div className="flex flex-col gap-5 md:flex-row md:gap-5 w-full py-3">
                  <div className="w-full md:w-1/2">
                    <label
                      htmlFor={`country${index}`}
                      className="block text-sm"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id={`firstName${index}`}
                      className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
                      value={passenger.firstName}
                      disabled
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <label
                      htmlFor={`passportNumber_${index}`}
                      className="block text-sm"
                    >
                      Lastname
                    </label>
                    <input
                      type="text"
                      id={`passportNumber_${index}`}
                      placeholder="Lastname"
                      className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
                      value={passenger.lastName}
                      disabled
                    />
                  </div>
                </div>
                {/* Date of Birth and Passport Number */}
                <div className="flex flex-col gap-5 md:flex-row md:gap-5 w-full py-3">
                  <div className="w-full md:w-1/2">
                    <label htmlFor={`dob_${index}`} className="block text-sm">
                      Date of birth
                    </label>
                    <input
                      type="date"
                      id={`dob_${index}`}
                      className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
                      value={passenger.dob}
                      disabled
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <label
                      htmlFor={`passportNumber_${index}`}
                      className="block text-sm"
                    >
                      Passport Number
                    </label>
                    <input
                      type="text"
                      id={`passportNumber_${index}`}
                      placeholder="Passport Number"
                      className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
                      value={passenger.passportNumber}
                      disabled
                    />
                  </div>
                </div>
                {/* Traveller Details */}

                <div className="flex flex-col gap-5 md:flex-row md:gap-5 w-full py-3">
                  <div className="w-full md:w-1/2">
                    <label
                      htmlFor={`firstName${index}`}
                      className="block text-sm"
                    >
                      Country
                    </label>
                    <input
                      type="text"
                      id={`country${index}`}
                      className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
                      value={passenger.country}
                      disabled
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <label
                      htmlFor={`passportNumber_${index}`}
                      className="block text-sm"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      id={`passportNumber_${index}`}
                      placeholder="State"
                      className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
                      value={passenger.state}
                      disabled
                    />
                  </div>
                </div>

                {/* Phone numbner and email */}
                <div className="flex flex-col gap-5 md:flex-row md:gap-5 w-full py-3">
                  <div className="w-full md:w-1/2">
                    <label htmlFor={`dob_${index}`} className="block text-sm">
                      Phone number
                    </label>
                    <input
                      type="text"
                      id={`dob_${index}`}
                      className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
                      value={passenger.phoneNumber}
                      disabled
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <label
                      htmlFor={`passportNumber_${index}`}
                      className="block text-sm"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      id={`passportNumber_${index}`}
                      placeholder="Email"
                      className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
                      value={passenger.email}
                      disabled
                    />
                  </div>
                </div>

                {/* Image */}
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor={`passportSizePhoto_${index}`}
                    className="block text-sm"
                  >
                    Passport Size Photo
                  </label>
                  <img
                    src={passenger.passportSizePhoto} // Assuming passportSizePhoto contains the image data URL
                    alt={`Passport Size Photo of Passenger ${index + 1}`}
                    className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className=" bg-white border-[1px] border-gray-200 rounded-[30px] p-5">
        <p className="mb-5 text-4xl">Pick seat reservation</p>
        <div className="flex flex-row">
          {Object.keys(selectedSeats).map((seatType, index) => (
            <div key={index} className="flex flex-row">
              {selectedSeats[seatType].map((seatNumber, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] text-white bg-blue-400 rounded-md  cursor-pointer mr-5"
                >
                  {seatType}
                  {seatNumber}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white border-[1px] border-gray-200 rounded-[30px] p-5 mt-5">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="terms"
            className="mr-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400 focus:border-blue-400"
            onClick={toggleTerms}
          />
          <label htmlFor="terms" className="text-gray-700">
            I agree with the terms and conditions
          </label>
        </div>
        <div className="flex items-center mt-3">
          <input
            type="checkbox"
            id="agreement"
            className="mr-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400 focus:border-blue-400"
            onClick={toggleAgreed}
          />
          <label htmlFor="agreement" className="text-gray-700">
            I assure you that all the information I have provided is accurate
            and current. Additionally, I am fully aware that any inaccuracies or
            falsifications in the data provided for airplane ticket bookings may
            result in legal consequences, including potential legal actions and
            possible incarceration.
          </label>
        </div>
      </div>

      <div className="flex justify-start items-center gap-2 mt-10">
        <button
          className="border border-blue-300 text-blue-400 px-10 py-2 rounded-full hover:bg-blue-400 duration-300 hover:text-white"
          onClick={() => setCurrentActiveForm(1)}
        >
          Previous
        </button>
        <button
          className={`bg-blue-300 text-white px-10 py-2 rounded-full hover:bg-blue-500 duration-300 ${
            !aggreed || !terms ? "cursor-not-allowed" : ""
          }`}
          onClick={handleFlightBooking}
          disabled={!aggreed || !terms}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default ReviewTicket;
