import React from "react";
import BookTicketBox from "../components/BookTicketBox";
import SearchedFlightCards from "../components/Card/SearchedFlightCards";

const TicketSearchPage = () => {
  return (
    <div className="px-[30px] md:px-[30px] max-w-[1400px] mx-auto">
      <BookTicketBox />
      <p className="py-5">
        <b>7 Flights</b> found for <b>Delhi</b> to <b>Mumbai</b>
      </p>
      <div className="flex justify-center items-center gap-5 flex-wrap w-full">
        <SearchedFlightCards />
        <SearchedFlightCards />
        <SearchedFlightCards />
        <SearchedFlightCards />
        <SearchedFlightCards />
      </div>
    </div>
  );
};

export default TicketSearchPage;
