import React from "react";
import logo from "../images/icons/logo.svg";

export const Footer = () => {
  return (
    <footer>
      <div id="footer">
        <div className="container">
          <div className="">
            <img src={logo} className="logo" alt="logo" />
            <label className="logo-label">RAMA-NN</label>
          </div>
        </div>
      </div>
    </footer>
  );
};
