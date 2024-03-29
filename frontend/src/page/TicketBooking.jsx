import React from "react";
import Header from "../components/TicketBookingForm/Header";
import FormHeader from "../components/TicketBookingForm/FormHeader";
import TravellerDetail from "../components/TicketBookingForm/TravellerDetail";
import SeatReservation from "../components/TicketBookingForm/SeatReservation";
import ReviewTicket from "../components/TicketBookingForm/ReviewTicket";

const TicketBooking = () => {
  const [currentActiveForm, setCurrentActiveForm] = React.useState(2);
  return (
    <div className="px-[30px] md:px-[30px]">
      <div className="max-w-[1800px] mx-auto py-5 flex flex-col justify-center items-center lg:flex-row gap-5">
        <div className="w-full lg:w-[70%]">
          <Header />
          <FormHeader currentActiveForm={currentActiveForm} />
          <div>
            {currentActiveForm === 0 ? (
              <TravellerDetail setCurrentActiveForm={setCurrentActiveForm} />
            ) : currentActiveForm === 1 ? (
              <SeatReservation setCurrentActiveForm={setCurrentActiveForm} />
            ) : (
              <ReviewTicket />
            )}
            {/* <TravellerDetail /> */}
            {/* <SeatReservation /> */}
          </div>
        </div>
        <div className="w-full lg:w-[30%] bg-blue-200 h-10"></div>
      </div>
    </div>
  );
};

export default TicketBooking;
