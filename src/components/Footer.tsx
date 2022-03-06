import React from "react";
import { NavLink } from "react-router-dom";

import { ContactPopupItem } from "components/ContactPopupItem"

import logo from "assets/img/logo.svg";
import facebook from "assets/img/logo-facebook.svg";
import linkedin from "assets/img/logo-linkedin.svg";
import youtube from "assets/img/logo-youtube.svg";
import insta from "assets/img/logo-instagram.svg";

export const Footer: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="border-t border-default" />
      <div className="container py-12 lg:py-24 mx-auto px-1.5 lg:px-0">
        <div className="sm:flex">
          <div className="sm:w-1/2 sm:mt-0 mt-8 h-auto">
            <div>
              <img className="w-72 h-10 inline" src={logo} alt="" />
            </div>
            <p className="mt-7 leading-normal max-w-sm">
              Web House is a leading cloud-based development platform with
              millions of users worldwide. We make it easy for everyone to
              create a beautiful, professional web presence.
            </p>
            <div className="mt-6">
              <span
                className="border border-blue-500 bg-blue-500 text-white rounded-3xl px-4 py-2 transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline text-base md:text-md cursor-pointer"
              >
                <ContactPopupItem contactText="Contact Us"/>
              </span>
            </div>
          </div>
          <div className="sm:w-1/4 h-auto sm:mt-0 mt-8">
            <div className="text-black text-2xl mb-4">Category</div>
            <ul className="list-reset">
              <li className="hover:text-blue-500 mt-4">
                <NavLink to="/">Beauty</NavLink>
              </li>
              <li className="hover:text-blue-500 mt-4">
                <NavLink to="/">Bussiness</NavLink>
              </li>
              <li className="hover:text-blue-500 mt-4">
                <NavLink to="/">Fashion</NavLink>
              </li>
              <li className="hover:text-blue-500 mt-4">
                <NavLink to="/">Health</NavLink>
              </li>
              <li className="hover:text-blue-500 mt-4">
                <NavLink to="/">Landing Pages</NavLink>
              </li>
              <li className="hover:text-blue-500 mt-4">
                <NavLink to="/">Services</NavLink>
              </li>
              <li className="hover:text-blue-500 mt-4">
                <NavLink to="/">Travel</NavLink>
              </li>
              <li className="hover:text-blue-500 mt-4">
                <NavLink to="/">Porfolio</NavLink>
              </li>
            </ul>
          </div>
          <div className="sm:w-1/4 h-auto sm:mt-0 mt-8">
            <div className="text-black text-2xl mb-4">Company</div>
            <ul className="list-reset">
              <li className="hover:text-blue-500 mt-4">
                <NavLink to="/">About Us</NavLink>
              </li>
              <li className="hover:text-blue-500 mt-4">
                <NavLink to="/">Blog</NavLink>
              </li>
              <li className="hover:text-blue-500 mt-4 cursor-pointer">
                {/* <div><ContactPopupItem contactText="Contact Us"/></div> */}
              </li>
              <li className="hover:text-blue-500 mt-4">
                <NavLink to="/">Sitemap</NavLink>
              </li>
              <li className="hover:text-blue-500 mt-4">
                <NavLink to="/">Support center</NavLink>
              </li>
              <li className="hover:text-blue-500 mt-4">
                <NavLink to="/">Terms of Use</NavLink>
              </li>
              <li className="hover:text-blue-500 mt-4">
                <NavLink to="/">Privacy Policy</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-default" />
      <div className="container mx-auto py-6 px-1.5 lg:px-0">
        <div className="flex">
          <div className="w-1/2">Copyright © Web House 2021</div>
          <div className="w-1/2 lg:ml-auto text-right">
            <img className="ml-6 inline-block" src={facebook} alt="" />
            <img className="ml-6 inline-block" src={linkedin} alt="" />
            <img className="ml-6 inline-block" src={youtube} alt="" />
            <img className="ml-6 inline-block" src={insta} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
