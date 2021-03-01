import React, { useState } from 'react';

import { ContactModal } from "./ContactModal"
import { TContactPopupItem } from "./ContactPopupItem.type"

export const ContactPopupItem: React.FC<TContactPopupItem> = (props: TContactPopupItem) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { contactText = 'Contact' } = props
  const onUpdateOpenModal = () => {
    setIsModalOpen(false)
  };
  const toggleContactModal = () => {
    setIsModalOpen(!isModalOpen)
  };
  return (
    <>
      <span onClick={toggleContactModal}>
        {contactText}
      </span>
      <ContactModal modalOpen={isModalOpen} cbUpdateModal={onUpdateOpenModal}/>
    </>
  )
}