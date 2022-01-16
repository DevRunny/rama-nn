import motoIcon from "../images/icons/moto.svg";
import carIcon from "../images/icons/car.svg";
import truckIcon from "../images/icons/truck.svg";

export const links = [
  {
    id: 1,
    text: "Область аккредитации",
    url: "#categories",
  },
  {
    id: 2,
    text: "Адрес ПТО",
    url: "#adress-pto",
  },
  {
    id: 3,
    text: "Контакты",
    url: "#contacts",
  },
  {
    id: 4,
    text: "Запись на ТО",
    url: "#request",
  },
  {
    id: 5,
    text: "Аттестат",
    url: "#certificate",
  },
];

export const contacts = [
  {
    id: 1,
    class: "nav-adress__text",
    line: <hr />,
    adress: "Московское шоссе, 302а к1",
    tel: "+7 (904) 399-14-50",
  },
];

export const categories = [
  {
    id: 1,
    image: <img src={motoIcon} className="category-icon" alt="moto-icon" />,
    header: <h1>L</h1>,
    line: <hr />,
    text: (
      <h3>
        Мопеды, мотовелосипеды, мокики, мотоциклы, мотороллеры, трициклы,
        квадрициклы.
      </h3>
    ),
  },
  {
    id: 2,
    image: <img src={carIcon} className="category-icon" alt="car-icon" />,
    header: <h1>M1</h1>,
    line: <hr />,
    text: (
      <h3>
        Транспортные средства, используемые для перевозки пассажиров и имеющие,
        помимо места водителя,не более восьми мест для сидения
      </h3>
    ),
  },
  {
    id: 3,
    image: <img src={truckIcon} className="category-icon" alt="truck-icon" />,
    header: <h1>N1</h1>,
    line: <hr />,
    text: (
      <h3>
        Транспортные средства, предназначенные для перевозки грузов, имеющие
        технически допустимую максимальную массу не более 3,5 тонн.
      </h3>
    ),
  },
];
