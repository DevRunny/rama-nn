import React from "react";
import { Navbar } from "./Navbar";
import { information } from "./Data";
import { RegButton } from "./RegButton";

export const Header = ({ setOpenItem, setOpenMenu, openMenu }) => {
  return (
    <section>
      <div id="top">
        <Navbar setOpenMenu={ setOpenMenu } openMenu={ openMenu } />
        <div id="mobile-top">
          <div className="container">
            <div className="header-info">
              <h1>
                Пункт технического осмотра
                <br />
                ИП: { information.name }
              </h1>
              <h3>
                Номер в реестре операторов технического осмотра РСА:{ " " }
                { information.numberRSA }
              </h3>
              <div className="header-info__requisites">
                <span>ИНН:</span><span>{ information.inn }</span>
                <br />
                <span>ОГРН:</span><span>{ information.ogrn }</span>
              </div>
              <RegButton setOpenItem={ setOpenItem } />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
