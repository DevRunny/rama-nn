import React from "react";
import passport from "../images/passport.png";
import cert from "../images/cert.png";

export const ReqDocuments = () => {
  return (
    <section id="documents">
      <div className="container">
        <div className="required-documents">
          <h1>При себе необходимо иметь:</h1>
          <hr />
          <ul>
            <li>
              <img src={passport} className="passport" alt="passport" />
              <p>
                Документ, удостоверяющий личность <br />
                (паспорт, военный билет или же загранпаспорт)
              </p>
            </li>
            <li>
              <img src={cert} className="cert" alt="sorts" />
              <p>
                Свидетельство о регистрации транспортного средства <br />
                или паспорт транспортного средства
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
