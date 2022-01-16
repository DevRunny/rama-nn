import logo from "../images/icons/logo.svg";
import { links } from "../components/data";
import { contacts } from "../components/data";
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
              <span className={contact.class} key={contact.id.toString()}>
                {contact.adress}
                {contact.line}
                {contact.tel}
              </span>
            );
          })}
        </div>
      </nav>
    </div>
  );
};
