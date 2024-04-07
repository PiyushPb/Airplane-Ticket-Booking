import React, { useState, useContext } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { authContext } from "../../context/authContext";

function Navbar() {
  const { user, token } = useContext(authContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white px-[30px] md:px-[30px]">
      <nav className="flex justify-between items-center w-full max-w-[1800px] mx-auto mt-5 z-[10]">
        <Link to={"/"}>
          <div className="font-bold text-3xl">Logo</div>
        </Link>
        <div
          className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${
            menuOpen ? "top-[8%]" : "top-[-100%]"
          } md:w-auto w-full flex items-center px-5 z-[10]`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <a className="hover:text-gray-500" href="#">
                Products
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">
                Solution
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">
                Resource
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          {token && user ? (
            // TODO: add user profile
            <p>test</p>
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
