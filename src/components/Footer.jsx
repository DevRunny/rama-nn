import React from "react";
import { footerLinks, information } from "./Data";
import logo from "../images/icons/logo.svg";

export const Footer = () => {
  return (
    <footer>
      <div id="footer">
        <div className="footer">
          <span className="footer__phone">
                <a href={ information.hrefTel }>{ information.tel }</a>
          </span>
          <div className="container">
            <div className="footer__logo">
              <img src={ logo } className="logo-footer" alt="logo" />
            </div>
            <div className="footer__links">
              { footerLinks.map((link) => {
                return (
                  <li key={ link.id }>
                    <a href={ link.href }>{ link.text }</a>
                  </li>
                );
              }) }
            </div>
            <div className="footer__info">
              <span>{ information.address }</span>
              <hr />
              { " " }
              <span>
                <a href={ information.hrefTel }>{ information.tel }</a>
              </span>
            </div>
            <div className="footer__copyright">
              <span>
                Пункт технического осмотра ИП { information.name }
                <br /> 2022
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
