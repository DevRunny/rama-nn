import React from "react";
import lawIcon from "../images/icons/law.svg";
import contractIcon from "../images/icons/contract.svg";
import rulesIcon from "../images/icons/rules.svg";
import qualificationIcon from "../images/icons/qualification.svg";

export const Features = () => {
  return (
    <section id="features">
      <div className="container">
        <div className="features-list">
          <ul>
            <li>
              <img src={lawIcon} alt="law-icon"></img>
              <h1>Соблюдаем Закон РФ</h1>
              <p>
                Федеральный закон о техническом осмотре транспортных средств
                можно посмотреть <a href="#">здесь</a>.
              </p>
            </li>
            <li>
              <img src={contractIcon} alt="contract-icon"></img>
              <h1>Оформляем официально</h1>
              <p>
                Посмотреть форму договора можно <a href="#">здесь</a>.
              </p>
            </li>
            <li>
              <img src={rulesIcon} alt="rules-icon"></img>
              <h1>Действуем согласно правилам</h1>
              <p>
                Посмотреть текст правил технического осмотра ТС можно{" "}
                <a href="#">здесь</a>.
              </p>
            </li>
            <li>
              <img src={qualificationIcon} alt="qualification-icon"></img>
              <h1>Имеем квалификацию</h1>
              <p>
                Посмотреть Сертификат сотрудника линии ТО можно{" "}
                <a href="#">здесь</a>.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
