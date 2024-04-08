import React, { useEffect, useState } from "react";
import Header from "../components/TicketBookingForm/Header";
import FormHeader from "../components/TicketBookingForm/FormHeader";
import TravellerDetail from "../components/TicketBookingForm/TravellerDetail";
import SeatReservation from "../components/TicketBookingForm/SeatReservation";
import ReviewTicket from "../components/TicketBookingForm/ReviewTicket";
import FareSummary from "../components/TicketBookingForm/FareSummary";
import { useParams } from "react-router-dom";

import airplaneLoader from "../assets/images/airplaneLoader.gif";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { BACKENDURL } from "../Config/Config";

const TicketBooking = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [currentActiveForm, setCurrentActiveForm] = React.useState(0);

  const [numberOfPassengers, setNumberOfPassengers] = useState(0);
  const [selectedSeats, setSelectedSeats] = useState({});
  const [formData, setFormData] = useState({});

  const [currentFlight, setCurrentFlight] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(BACKENDURL + "/api/v1/flights/getSingleFlight/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === false) {
          toast.error(data.message);
          navigate("/");
          return;
        }
        console.log(data);
        setCurrentFlight(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="px-[30px] md:px-[30px]">
      <div>
        {loading ? (
          <div className="w-full min-h-[60vh] flex justify-center items-center">
            <div className="">
              <img src={airplaneLoader} alt="" className="" />
            </div>
          </div>
        ) : (
          <div className="max-w-[1800px] mx-auto py-5 flex flex-col lg:flex-row gap-5">
            <div className="w-full lg:w-[70%]">
              <Header currentFlight={currentFlight} />
              <FormHeader currentActiveForm={currentActiveForm} />
              <div>
                {currentActiveForm === 0 ? (
                  <SeatReservation
                    setCurrentActiveForm={setCurrentActiveForm}
                    numberOfPassengers={numberOfPassengers}
                    setNumberOfPassengers={setNumberOfPassengers}
                    selectedSeats={selectedSeats}
                    setSelectedSeats={setSelectedSeats}
                    reservedSeats={currentFlight.bookedSeats}
                  />
                ) : currentActiveForm === 1 ? (
                  <TravellerDetail
                    setCurrentActiveForm={setCurrentActiveForm}
                    numberOfPassengers={numberOfPassengers}
                    formData={formData}
                    setFormData={setFormData}
                  />
                ) : currentActiveForm === 2 ? (
                  <ReviewTicket
                    setCurrentActiveForm={setCurrentActiveForm}
                    selectedSeats={selectedSeats}
                    formData={formData}
                  />
                ) : null}
              </div>
            </div>
            <div className="w-full lg:w-[30%] h-fit">
              <FareSummary />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketBooking;
