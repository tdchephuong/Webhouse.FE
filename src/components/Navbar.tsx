import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { TNavbar } from "./Navbar.type"
import { ContactPopupItem } from 'components/ContactPopupItem'

import logo from "assets/img/logo.svg";
import icon_desktop from "assets/img/detail-template/icon-destop_view.png";
import icon_mobile from "assets/img/detail-template/icon-mobile_view.png";
import "./Navbar.css";

export const Navbar: React.FC<TNavbar> = ({type: navbarType = 'BasicNav'}) => {
  const [active, setActive] = useState(false);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  const toggleDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };
  return (
    <>
      {'BasicNav' === navbarType&&
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
                {/* <Dropdown
                  isOpen={isOpenDropdown}
                  onClose={() => {}}
                  className="top-full z-10"
                >
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
                </Dropdown> */}
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
              <div
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:text-blue-500 text-base md:text-lg font-light cursor-pointer"
              >
                {/* <ContactPopupItem/> */}
              </div>
            </div>
            <div className="lg:inline-flex lg:flex-row lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto ml-auto">
              {/* <NavLink
                to="/"
                className="border border-blue-500 bg-blue-500 text-white rounded-3xl px-4 py-2 transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline text-base md:text-md"
              >
                Contact
              </NavLink> */}
              <ContactPopupItem contactText="Contact Us"/>
            </div>
          </div>
        </nav>
      }
      {'SwitchModeNav' === navbarType&&
        <nav className="container mx-auto grid grid-flow-col grid-cols-3 py-3.5 px-1.5 lg:px-0">
          <NavLink to="/" className="inline-flex items-center">
            <img className="w-40 h-6" src={logo} alt="" />
          </NavLink>
          <div className="inline-flex lg:flex-row justify-center flex lg:h-auto">
            <div
              className="inline-flex px-3 py-2 items-center justify-center"
            >
              <span className="cursor-pointer">
                <img src={icon_desktop} alt=""/>
              </span>
              <div className="border-l border-gray-400 h-full ml-2 mr-1 lg:ml-6 lg:mr-5"></div>
              <span className="cursor-pointer">
                <img src={icon_mobile} alt=""/>
              </span>
            </div>
          </div>
          <div className="lg:inline-flex lg:flex-row flex lg:h-auto justify-end">
            <div className="py-2 select-none text-base md:text-md text-blue-500">
              #1469
            </div>
            <NavLink
              to="/"
              className="border border-blue-500 bg-blue-500 text-white rounded-3xl px-4 py-2 transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline text-base md:text-md ml-4"
            >
              Buy
            </NavLink>
          </div>
        </nav>
      }
    </>
  );
};
