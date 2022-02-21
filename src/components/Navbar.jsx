import logo from "../images/icons/logo.svg";
import { links } from "./Data";
import { information } from "./Data";
import mappoint from "../images/icons/mappoint.svg";
import burgerMenu from "../images/icons/burgermenu.svg";
import closeBurger from "../images/icons/closeburger.svg";

export const Navbar = ({ openMenu, setOpenMenu }) => {
  return (
    <header>
      <div
        className="burger-menu"
        onClick={(e) => (!openMenu ? setOpenMenu(e) : setOpenMenu(null))}
      >
        <img src={!openMenu ? burgerMenu : closeBurger} alt="burger-menu"/>
      </div>
      <nav className="navbar">
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
          <img src={mappoint} className="mappoint" alt="mappoint" />
          <div className="navbar__contacts">
            <span>{information.address}</span>
            <hr />
            <span>
              <a href={information.hrefTel}>{information.tel}</a>
            </span>
          </div>
        </div>
      </nav>
      <hr />
    </header>
  );
};
