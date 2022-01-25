import React from "react";
import { information } from "../components/data";
import logo from "../images/icons/logo.svg";

export const Footer = () => {
  return (
    <footer>
      <div id="footer">
        <div className="container">
          <div className="footer">
            <div className="footer__logo">
              <img src={logo} className="logo" alt="logo" />
              <label className="logo-label">{information.label}</label>
            </div>
            <div className="footer__links">
              <li>
                <a href="#documents">Необходимые документы</a>
              </li>
              <li>
                <a href="#categories">Область аккредитации</a>
              </li>
              <li>
                <a href="#features">Принцип работы</a>
              </li>
              <li>
                <a href="#adress-pto">Контакты</a>
              </li>
              <li>
                <a href="#certificate">Аттестат</a>
              </li>
            </div>
            <div className="footer__info">
              <span>{information.adress}</span> <hr />{" "}
              <span>{information.tel}</span>
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
