import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKENDURL } from "../Config/Config";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { TbEdit } from "react-icons/tb";

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
      <div className="max-w-[800px] mx-auto">
        <h1 className="mt-5 text-2xl">Profile</h1>
        <div className="my-5 w-[100px] h-[100px] rounded-full overflow-hidden relative">
          <div className="w-full h-full object-cover absolute flex justify-center items-center bg-black/40 opacity-0 hover:opacity-100 cursor-pointer">
            <TbEdit className="text-white text-[40px]" />
          </div>
          <img src={userData.profilePic} alt="" />
        </div>

        <div>
          <div className="flex gap-2 justify-start items-center">
            <p>User Name: </p>
            <input
              type="text"
              value={userData.name}
              className="outline-none "
            />
          </div>
          <p className="mt-2">User Email: {userData.email}</p>
        </div>

        <button className="bg-blue-300 text-black mt-3 px-8 py-3 rounded-xl hover:bg-blue-400 transition duration-200">
          Update Profile
        </button>
        {tickets.length > 0 ? (
          <table className="table-auto w-full mt-5">
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
                    <Link
                      to={`/ticket/${ticket.uid}`}
                      className="text-blue-500 underline"
                    >
                      Go to Ticket
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="mt-5">No tickets found</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
