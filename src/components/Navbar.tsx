import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "assets/img/logo.svg";

export const Navbar: React.FC = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
      <nav className="container mx-auto flex items-center flex-wrap py-3">
        <NavLink to="/" className="inline-flex items-center mr-12">
          <img className="w-40 h-6" src={logo} alt="" />
        </NavLink>
        <button
          className="inline-flex p-3 hover:bg-blue-600 rounded lg:hidden text-black ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`${
            active ? "" : "hidden"
          } w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
            <NavLink
              to="/"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:underline text-base md:text-lg font-light"
            >
              Explore
            </NavLink>
            <NavLink
              to="/"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:underline text-base md:text-lg font-light"
            >
              About Us
            </NavLink>
            <NavLink
              to="/"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:underline text-base md:text-lg font-light"
            >
              Pricing
            </NavLink>
            <NavLink
              to="/"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:underline text-base md:text-lg font-light"
            >
              Contact
            </NavLink>
          </div>
          <div className="lg:inline-flex lg:flex-row lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto ml-auto">
            <NavLink
              to="/"
              className="border border-blue-500 bg-blue-500 text-white rounded-3xl px-4 py-2 transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline text-white text-base md:text-md"
            >
              Login
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};
