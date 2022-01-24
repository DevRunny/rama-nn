import React from "react";
import closeBtn from "../images/icons/closebtn.svg";

export const ModalItem = ({ openItem, setOpenItem }) => {
  function closeModal(e) {
    if (e.target.id === "overlay") {
      setOpenItem(null);
    } else if (e.target.id === "modal__close-btn") {
      setOpenItem(null);
    }
  }

  if (!openItem) return null;

  return (
    <div id="overlay" onClick={closeModal}>
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
};
