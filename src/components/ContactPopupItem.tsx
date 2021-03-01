import React, { useState } from 'react';

import { ContactModal } from "./ContactModal"

export const ContactPopupItem: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onUpdateOpenModal = () => {
    setIsModalOpen(false)
  };
  const toggleContactModal = () => {
    setIsModalOpen(!isModalOpen)
  };
  return (
    <>
      <span onClick={toggleContactModal}>
        Contact
      </span>
      <ContactModal modalOpen={isModalOpen} cbUpdateModal={onUpdateOpenModal}/>
    </>
  )
}