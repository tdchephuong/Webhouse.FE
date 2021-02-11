import React from 'react'
import { NavLink } from 'react-router-dom'

import './Contact.css'

export const Contact: React.FC = () => {
  return (
    <div className="container mx-auto bg-white rounded-lg shadow-md relative mt-6 mb-24 px-1.5 lg:px-0">
      <div className="sm:flex">
        <div className="sm:w-1/2 sm:mt-0 mt-8 p-2 lg:p-16">
          <div className="text-4xl text-black contact-title font-medium">Get in touch</div>
          <div className="mt-2">Want to get in touch? We'd love to hear from you.<br/>Here's how you can reach us...</div>
          <div className="mt-6">
            <div className="inline-block border-b-2 border-blue-500 text-black font-medium">Email</div>
            <div className="mt-2.5">info@webhouse.com</div>
          </div>
          <div className="mt-6">
            <div className="inline-block border-b-2 border-blue-500 text-black font-medium">Phone</div>
            <div className="mt-2.5">0909909999</div>
          </div>
          <div className="mt-6">
            <div className="inline-block border-b-2 border-blue-500 text-black font-medium">Address</div>
            <div className="mt-2.5">420-744 West Hastings Street, Vancouver, BC, V6C 1A6, Canada</div>
          </div>
        </div>
        <div className="sm:w-1/2 sm:mt-0 mt-8 p-2 lg:p-16">
          <form>
            <div>
              <label htmlFor="contact-name" className="text-black font-medium">Name</label>
              <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-primary-input mt-2 px-3 py-2 rounded" id="contact-name" type="text" placeholder="Your name"/>
            </div>
            <div className="mt-6">
              <label htmlFor="contact-email" className="text-black font-medium">Email</label>
              <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-primary-input mt-2 px-3 py-2 rounded" id="contact-email" type="text" placeholder="Your Email"/>
            </div>
            <div className="mt-6">
              <label htmlFor="contact-email" className="text-black font-medium">Phone Number</label>
              <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-primary-input mt-2 px-3 py-2 rounded" id="contact-email" type="text" placeholder="Your Phone Number"/>
            </div>
            <div className="mt-6">
              <label htmlFor="contact-email" className="text-black font-medium">Note</label>
              <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-primary-input mt-2 px-3 py-2 rounded" id="contact-email" type="text" placeholder="Template code or some note"/>
            </div>
            <NavLink
              to="/"
              className="mt-6 block border border-blue-500 bg-blue-500 text-white rounded pt-3.5 pb-2.5 transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline text-base md:text-lg font-medium text-center"
            >
              Send
            </NavLink>
          </form>
        </div>
      </div>
      <div className="absolute w-px h-full top-0 left-1/2 border-l border-default hidden lg:block"></div>
    </div>
  )
}