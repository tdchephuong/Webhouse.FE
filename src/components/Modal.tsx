import React from "react";

import { TModal } from "./Modal.type";
import classNames from "classnames";

const Modal:React.FC<TModal> = (props: TModal) => {
  const { modalShowed, children, title, toggleModal, footer } = props
  const toggleModalStype = classNames({
    "hidden": !modalShowed
  });

  return (
    <div className={toggleModalStype}>
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" aria-hidden="true">
      {
        <div className="modal-dialog relative w-auto pointer-events-none">
          <div
          className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div
              className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5 className="text-xl font-medium leading-normal text-gray-800">{title}</h5>
              <button type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" aria-label="Close" onClick={toggleModal}></button>
            </div>
            <div className="modal-body relative p-4">
              {children}
            </div>
            {
              footer?footer:<div
                className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                <button type="button" className="border border-gray-500 bg-gray-500 text-white rounded-3xl px-4 py-2 transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline text-base md:text-md cursor-pointer
                  ml-1" onClick={toggleModal}>Close</button>
                <button type="button" className="border border-blue-500 bg-blue-500 text-white rounded-3xl px-4 py-2 transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline text-base md:text-md cursor-pointer
                  ml-1" onClick={toggleModal}>OK</button>
              </div>
            }
          </div>
        </div>
      }
    </div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  )
}

export default Modal;