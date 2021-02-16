import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, DropdownItem } from '@windmill/react-ui'

import logo from "assets/img/logo.svg";
import './Navbar.css'

export const Navbar: React.FC = () => {
  const [active, setActive] = useState(false);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)

  const handleClick = () => {
    setActive(!active);
  };
  const toggleDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown)
  }
  return (
    <>
      <nav className="container mx-auto flex items-center flex-wrap py-3.5 px-1.5 lg:px-0">
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
            <div
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:text-blue-500 text-base md:text-lg font-light relative"
              onClick={toggleDropdown}
            >
              <span className="cursor-pointer">Explore</span>
              <Dropdown isOpen={isOpenDropdown} onClose={() => {}} className="top-full z-10">
                <DropdownItem className="bg-arrow">
                  <span>Bussiness</span>
                </DropdownItem>
                <DropdownItem className="bg-arrow">
                  <span>Services</span>
                </DropdownItem>
                <DropdownItem className="bg-arrow">
                  <span>Health</span>
                </DropdownItem>
                <DropdownItem className="bg-arrow">
                  <span>Beauty</span>
                </DropdownItem>
                <DropdownItem className="bg-arrow">
                  <span>Fashion</span>
                </DropdownItem>
                <DropdownItem className="bg-arrow">
                  <span>Landing Pages</span>
                </DropdownItem>
                <DropdownItem className="bg-arrow">
                  <span>Porfolio</span>
                </DropdownItem>
                <DropdownItem className="bg-arrow">
                  <span>Travel</span>
                </DropdownItem>
              </Dropdown>
            </div>
            <NavLink
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:text-blue-500 text-base md:text-lg font-light"
              exact
              to="/"
            >
              About Us
            </NavLink>
            <NavLink
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:text-blue-500 text-base md:text-lg font-light"
              exact
              to="/"
            >
              Pricing
            </NavLink>
            <NavLink
              activeClassName="text-blue-500"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:text-blue-500 text-base md:text-lg font-light"
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
          <div className="lg:inline-flex lg:flex-row lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto ml-auto">
            <NavLink
              to="/"
              className="border border-blue-500 bg-blue-500 text-white rounded-3xl px-4 py-2 transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline text-base md:text-md"
            >
              Login
            </NavLink>
          </div>
        </div>
      </nav>
    
    </>
  );
};
