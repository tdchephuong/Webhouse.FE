import React, { useState, useEffect } from "react";

import { TContactModal } from "./ContactModal.type";
import classNames from "classnames";

export const ContactModal:React.FC<TContactModal> = (props: TContactModal) => {
  const { modalShowed, toggleModal } = props
  const toggleModalStype = classNames("w-full px-6 py-4 overflow-hidden bg-transparent rounded-t-lg dark:bg-gray-800 sm:rounded-lg sm:m-4 sm:max-w-3xl", {
    "hidden": !modalShowed
  });

  return (
    <div className={toggleModalStype}>
      <div className="sm:flex items-center">
        <div className="sm:w-2/5 bg-yellow-400 px-5 py-10 z-10">
          <div>
            <div className="inline-block text-black font-bold text-lg">
              Email
            </div>
            <div className="mt-4">info@webhouse.com</div>
          </div>
          <div className="mt-6">
            <div className="inline-block text-black font-bold text-lg">
              Phone
            </div>
            <div className="mt-4">0909909999</div>
          </div>
          <div className="mt-6">
            <div className="inline-block text-black font-bold text-lg">
              Address
            </div>
            <div className="mt-4">
              420-744 West Hastings Street, Vancouver, BC, V6C 1A6, Canada
            </div>
          </div>
        </div>
        <div className="sm:w-3/5 sm:mt-0 mt-8 bg-white px-5 py-16 relative">
          <div className="bg-white h-full w-16 top-0 -left-16 absolute"></div>
          <form>
            <div>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border-b border-black px-3 py-2 "
                id="contact-name"
                type="text"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="mt-6">
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border-b border-black mt-2 px-3 py-2 "
                id="contact-email"
                type="text"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="mt-6">
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border-b border-black mt-2 px-3 py-2 "
                id="contact-phone"
                type="text"
                placeholder="Enter Your Phone Number"
              />
            </div>
            <div className="mt-6">
              <textarea
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border-b border-black mt-2 px-3 py-2 "
                id="contact-message"
                placeholder="Enter Your Message"
              />
            </div>
            <div className="mt-6"><button onClick={toggleModal}>Submit</button></div>
          </form>
        </div>
      </div>
    </div>
  )
}