import React, { useEffect, useState } from "react";
import TicketContainer from "../components/ETicket/TicketContainer";
import { BACKENDURL } from "../Config/Config";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const Ticket = () => {
  let { ticketId } = useParams();
  const [ticketData, setTicketData] = useState({});

  useEffect(() => {
    const fetchTicketURL = `${BACKENDURL}/api/v1/tickets/getTicket/`;

    try {
      fetch(fetchTicketURL + ticketId, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => setTicketData(data[0]))
        .catch((error) => toast.error(error.message));
    } catch (error) {
      toast.error(error.message);
    }
  }, []);

  return (
    <div className="w-full min-h-[100vh] bg-blue-300 mt-5 flex justify-center items-center bg-[url(https://images.unsplash.com/photo-1542349314-587b18ea1c2a)] bg-cover bg-center bg-no-repeat">
      <div className="w-full min-h-[500px] mx-auto px-5 max-w-[1200px]">
        <div>
          <p className="text-white font-bold text-[30px] text-center mt-[100px]">
            {ticketData && <h1>Your E-Tickets are ready!</h1>}
          </p>
          <div className="mb-10">
            {ticketData &&
            ticketData.bookings &&
            ticketData.bookings.length > 0 ? (
              ticketData.bookings.map((booking) => (
                <TicketContainer
                  key={booking._id} // Add a unique key prop
                  ticketData={ticketData}
                  bookingsData={booking}
                />
              ))
            ) : (
              <div>
                <p className="text-white text-center text-xl">
                  No tickets found.
                </p>
                <p className="text-white text-center">
                  You can book some tickets
                  <span className="font-bold">
                    <Link to={"/search"}> Click here</Link>
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
