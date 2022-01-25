import React from "react";
import { links } from "../components/data";
import logo from "../images/icons/logo.svg";

export const Footer = () => {
  return (
    <footer>
      <div id="footer">
        <div className="container">
          <div className="">
            <img src={logo} className="logo" alt="logo" />
            <label className="logo-label">RAMA-NN</label>
            <div className="footer__links">
              {links.map((link) => {
                return (
                  <li key={link.id}>
                    <a href={link.url}>{link.text}</a>
                  </li>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
