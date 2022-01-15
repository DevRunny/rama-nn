import React from "react";
import motoIcon from "../images/moto.svg";
import carIcon from "../images/car.svg";
import truckIcon from "../images/truck.svg";

export const ScopeOfAccreditation = () => {
  return (
    <div id="categories">
      <div className="container">
        <div className="vehicle-categories">
          <h1>Область аккредитации</h1>
          <h3>Категории транспортных средств</h3>
          <ul>
            <li>
              <img src={motoIcon} className="category-icon" alt="motoIcon" />
              <h1>L</h1>
              <hr></hr>
              <h3>
                Мопеды, мотовелосипеды, мокики, мотоциклы, мотороллеры,
                трициклы, квадрициклы.
              </h3>
            </li>
            <li>
              <img src={carIcon} className="category-icon" alt="motoIcon" />
              <h1>M1</h1>
              <hr></hr>
              <h3>
                Транспортные средства, используемые для перевозки пассажиров и
                имеющие, помимо места водителя,не более восьми мест для сидения
              </h3>
            </li>
            <li>
              <img src={truckIcon} className="category-icon" alt="motoIcon" />
              <h1>N1</h1>
              <hr></hr>
              <h3>
                Транспортные средства, предназначенные для перевозки грузов,
                имеющие технически допустимую максимальную массу не более 3,5
                тонн.
              </h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
