import logo from "../images/icons/logo.svg";
import { links } from "./data";
import { information } from "./data";
import mappoint from "../images/icons/mappoint.svg";
import burgerMenu from "../images/icons/burgermenu.svg";
import closeBurger from "../images/icons/closeburger.svg";

export const Navbar = ({ openMenu, setOpenMenu }) => {
  return (
    <section className="navbar">
      <div
        className="navbar__burger-menu"
        onClick={(e) => (!openMenu ? setOpenMenu(e) : setOpenMenu(null))}
      >
        <img src={!openMenu ? burgerMenu : closeBurger} alt="burger-menu"></img>
      </div>
      <nav>
        <a className="navbar__logo" href="/">
          <img src={logo} className="logo" alt="logo" />
          <label className="logo-label">{information.label}</label>
        </a>
        <div className="navbar__links">
          {links.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href}>{link.text}</a>
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
      <hr />
    </section>
  );
};
