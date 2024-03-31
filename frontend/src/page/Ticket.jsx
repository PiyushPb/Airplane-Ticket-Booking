import React from "react";
import TicketContainer from "../components/ETicket/TicketContainer";

const Ticket = () => {
  return (
    <div className="w-full min-h-[100vh] bg-blue-300 mt-5 flex justify-center items-center bg-[url(https://images.unsplash.com/photo-1542349314-587b18ea1c2a)] bg-cover bg-center bg-no-repeat">
      <div className=" w-full min-h-[500px] mx-auto px-5 max-w-[1200px]">
        <div>
          <p className="text-white font-bold text-[30px] text-center mt-[100px]">
            Your E-Tickets are ready!
          </p>
          <div className="mb-10">
            <TicketContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
