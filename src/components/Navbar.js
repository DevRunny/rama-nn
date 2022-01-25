import logo from "../images/icons/logo.svg";
import { links } from "../components/data";
import { information } from "../components/data";
import mappoint from "../images/icons/mappoint.svg";

export const Navbar = () => {
  return (
    <section className="nav-section">
      <nav>
        <a className="nav-logo" href="/">
          <img src={logo} className="logo" alt="logo" />
          <label className="logo-label">{information.label}</label>
        </a>
        <div className="header__links">
          {links.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            );
          })}
        </div>
        <hr />
        <div className="navbar-info">
          <img src={mappoint} className="mappoint" alt="mpoint" />

          <div className="navbar__info">
            <span className={information.classHeader}>
              {information.adress}
            </span>
            <hr />
            <span className={information.classHeader}>{information.tel}</span>
          </div>
        </div>
      </nav>
    </section>
  );
};
