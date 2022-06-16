import motoIcon from "../images/icons/moto.svg";
import carIcon from "../images/icons/car.svg";
import truckIcon from "../images/icons/truck.svg";
import trailerIcon from "../images/icons/trailer.svg";
import lawIcon from "../images/icons/law.svg";
import contractIcon from "../images/icons/contract.svg";
import rulesIcon from "../images/icons/rules.svg";
import qualificationIcon from "../images/icons/qualification.svg";
import doc1 from "../images/files/doc1.png";
import doc2 from "../images/files/doc2.png";

export const information = {
  inn: "525610085089",
  ogrn: "322527500063547",
  numberRSA: "00000",
  name: "Богатырь Кирилл Александрович",
  address: "Московское шоссе, 302а",
  fullAddress: `603092, Нижегородская область, г. Нижний Новгород, Московское шоссе, 302а`,
  tel: "+7 (910) 896-55-50",
  hrefTel: "tel:+79108965505",
  email: "sto-bogatyr@mail.ru",
  hrefEmail: "mailto:sto-bogatyr@mail.ru",
};

export const links = [
  {
    id: 1,
    text: "Область аккредитации",
    href: "#categories",
  },
  {
    id: 2,
    text: "Адрес ПТО",
    href: "#address-pto",
  },
  {
    id: 3,
    text: "Контакты",
    href: "#contacts",
  },
  {
    id: 4,
    text: "Аттестат",
    href: "#certificate",
  },
];

export const footerLinks = [
  {
    id: 1,
    text: "Необходимые документы",
    href: "#documents",
  },
  {
    id: 2,
    text: "Область аккредитации",
    href: "#categories",
  },
  {
    id: 3,
    text: "Принцип работы",
    href: "#features",
  },
  {
    id: 4,
    text: "Контакты",
    href: "#address-pto",
  },
  {
    id: 5,
    text: "Аттестат",
    href: "#certificate",
  },
];

export const categories = [
  {
    id: 1,
    image: (
      <img
        src={ motoIcon }
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
      <img src={ carIcon } className="vehicle-categories__icons" alt="car-icon" />
    ),
    header: "M1",
    text: "Транспортные средства, используемые для перевозки пассажиров и имеющие,помимо места водителя,не более восьми мест для сидения",
  },
  {
    id: 3,
    image: (
      <img
        src={ truckIcon }
        className="vehicle-categories__icons"
        alt="truck-icon"
      />
    ),
    header: "N1",
    text: "Транспортные средства, предназначенные для перевозки грузов, имеющие технически допустимую максимальную массу не более 3,5 тонн.",
  },
  {
    id: 4,
    image: (
      <img
        src={ trailerIcon }
        className="vehicle-categories__icons"
        alt="trailer-icon"
      />
    ),
    header: "O1",
    text: "Прицепы, технически допустимая максимальная масса которых не более 0,75 тонн.",
  },
  {
    id: 5,
    image: (
      <img
        src={ trailerIcon }
        className="vehicle-categories__icons"
        alt="trailer-icon"
      />
    ),
    header: "O2",
    text: "Прицепы, технически допустимая максимальная масса которых свыше 0,75 т, но не более 3,5 тонн.",
  },
];

export const features = [
  {
    id: 1,
    image: <img src={ lawIcon } alt="law-icon" />,
    header: "Соблюдаем Закон РФ",
    text: "Федеральный закон о техническом осмотре транспортных средств можно посмотреть ",
    href: "#",
  },
  {
    id: 2,
    image: <img src={ contractIcon } alt="contract-icon" />,
    header: "Оформляем официально",
    text: "Посмотреть форму договора можно ",
    href: "#",
  },
  {
    id: 3,
    image: <img src={ rulesIcon } alt="rules-icon" />,
    header: "Действуем согласно правилам",
    text: "Посмотреть текст правил технического осмотра ТС можно ",
    href: "#",
  },
  {
    id: 4,
    image: <img src={ qualificationIcon } alt="qualification-icon" />,
    header: "Имеем квалификацию",
    text: "Посмотреть Сертификат сотрудника линии ТО можно ",
    href: "#",
  },
];

export const documents = [
  {
    id: 1,
    image: <img src={ doc1 } alt="doc1" />,
  },
  {
    id: 2,
    image: <img src={ doc2 } alt="doc2" />,
  },
];
