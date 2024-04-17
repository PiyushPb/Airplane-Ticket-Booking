import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKENDURL } from "../Config/Config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddFlight = () => {
  const navigate = useNavigate();
  const [airlineData, setAirlineData] = useState([]);
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    departDate: "",
    arriveDate: "",
    departTime: "",
    arriveTime: "",
    airlineUid: "",
    price: "",
  });

  useEffect(() => {
    axios
      .get(`${BACKENDURL}/api/v1/flights/getAllAirlines`)
      .then((response) => {
        setAirlineData(response.data);
      });
  }, []);

  const handleChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      // Prepare data for backend
      const flightData = {
        from: formData.from,
        to: formData.to,
        departDate: formData.departDate,
        arriveDate: formData.arriveDate,
        departTime: formData.departTime,
        arriveTime: formData.arriveTime,
        airlineUid: formData.airlineUid,
        price: formData.price,
      };

      if (
        !formData.from ||
        !formData.to ||
        !formData.departDate ||
        !formData.arriveDate ||
        !formData.departTime ||
        !formData.arriveTime ||
        !formData.airlineUid ||
        !formData.price
      ) {
        toast.error("Please fill all the fields");
        return;
      }

      console.log("Flight data:", flightData);

      // Send data to backend API
      const response = await axios.post(
        `${BACKENDURL}/api/v1/flights/addFlight`,
        flightData
      );

      console.log("Response data:", response.data);

      toast.success("Flight added");
      navigate("/admin/");
      // Add logic to handle response if needed
    } catch (error) {
      console.error("Error adding flight:", error);
      toast.error("Error adding flight. Please try again.");
    }
  };

  return (
    <div className="px-[30px] md:px-[30px]">
      <div className="mt-10">
        <div className="flex flex-col gap-5 md:flex-row md:gap-5 w-full py-3">
          <div className="w-full md:w-1/2">
            <label className="block text-sm">Select airlines</label>
            <select
              className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
              onChange={(e) => handleChange(e, "airlineUid")}
            >
              <option value="">Select Airline</option>
              {airlineData.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.airlineName}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full md:w-1/2">
            <label className="block text-sm">Flight ticket price</label>
            <input
              type="number"
              placeholder="Flight ticket price"
              className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
              value={formData.price}
              onChange={(e) => handleChange(e, "price")}
            />
          </div>
        </div>
        {/* destination */}
        <div className="flex flex-col gap-5 md:flex-row md:gap-5 w-full py-3">
          <div className="w-full md:w-1/2">
            <label className="block text-sm">From</label>
            <input
              placeholder="From"
              type="text"
              className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
              value={formData.from}
              onChange={(e) => handleChange(e, "from")}
            />
          </div>
          <div className="w-full md:w-1/2">
            <label className="block text-sm">To Destination</label>
            <input
              type="text"
              placeholder="To Destination"
              className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
              value={formData.to}
              onChange={(e) => handleChange(e, "to")}
            />
          </div>
        </div>
        {/* date */}
        <div className="flex flex-col gap-5 md:flex-row md:gap-5 w-full py-3">
          <div className="w-full md:w-1/2">
            <label className="block text-sm">Departure Date</label>
            <input
              type="date"
              className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
              value={formData.departDate}
              onChange={(e) => handleChange(e, "departDate")}
            />
          </div>
          <div className="w-full md:w-1/2">
            <label className="block text-sm">Arrival Date</label>
            <input
              type="date"
              className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
              value={formData.arriveDate}
              onChange={(e) => handleChange(e, "arriveDate")}
            />
          </div>
        </div>
        {/* Time */}
        <div className="flex flex-col gap-5 md:flex-row md:gap-5 w-full py-3">
          <div className="w-full md:w-1/2">
            <label className="block text-sm">Departure Time</label>
            <input
              type="time"
              className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
              value={formData.departTime}
              onChange={(e) => handleChange(e, "departTime")}
            />
          </div>
          <div className="w-full md:w-1/2">
            <label className="block text-sm">Arrival Time</label>
            <input
              type="time"
              className="border-[1px] border-gray-200 rounded-md px-3 outline-none py-2 w-full"
              value={formData.arriveTime}
              onChange={(e) => handleChange(e, "arriveTime")}
            />
          </div>
        </div>
        <button
          className="max-w-[300px] w-full bg-blue-500 text-white px-4 py-3 rounded-md hover:bg-blue-600"
          onClick={handleSubmit}
        >
          Add Flight
        </button>
      </div>
    </div>
  );
};

export default AddFlight;
