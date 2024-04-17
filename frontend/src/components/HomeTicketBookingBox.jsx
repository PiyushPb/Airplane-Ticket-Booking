import React from "react";
import { useNavigate } from "react-router-dom";

const HomeTicketBookingBox = () => {
  const navigate = useNavigate();

  const navToSearchPage = () => {
    const from = document.querySelector('input[name="from"]').value;
    const to = document.querySelector('input[name="to"]').value;
    const departDate = document.querySelector('input[name="departDate"]').value;
    navigate(`/search?from=${from}&to=${to}&departDate=${departDate}`);
  };

  return (
    <div className="py-[50px] max-w-[1400px] mx-auto">
      <div className="flex flex-col ">
        <div className="flex gap-5 items-center justify-start mb-5">
          <div className="flex justify-center items-center gap-2">
            <input type="radio" name="ticketType" id="oneWay" defaultChecked />
            <label htmlFor="oneWay">One way</label>
          </div>
          <div className="flex justify-center items-center gap-2">
            <input type="radio" name="ticketType" id="return" />
            <label htmlFor="return">Return</label>
          </div>
        </div>
        <div className="flex justify-between gap-5 flex-col xl:flex-row">
          <div className="flex gap-5 border-[1px] max-w-full xl:max-w-fit border-gray-300 rounded-[20px] flex-col xl:flex-row">
            <div className="flex flex-col p-5 pb-0 xl:pr-0">
              <h1>From</h1>
              <input
                name="from"
                type="text"
                placeholder="Delhi"
                className="outline-none text-[30px] max-w-[300px]"
                // onChange={handleFormDataChange}
              />
            </div>
            <div className="flex flex-col p-5 border-t-[1px] xl:border-l-[1px] xl:border-t-0 border-gray-300">
              <h1>To</h1>
              <input
                name="to"
                type="text"
                placeholder="Mumbai"
                className="outline-none text-[30px] max-w-[300px]"
                // onChange={handleFormDataChange}
              />
            </div>
          </div>
          <div className="flex gap-5 border-[1px]  border-gray-300 rounded-[20px]">
            <div className="flex flex-col p-5">
              <h1>Departure Date</h1>
              <input
                name="departDate"
                type="date"
                className="outline-none text-[20px] sm:text-[30px] w-full"
                // onChange={handleFormDataChange}
              />
            </div>
          </div>
          <div className="flex gap-5 border-[1px] flex-1 border-gray-300 rounded-[20px] flex-col xl:flex-row">
            <div className="flex flex-col p-5 w-full">
              <h1>Flight Type</h1>
              <select
                name="flightType"
                id="flightType"
                className="w-full text-xl mt-3 outline-none border-none"
                // onChange={handleFormDataChange}
              >
                <option value="Economy">Economy</option>
                <option value="Premium">Premium</option>
                <option value="Business">Business</option>
                <option value="First">First</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <button
        className="hover:bg-[#1E293B] bg-[#bebebe] text-black hover:text-white px-5 py-2 mt-5 rounded-lg transition duration-100"
        onClick={navToSearchPage}
      >
        Search Flights
      </button>
    </div>
  );
};

export default HomeTicketBookingBox;
