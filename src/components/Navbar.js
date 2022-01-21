import logo from "../images/icons/logo.svg";
import { links } from "../components/data";
import { navbarInfo } from "../components/data";
import mappoint from "../images/icons/mappoint.svg";

export const Navbar = () => {
  return (
    <div className="nav-section">
      <nav>
        <a className="nav-logo" href="/">
          <img src={logo} className="logo" alt="logo" />
          <label className="logo-label">RAMA-NN</label>
        </a>
        <div className="links-header">
          {links.map((link) => {
            return (
              <li>
                <a href={link.url} key={link.id}>
                  {link.text}
                </a>
              </li>
            );
          })}
        </div>
        <hr />
        <div className="navbar-info">
          <img src={mappoint} className="mappoint" alt="mpoint" />
          {navbarInfo.map((info) => {
            return (
              <div className="navbar-block__info">
                <span className={info.class} key={info.id}>
                  {info.adress}
                </span>
                <hr />
                <span className={info.class} key={info.id}>
                  {info.tel}
                </span>
              </div>
            );
          })}
        </div>
      </nav>
    </div>
  );
};
