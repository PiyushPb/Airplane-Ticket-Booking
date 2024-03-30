import React, { useState, useEffect } from "react";
import { countries } from "../../assets/data/Countries";
import PassengerDataForm from "./PassengerDataForm";

const TravellerDetail = ({ setCurrentActiveForm, numberOfPassengers }) => {
  // Initialize form data object with keys for each passenger
  const [formData, setFormData] = useState({});

  // Update form data for a specific passenger
  const handlePassengerDataChange = (passengerNumber, data) => {
    setFormData((prevData) => ({
      ...prevData,
      [`passenger${passengerNumber}`]: {
        ...prevData[`passenger${passengerNumber}`],
        ...data,
      },
    }));
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  // Render passenger forms
  const travelerForms = [];
  for (let i = 1; i <= numberOfPassengers; i++) {
    travelerForms.push(
      <div key={i}>
        <PassengerDataForm
          passengerNumber={i}
          handlePassengerDataChange={handlePassengerDataChange}
          formData={formData[`passenger${i}`] || {}} // Pass form data for this passenger
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
          onClick={() => setCurrentActiveForm(2)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TravellerDetail;
