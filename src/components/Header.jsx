import React from "react";
import { Navbar } from "./Navbar";
import { information } from "./Data";
import { RegButton } from "./RegButton";

export const Header = ({ setOpenItem, setOpenMenu, openMenu }) => {
  return (
    <section>
      <div id="top">
        <Navbar setOpenMenu={setOpenMenu} openMenu={openMenu} />
        <div className="container">
          <div className="header-info">
            <h1>
              Пункт технического осмотра
              <br />
              ИП: {information.name}
            </h1>
            <h3>
              Номер в реестре операторов технического осмотра РСА:{" "}
              {information.numberRSA}
            </h3>
            <div className="header-info__requisites">
              <dt>
                ИНН:<span>{information.inn}</span>
              </dt>
              <dt>
                ОГРН:<span>{information.ogrn}</span>
              </dt>
            </div>
            <RegButton setOpenItem={setOpenItem} />
          </div>
        </div>
      </div>
    </section>
  );
};
