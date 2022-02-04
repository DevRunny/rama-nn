import React from "react";
import { information } from "./data";
import logo from "../images/icons/logo.svg";
import footerCar from "../images/icons/footercar.svg";
import { footerLinks } from "./data";

export const Footer = () => {
  return (
    <footer>
      <img src={footerCar} className="footer__car-icon" alt="" />
      <div id="footer">
        <div className="container">
          <div className="footer">
            <div className="footer__logo">
              <img src={logo} className="logo" alt="logo" />
              <label className="logo-label">{information.label}</label>
            </div>
            <div className="footer__links">
              {footerLinks.map((link) => {
                return (
                  <li key={link.id}>
                    <a href={link.href}>{link.text}</a>
                  </li>
                );
              })}
            </div>
            <div className="footer__info">
              <span>{information.adress}</span> <hr />{" "}
              <span>
                <a href={information.hrefTel}>{information.tel}</a>
              </span>
            </div>
            <div className="footer__copyright">
              <span>
                Пункт технического осмотра ИП {information.name}
                <br /> 2022
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
