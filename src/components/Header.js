import React from "react";
import logo from "../images/logo.svg";
import mappoint from "../images/mappoint.svg";
import { RegButton } from "./RegButton";

export const Header = () => {
  return (
    <header>
      <div id="top">
        <div className="nav-section">
          <nav>
            <a className="nav-logo" href="/">
              <img src={logo} className="logo" alt="logo" />
              <label className="logo-label">RAMA-NN</label>
            </a>
            <ul>
              <li>
                <a href="#">Область аккредитации</a>
              </li>
              <li>
                <a href="#">Адрес ПТО</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
              <li>
                <a href="#">Запись на ТО</a>
              </li>
              <li>
                <a href="#">Аттестат</a>
              </li>
            </ul>
            <div className="navbar-adress">
              <img src={mappoint} className="mappoint" alt="mpoint" />
              <p className="nav-adress__text">Московское шоссе, 302а к1</p>
              <hr></hr>
              <p className="nav-adress__text">+7 (904) 399-14-50</p>
            </div>
          </nav>
        </div>
        <div className="header-info">
          <div>
            <h1>
              Пункт технического осмотра
              <br></br>
              ИП: Хафизов Рамиль Наилевич
            </h1>
            <h3>Номер в реестре операторов технического осмотра РСА: 01234</h3>
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
    </header>
  );
};
