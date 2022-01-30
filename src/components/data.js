import motoIcon from "../images/icons/moto.svg";
import carIcon from "../images/icons/car.svg";
import truckIcon from "../images/icons/truck.svg";
import doc1 from "../images/files/doc1.png";
import doc2 from "../images/files/doc2.png";
import doc3 from "../images/files/doc3.png";
import doc4 from "../images/files/doc4.png";

export const information = {
  inn: "260505110827",
  ogrn: "307264213100022",
  numberRSA: "01234",
  name: "Хафизов Рамиль Наилевич",
  adress: "Московское шоссе, 302а к1",
  fullAdress: `603092, Нижегородская область, г. Нижний Новгород, Московское шоссе, 302а к1`,
  tel: "+7 (904) 399-14-50",
  hrefTel: "tel:+79043991450",
  email: "rama-nn@mail.ru",
  hrefEmail: "mailto:rama-nn@mail.ru",
  label: "RAMA-NN",
};

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

export const categories = [
  {
    id: 1,
    image: (
      <img
        src={motoIcon}
        className="vehicle-categories__icons"
        alt="moto-icon"
      />
    ),
    header: "L",
    text: "Мопеды, мотовелосипеды, мокики, мотоциклы, мотороллеры, трициклы, квадрициклы.",
  },
  {
    id: 2,
    image: (
      <img src={carIcon} className="vehicle-categories__icons" alt="car-icon" />
    ),
    header: "M1",
    text: "Транспортные средства, используемые для перевозки пассажиров и имеющие,помимо места водителя,не более восьми мест для сидения",
  },
  {
    id: 3,
    image: (
      <img
        src={truckIcon}
        className="vehicle-categories__icons"
        alt="truck-icon"
      />
    ),
    header: "N1",
    text: "Транспортные средства, предназначенные для перевозки грузов, имеющие технически допустимую максимальную массу не более 3,5 тонн.",
  },
];

export const documents = [
  {
    id: 1,
    image: <img src={doc1} alt="doc1" />,
  },
  {
    id: 2,
    image: <img src={doc2} alt="doc2" />,
  },
  {
    id: 3,
    image: <img src={doc3} alt="doc3" />,
  },
  {
    id: 4,
    image: <img src={doc4} alt="doc4" />,
  },
];
