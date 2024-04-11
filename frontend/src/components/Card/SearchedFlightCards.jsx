import React from "react";

const SearchedFlightCards = ({ flight }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const formattedDate = `${date.getDate()} ${
      monthNames[date.getMonth()]
    } ${date.getFullYear()}`;

    return formattedDate;
  };

  const calcDuration = (departTime, arriveTime) => {
    // Parse departure and arrival times
    const [departHour, departMinute] = departTime.split(":").map(Number);
    const [arriveHour, arriveMinute] = arriveTime.split(":").map(Number);

    // Calculate total minutes for departure and arrival
    const departTotalMinutes = departHour * 60 + departMinute;
    let arriveTotalMinutes = arriveHour * 60 + arriveMinute;

    // Check if arrival time is earlier than departure time (crosses midnight)
    if (arriveTotalMinutes < departTotalMinutes) {
      // Add 24 hours worth of minutes to arrival time
      arriveTotalMinutes += 24 * 60;
    }

    // Calculate the duration
    let durationMinutes = arriveTotalMinutes - departTotalMinutes;

    // Calculate hours and minutes
    const durationHour = Math.floor(durationMinutes / 60);
    const durationMinute = durationMinutes % 60;

    // Format the duration
    const formattedDuration = `${durationHour}h ${durationMinute}m`;

    return formattedDuration;
  };

  return (
    <div className="relative w-full p-[5px] border rounded-sm flex justify-between items-center flex-col gap-2 max-w-[370px] lg:flex-row lg:max-w-full lg:gap-5 cursor-pointer hover:shadow-lg duration-150 transition">
      <div className="h-[200px] w-full bg-gray-200 p-5 flex justify-center items-center rounded-md lg:h-[150px] lg:w-[150px]">
        <img src={flight.airline.airlineLogo} alt="..." />
      </div>
      <div className="flex max-w-[800px] w-full m-auto justify-between items-center relative z-10 px-2">
        <div className="text-center">
          <p className="text-[12px]">Depart</p>
          <p className="text-[18px] font-semibold mt-2">{flight.departTime}</p>
          <p className="text-[14px] text-gray-600">
            {formatDate(flight.departDate)}
          </p>
        </div>
        <div className="flex items-center my-5 lg:my-0">
          <div className="w-[15px] h-[15px] rounded-full bg-blue-300"></div>
          <div className="w-[15px] h-[1px] border-[1px] border-blue-400 border-dashed lg:w-[30px]"></div>
          <div className="text-[12px] px-2 py-1 text-blue-500 bg-blue-200 rounded-full lg:text-[14px] lg:px-3 text-center">
            {calcDuration(flight.departTime, flight.arriveTime)}
          </div>
          <div className="w-[15px] h-[1px] border-[1px] border-blue-400 border-dashed lg:w-[30px]"></div>
          <div className="w-[15px] h-[15px] rounded-full bg-blue-300"></div>
        </div>
        <div className="text-center">
          <p className="text-[12px]">Arrive</p>
          <p className="text-[18px] font-semibold mt-2">{flight.arriveTime}</p>
          <p className="text-[14px] text-gray-600">
            {formatDate(flight.arriveDate)}
          </p>
        </div>
      </div>
      <div className="w-full h-fit lg:w-[150px] lg:h-[150px] flex justify-center items-center">
        <div className="flex flex-row flex-wrap justify-center items-center gap-4 lg:flex-col lg:gap-1 w-full border-[1px] md:border-0 border-gray-300 rounded-md p-3">
          <p className="text-[14px] text-center">Price</p>
          <p className="text-[18px] font-semibold text-center">
            ₹ {flight.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchedFlightCards;
