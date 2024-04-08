import React from "react";

const Header = ({ currentFlight }) => {
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
    <div className="overflow-hidden rounded-[30px] border-[1px]">
      <div className="w-full h-fit bg-[#e1e7ee] p-5 flex justify-between items-center">
        <div className="flex justify-start items-center gap-3">
          <div className="w-[60px]">
            <img src={currentFlight.airline.airlineLogo} alt="..." />
          </div>
          <p className="text-[18px] font-semibold">
            {currentFlight.airline.airlineName} Airlines
          </p>
        </div>
        <div>
          <p className="text-[14px]">Economy class</p>
        </div>
      </div>
      <div className="p-5">
        <div className="flex max-w-[800px] w-full m-auto justify-between items-center relative z-10">
          <div className="text-center">
            <p className="text-[12px]">Depart</p>
            <p className="text-[18px] font-semibold mt-2">
              {currentFlight.departTime}
            </p>
            <p className="text-[14px] text-gray-600">
              {formatDate(currentFlight.departDate)}
            </p>
          </div>
          <div className="flex items-center my-5 lg:my-0">
            <div className="w-[15px] h-[15px] rounded-full bg-blue-300"></div>
            <div className="w-[15px] h-[1px] border-[1px] border-blue-400 border-dashed lg:w-[30px]"></div>
            <div className="text-[12px] px-2 py-1 text-blue-500 bg-blue-200 rounded-full lg:text-[14px] lg:px-3 text-center">
              {calcDuration(currentFlight.departTime, currentFlight.arriveTime)}
            </div>
            <div className="w-[15px] h-[1px] border-[1px] border-blue-400 border-dashed lg:w-[30px]"></div>
            <div className="w-[15px] h-[15px] rounded-full bg-blue-300"></div>
          </div>
          <div className="text-center">
            <p className="text-[12px]">Arrive</p>
            <p className="text-[18px] font-semibold mt-2">
              {currentFlight.arriveTime}
            </p>
            <p className="text-[14px] text-gray-600">
              {formatDate(currentFlight.arriveDate)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
