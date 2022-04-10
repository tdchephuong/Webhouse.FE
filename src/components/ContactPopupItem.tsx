import React, { useState } from 'react';

import ContactModal from "./ContactModal"
import { TContactPopupItem } from "./ContactPopupItem.type"

const ContactPopupItem: React.FC<TContactPopupItem> = (props: TContactPopupItem) => {
  const [previewModalOpen, setPreviewModalOpen] = useState(false)
  const { contactText = 'Contact' } = props
  const toggleContactModal = (e: any) => {
    if(e.target === e.currentTarget)
      setPreviewModalOpen(!previewModalOpen)
  }
  return (
    <>
      <span onClick={() => setPreviewModalOpen(true)} className="border border-blue-500 bg-blue-500 text-white rounded-3xl px-4 py-2 transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline text-base md:text-md cursor-pointer">
        {contactText}
      </span>
      <ContactModal modalShowed={previewModalOpen} toggleModal={toggleContactModal} title="Preview"/>
    </>
  )
}

export default ContactPopupItem;