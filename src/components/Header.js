import React from "react";
import logo from "../images/logo.svg";
import { links } from "../components/data";
import { contacts } from "../components/data";
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
            <div className="links-header">
              {links.map((link) => {
                return (
                  <a href={link.url} key={link.id}>
                    {link.text}
                  </a>
                );
              })}
            </div>
            <div className="navbar-adress">
              <img src={mappoint} className="mappoint" alt="mpoint" />
              {contacts.map((contact) => {
                return (
                  <p className={contact.class}>
                    {contact.adress}
                    <hr></hr>
                    {contact.tel}
                  </p>
                );
              })}
            </div>
          </nav>
        </div>
        <div className="container">
          <div className="header-info">
            <div>
              <h1>
                Пункт технического осмотра
                <br></br>
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
