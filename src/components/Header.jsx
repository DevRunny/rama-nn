import React from "react";
import { Navbar } from "./Navbar";
import { information } from "./Data";
import { RegButton } from "./RegButton";
import headerMobile from "../images/header-mobile.svg";

export const Header = ({ setOpenItem, setOpenMenu, openMenu }) => {
  return (
    <section>
      <div id="top">
        <Navbar setOpenMenu={ setOpenMenu } openMenu={ openMenu } />
        <img className="header-logo-mobile" src={headerMobile} alt="header-mobile"/>
          <div className="container">
            <div className="header-info">
              <div className="header-info__name">
                <span>Пункт технического осмотра</span>
                <span>ИП: { information.name }</span>
              </div>
              <div className="header-info__requisites">
                <span>
                  Номер в реестре операторов технического осмотра РСА: {""}
                  { information.numberRSA }
                </span>
                <span><div className="header-info__inn"><b>ИНН:</b>{ information.inn }</div></span>
                <span><div className="header-info__ogrn"><b>ОГРН:</b>{ information.ogrn }</div></span>
              </div>
              <RegButton setOpenItem={ setOpenItem } />
            </div>
          </div>
      </div>
    </section>
  );
};
