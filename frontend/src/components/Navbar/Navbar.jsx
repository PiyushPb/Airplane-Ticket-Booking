import React, { useState, useContext } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { authContext } from "../../context/authContext";

function Navbar() {
  const isAdmin = true ? localStorage.getItem("isAdmin") === "true" : false;
  console.log(isAdmin);

  const isUserLoggedIn = true
    ? localStorage.getItem("token") !== "null"
    : false;
  console.log(isUserLoggedIn);

  const { user, token } = useContext(authContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const userData = JSON.parse(localStorage.getItem("user"));

  const profilePic =
    "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png";

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white px-[30px] md:px-[30px]">
      <nav className="flex justify-between items-center w-full max-w-[1800px] mx-auto mt-5 z-[10]">
        <Link to={"/"}>
          <div className="font-bold text-3xl">ABVS</div>
        </Link>
        <div
          className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${
            menuOpen ? "top-[8%]" : "top-[-100%]"
          } md:w-auto w-full flex items-center px-5 z-[10]`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <Link to={"/search"} className="hover:text-gray-500" href="#">
                Search Flights
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500" href="#">
                Search hotels
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500" href="#">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          {isUserLoggedIn ? (
            <Link to={isAdmin ? "/admin" : "/profile"}>
              <img
                src={profilePic}
                alt=""
                className="w-[50px] h-[50px] rounded-full"
              />
            </Link>
          ) : (
            <Link to={"/login"}>
              <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
                Sign in
              </button>
            </Link>
          )}
          <RxHamburgerMenu
            onClick={toggleMenu}
            name={menuOpen ? "close" : "menu"}
            className="text-3xl cursor-pointer md:hidden"
          />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
