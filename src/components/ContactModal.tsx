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
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <ModalBody>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum et eligendi repudiandae
        voluptatem tempore!
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