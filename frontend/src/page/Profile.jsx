import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKENDURL } from "../Config/Config";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [tickets, setTickets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      navigate("/login");
    } else {
      axios
        .get(BACKENDURL + "/api/v1/auth/getUser", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
        //   console.log(response.data);
          setUserData(response.data.user);
          setTickets(response.data.tickets);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [navigate]);

  return (
    <div className="px-[30px] md:px-[30px]">
      <h1 className="mt-5 text-2xl">Profile</h1>
      <p>User Email: {userData.email}</p>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Ticket ID</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket._id}>
              <td className="text-center">{ticket.uid}</td>
              <td className="text-center">
                <Link to={`/ticket/${ticket.uid}`}>Go to Ticket</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
