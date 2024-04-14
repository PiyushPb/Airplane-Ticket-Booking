import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { BACKENDURL } from "../Config/Config";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { TbEdit } from "react-icons/tb";
import uploadImageToCloudinary from "../utils/uploadImageToCloudinary";
import { authContext } from "../context/authContext";
import { toast } from "react-toastify";

const Profile = () => {
  const { dispatch } = useContext(authContext);

  const [userData, setUserData] = useState({});
  const [tickets, setTickets] = useState([]);
  const [userName, setUserName] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(BACKENDURL + "/api/v1/auth/getUser", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setUserData(response.data.user);
        setTickets(response.data.tickets);
        setUserName(response.data.user.name);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [navigate]);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        // Upload image to Cloudinary
        const imageData = await uploadImageToCloudinary(file);
        setProfilePic(imageData.secure_url); // Set profile picture URL
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  const handleProfileUpdate = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token === null) {
        navigate("/login");
      } else {
        let updatedData = { name: userName };

        if (profilePic) {
          const imageData = await uploadImageToCloudinary(profilePic);
          updatedData.profilePic = imageData.secure_url;
        }

        const response = await axios.put(
          BACKENDURL + "/api/v1/auth/updateUser",
          updatedData,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        toast.success("Profile updated successfully");
        console.log("Profile updated successfully:", response.data);
        setUserData(response.data.user);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="px-[30px] md:px-[30px]">
      <div className="max-w-[800px] mx-auto">
        <h1 className="mt-5 text-2xl">Profile</h1>
        <div className="my-5 w-[100px] h-[100px] rounded-full overflow-hidden relative">
          <div className="w-full h-full object-cover absolute flex justify-center items-center bg-black/40 opacity-0 hover:opacity-100 cursor-pointer">
            <label htmlFor="profile-pic-upload">
              <TbEdit className="text-white text-[40px] cursor-pointer" />
            </label>
            <input
              id="profile-pic-upload"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
          </div>
          {profilePic ? (
            <img src={profilePic} alt="" />
          ) : (
            <img src={userData.profilePic} alt="" />
          )}
        </div>

        <div>
          <div className="flex gap-2 justify-start items-center">
            <p>User Name: </p>
            <input
              type="text"
              value={userName}
              className="outline-none"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <p className="mt-2">User Email: {userData.email}</p>
        </div>

        <div className="flex gap-2 justify-start items-center">
          <button
            className="bg-blue-300 text-black mt-3 px-8 py-3 rounded-xl hover:bg-blue-400 transition duration-200"
            onClick={handleProfileUpdate}
          >
            Update Profile
          </button>
          <button
            className="bg-red-300 text-black mt-3 px-8 py-3 rounded-xl hover:bg-red-400 transition duration-200"
            onClick={() => {
              handleLogout();
              navigate("/login");
            }}
          >
            Logout
          </button>
        </div>
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
