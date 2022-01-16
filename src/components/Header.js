import React from "react";
import { Navbar } from "./Navbar";
import { RegButton } from "./RegButton";

export const Header = () => {
  return (
    <header>
      <div id="top">
        <Navbar />
        <div className="container">
          <div className="header-info">
            <div>
              <h1>
                Пункт технического осмотра
                <br />
                ИП: Хафизов Рамиль Наилевич
              </h1>
              <h3>
                Номер в реестре операторов технического осмотра РСА: 01234
              </h3>
              <table className="requisites">
                <tbody>
                  <tr>
                    <td>
                      <span>ИНН:</span>
                    </td>
                    <td>260505110827</td>
                  </tr>
                  <tr>
                    <td>
                      <span>ОГРН:</span>
                    </td>
                    <td>307264213100022</td>
                  </tr>
                </tbody>
              </table>
              <RegButton />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
