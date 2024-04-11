import { useEffect, useState } from "react";
import { BACKENDURL } from "../Config/Config";
import { useParams } from "react-router-dom";
import axios from "axios";

const VerifyTicketAdmin = () => {
  const { ticketId } = useParams();
  console.log(ticketId);

  const [passenger, setPassenger] = useState({});
  const [flightData, setFlightData] = useState({});

  useEffect(() => {
    axios
      .get(
        `${BACKENDURL}/api/v1/tickets/getSingleFlightForVerification/${ticketId}`
      )
      .then((response) => {
        console.log(response.data);
        setPassenger(response.data.bookings[0]);
        setFlightData(response.data);
      });
  }, [ticketId]); // Add ticketId to the dependency array

  return (
    <div className="px-[30px] md:px-[30px]">
      <div className="mt-5">
        <h1 className="text-center my-10 text-4xl font-bold ">Verify Ticket</h1>
        <div>
          {/* Traveller Details */}

          <div className="flex flex-col gap-5 md:flex-row md:gap-5 w-full py-3">
            <div className="w-full md:w-1/2">
              <label htmlFor={`country`} className="block text-sm">
                First Name
              </label>
              <input
                type="text"
                id={`firstName`}
                className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
                value={passenger.fName}
                placeholder="Firstname"
                disabled
              />
            </div>
            <div className="w-full md:w-1/2">
              <label htmlFor={`passportNumber_`} className="block text-sm">
                Lastname
              </label>
              <input
                type="text"
                id={`passportNumber_`}
                placeholder="Lastname"
                className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
                value={passenger.lName}
                disabled
              />
            </div>
          </div>
          {/* Traveller Details */}

          <div className="flex flex-col gap-5 md:flex-row md:gap-5 w-full py-3">
            <div className="w-full md:w-1/2">
              <label htmlFor={`country`} className="block text-sm">
                Date of birth
              </label>
              <input
                type="date"
                id={`firstName`}
                className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
                value={passenger.dob}
                placeholder="Firstname"
                disabled
              />
            </div>
            <div className="w-full md:w-1/2">
              <label htmlFor={`passportNumber_`} className="block text-sm">
                Passport Number
              </label>
              <input
                type="text"
                id={`passportNumber_`}
                placeholder="Lastname"
                className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
                value={passenger.passportNumber}
                disabled
              />
            </div>
          </div>
          {/* Traveller Details */}

          <div className="flex flex-col gap-5 md:flex-row md:gap-5 w-full py-3">
            <div className="w-full md:w-1/2">
              <label htmlFor={`country`} className="block text-sm">
                Coutnry
              </label>
              <input
                type="text"
                id={`firstName`}
                className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
                value="India"
                placeholder="Firstname"
                disabled
              />
            </div>
            <div className="w-full md:w-1/2">
              <label htmlFor={`passportNumber_`} className="block text-sm">
                State
              </label>
              <input
                type="text"
                id={`passportNumber_`}
                placeholder="Lastname"
                className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
                value={passenger.state}
                disabled
              />
            </div>
          </div>
          {/* Traveller Details */}

          <div className="flex flex-col gap-5 md:flex-row md:gap-5 w-full py-3">
            <div className="w-full md:w-1/2">
              <label htmlFor={`country`} className="block text-sm">
                Phone
              </label>
              <input
                type="number"
                id={`firstName`}
                className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
                value={passenger.phoneNumber}
                placeholder="Firstname"
                disabled
              />
            </div>
            <div className="w-full md:w-1/2">
              <label htmlFor={`passportNumber_`} className="block text-sm">
                Email
              </label>
              <input
                type="text"
                id={`passportNumber_`}
                placeholder="Email"
                className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
                value={passenger.email}
                disabled
              />
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2">
            <label htmlFor={`passportSizePhoto_`} className="block text-sm">
              Passport Size Photo
            </label>
            <img
              src={passenger.passportSizePhoto}
              alt="..."
              className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 h-[500px]"
            />
          </div>

          <div className="mt-5">
            {" "}
            <p className="mb-2">Booked seat : </p>
            <div className="bg-blue-500 w-[60px] h-[60px] flex justify-center items-center text-white rounded-md">
              {passenger.seat}
            </div>
          </div>

          {/* Flight Details */}
          <h1 className="text-center my-10 text-4xl font-bold ">FLIGHT DATA</h1>

          <div className="flex flex-col gap-5 md:flex-row md:gap-5 w-full py-3">
            <div className="w-full md:w-1/2">
              <label htmlFor={`country`} className="block text-sm">
                From Source
              </label>
              <input
                type="text"
                id={`firstName`}
                className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
                value={flightData.from}
                placeholder="Firstname"
                disabled
              />
            </div>
            <div className="w-full md:w-1/2">
              <label htmlFor={`passportNumber_`} className="block text-sm">
                To Destination
              </label>
              <input
                type="text"
                id={`passportNumber_`}
                placeholder="Email"
                className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
                value={flightData.to}
                disabled
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyTicketAdmin;

// {
//   "_id": "66168b388c5662c48cda56b5",
//   "airline": "66168ad98c5662c48cda56ae",
//   "from": "Mumbai",
//   "to": "Delhi",
//   "departTime": "18:21",
//   "arriveTime": "22:21",
//   "departDate": "2024-04-11",
//   "arriveDate": "2024-04-11",
//   "price": 4800,
//   "bookedSeats": [
//       "A1",
//       "B1"
//   ],
//   "__v": 2,
//   "airlineLogo": "https://res.cloudinary.com/dmjgdrcme/image/upload/v1712753368/ntgxoce9cb1zphg9ir1q.png",
//   "airlineName": "Air India",
//   "bookings": [
//       {
//           "_id": "66169224ccbeb5137fefa403",
//           "flight": "66168b388c5662c48cda56b5",
//           "user": "66168a6c8c5662c48cda56aa",
//           "seat": "A1",
//           "fName": "Piyush",
//           "lName": "Pardeshi",
//           "dob": "2024-04-10",
//           "passportNumber": "13243121",
//           "state": "Maharashtra",
//           "phoneNumber": "09326582108",
//           "email": "piyushp0512@gmail.com",
//           "passportSizePhoto": "https://res.cloudinary.com/dmjgdrcme/image/upload/v1712755236/zrsmr74qambzxl96uxkj.jpg",
//           "__v": 0
//       }
//   ]
// }
