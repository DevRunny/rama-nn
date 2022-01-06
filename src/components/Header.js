import logo from "../images/logo.svg";
import mappoint from "../images/mappoint.svg";

const Header = () => (
  <header>
    <nav>
      <img src={logo} className="nav-logo" alt="logo" />
      <label className="logo-label">RAMA-NN</label>
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
      <div className="nav-adress">
        <img src={mappoint} className="mappoint" alt="mpoint" />
        <p className="nav-adress__text">Московское шоссе, 302а к1</p>
        <div className="rectangle"></div>
        <p className="nav-adress__text">+7 (904) 399-14-50</p>
      </div>
    </nav>
  </header>
);

export default Header;
