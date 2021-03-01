import React, { useState, useEffect } from "react";
import { Modal, ModalBody, ModalFooter, Button } from "@windmill/react-ui";

import { TContactModal } from "./ContactModal.type";

export const ContactModal:React.FC<TContactModal> = (props: TContactModal) => {
  const { modalOpen, cbUpdateModal } = props
  const [ isModalOpen, setIsModalOpen ] = useState(modalOpen)

  useEffect(() => {
    setIsModalOpen(modalOpen)
  }, [modalOpen])
  function closeModal() {
    cbUpdateModal()
  }

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal} className="bg-transparent">
      <ModalBody>
      <div className="sm:flex">
        <div className="sm:w-1/2">
          <div className="mt-6">
            <div className="inline-block border-b-2 border-blue-500 text-black font-medium">
              Email
            </div>
            <div className="mt-2.5">info@webhouse.com</div>
          </div>
          <div className="mt-6">
            <div className="inline-block border-b-2 border-blue-500 text-black font-medium">
              Phone
            </div>
            <div className="mt-2.5">0909909999</div>
          </div>
          <div className="mt-6">
            <div className="inline-block border-b-2 border-blue-500 text-black font-medium">
              Address
            </div>
            <div className="mt-2.5">
              420-744 West Hastings Street, Vancouver, BC, V6C 1A6, Canada
            </div>
          </div>
        </div>
        <div className="sm:w-1/2 sm:mt-0 mt-8">
          <form>
            <div>
              <label htmlFor="contact-name" className="text-black font-medium">
                Name
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-primary-input mt-2 px-3 py-2 rounded"
                id="contact-name"
                type="text"
                placeholder="Your name"
              />
            </div>
            <div className="mt-6">
              <label htmlFor="contact-email" className="text-black font-medium">
                Email
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-primary-input mt-2 px-3 py-2 rounded"
                id="contact-email"
                type="text"
                placeholder="Your Email"
              />
            </div>
            <div className="mt-6">
              <label htmlFor="contact-email" className="text-black font-medium">
                Phone Number
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-primary-input mt-2 px-3 py-2 rounded"
                id="contact-phone"
                type="text"
                placeholder="Your Phone Number"
              />
            </div>
            <div className="mt-6">
              <label htmlFor="contact-email" className="text-black font-medium">
                Message
              </label>
              <textarea
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-primary-input mt-2 px-3 py-2 rounded"
                id="contact-message"
                placeholder="Message"
              />
            </div>
          </form>
        </div>
      </div>
      </ModalBody>
      <ModalFooter>
        <Button className="w-full sm:w-auto" layout="outline" onClick={closeModal}>
          Cancel
        </Button>
        <Button className="w-full sm:w-auto">Accept</Button>
      </ModalFooter>
    </Modal>
  )
}