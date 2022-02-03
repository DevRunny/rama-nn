import React from "react";

export const RegButton = ({ setOpenItem }) => {
  return (
    <div>
      <button
        id="reg-button"
        className="reg-button"
        onClick={(e) => {
          document.querySelector("body").style.overflow = "hidden";
          setOpenItem(e);
        }}
      >
        Записаться на ТО
      </button>
    </div>
  );
};
