import logo from "../images/icons/logo.svg";
import { links } from "../components/data";
import { navbarInfo } from "../components/data";
import mappoint from "../images/icons/mappoint.svg";

export const Navbar = () => {
  return (
    <section className="nav-section">
      <nav>
        <a className="nav-logo" href="/">
          <img src={logo} className="logo" alt="logo" />
          <label className="logo-label">RAMA-NN</label>
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

          <div className="navbar-block__info">
            <span className={navbarInfo.classHeader}>{navbarInfo.adress}</span>
            <hr />
            <span className={navbarInfo.classHeader}>{navbarInfo.tel}</span>
          </div>
        </div>
      </nav>
    </section>
  );
};
