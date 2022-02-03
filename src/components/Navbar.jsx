import logo from "../images/icons/logo.svg";
import { links } from "./data";
import { information } from "./data";
import mappoint from "../images/icons/mappoint.svg";

export const Navbar = () => {
  return (
    <section className="navbar">
      <nav>
        <a className="navbar__logo" href="/">
          <img src={logo} className="logo" alt="logo" />
          <label className="logo-label">{information.label}</label>
        </a>
        <div className="navbar__links">
          {links.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            );
          })}
        </div>
        <hr />
        <div className="navbar__info">
          <img src={mappoint} className="mappoint" alt="mpoint" />
          <div className="navbar__contacts">
            <span>{information.adress}</span>
            <hr />
            <span>
              <a href={information.hrefTel}>{information.tel}</a>
            </span>
          </div>
        </div>
      </nav>
    </section>
  );
};
