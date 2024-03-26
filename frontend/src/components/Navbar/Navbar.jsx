import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white">
      <nav className="flex justify-between items-center w-full max-w-[1800px] mx-auto mt-5 z-[10]">
        <div className="font-bold text-3xl">Logo</div>
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
          <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
            Sign in
          </button>
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
