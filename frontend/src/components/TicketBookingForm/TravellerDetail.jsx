import React, { useState, useEffect } from "react";
import { countries } from "../../assets/data/Countries";
import PassengerDataForm from "./PassengerDataForm";
import { toast } from "react-toastify";

const TravellerDetail = ({
  setCurrentActiveForm,
  numberOfPassengers,
  formData,
  setFormData,
}) => {
  const handlePassengerDataChange = (passengerNumber, data) => {
    setFormData((prevData) => ({
      ...prevData,
      [`passenger${passengerNumber}`]: {
        ...prevData[`passenger${passengerNumber}`],
        ...data,
      },
    }));
  };

  const requiredFields = {
    firstName: "First Name",
    lastName: "Last Name",
    country: "Country",
    state: "State",
    phoneNumber: "Phone Number",
    email: "Email",
    dob: "Date of Birth",
    passportNumber: "Passport Number",
    passportSizePhoto: "Passport Size Photo",
  };

  const validatePassengerData = (formData) => {
    let isValid = true;

    for (let i = 1; i <= numberOfPassengers; i++) {
      const passengerKey = `passenger${i}`;
      const passengerData = formData[passengerKey];
      if (!passengerData) {
        toast.error(`Passenger ${i} data is missing`);
        isValid = false;
        continue;
      }
      for (const [field, displayName] of Object.entries(requiredFields)) {
        if (!passengerData[field] || passengerData[field].trim() === "") {
          toast.error(`Please enter passenger ${i} ${displayName}`);
          isValid = false;
          break;
        }
      }
    }

    if (Object.keys(formData).length === 0) {
      toast.error("Fields cannot be kept empty, please fill all fields");
      isValid = false;
    }

    if (isValid) {
      setCurrentActiveForm(2);
    }
  };

  const travelerForms = [];
  for (let i = 1; i <= numberOfPassengers; i++) {
    travelerForms.push(
      <div key={i}>
        <PassengerDataForm
          passengerNumber={i}
          handlePassengerDataChange={handlePassengerDataChange}
          formData={formData[`passenger${i}`] || {}}
        />
      </div>
    );
  }

  return (
    <div>
      {travelerForms}
      <div className="flex justify-start items-center gap-2 mt-10">
        <button
          className="border border-blue-300 text-blue-400 px-10 py-2 rounded-full hover:bg-blue-400 duration-300 hover:text-white"
          onClick={() => setCurrentActiveForm(0)}
        >
          Previous
        </button>
        <button
          className="bg-blue-300 text-white px-10 py-2 rounded-full hover:bg-blue-500 duration-300"
          onClick={
            (() => validatePassengerData(formData))
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TravellerDetail;
