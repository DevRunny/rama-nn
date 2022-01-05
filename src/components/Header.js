import logo from "../images/logo.svg";

const Header = () => (
  <header>
    <nav>
      <img src={logo} className="logo" alt="logo" />
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
      <div>
        <img src={logo} className="logo" alt="logo" />
      </div>
    </nav>
  </header>
);

export default Header;
