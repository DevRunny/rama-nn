import React from "react";
import closeBtn from "../images/icons/closebtn.svg";
import { SendForm } from "./SendForm";

export const ModalItem = ({ openItem, setOpenItem }) => {
  function closeModal(e) {
    if (e.target.id === "overlay") {
      setOpenItem(null);
      document.querySelector("body").style.overflow = "visible";
    } else if (e.target.id === "modal__close-btn") {
      setOpenItem(null);
      document.querySelector("body").style.overflow = "visible";
    }
  }

  if (!openItem) return null;

  if (openItem.image)
    return (
      <div id="overlay" onMouseDown={closeModal}>
        <div className="modal-image">
          {openItem.image}
          <img
            id="modal__close-btn"
            src={closeBtn}
            alt="close-btn"
            onClick={closeModal}
          />
        </div>
      </div>
    );

  if (openItem.target.id === "reg-button")
    return (
      <div id="overlay" onMouseDown={closeModal}>
        <div className="modal-content">
          <img
            id="modal__close-btn"
            src={closeBtn}
            alt="close-btn"
            onClick={closeModal}
          />
          <SendForm />
        </div>
      </div>
    );
};
