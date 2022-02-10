import React from "react";
import { Navbar } from "./Navbar";
import { information } from "./data";
import { RegButton } from "./RegButton";

export const Header = ({ setOpenItem, setOpenMenu, openMenu }) => {
  return (
    <header>
      <div id="top">
        <Navbar setOpenMenu={setOpenMenu} openMenu={openMenu} />
        <div className="container">
          <div className="header__info">
            <div>
              <h1>
                Пункт технического осмотра
                <br />
                ИП: {information.name}
              </h1>
              <h3>
                Номер в реестре операторов технического осмотра РСА:{" "}
                {information.numberRSA}
              </h3>
              <table className="header__requisites">
                <tbody>
                  <tr>
                    <td>
                      <span>ИНН:</span>
                    </td>
                    <td>{information.inn}</td>
                  </tr>
                  <tr>
                    <td>
                      <span>ОГРН:</span>
                    </td>
                    <td>{information.ogrn}</td>
                  </tr>
                </tbody>
              </table>
              <RegButton setOpenItem={setOpenItem} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
