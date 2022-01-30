import React from "react";
import { information } from "./data";
import mapIcon from "../images/icons/mapicon.svg";
import mappoint from "../images/icons/mappoint.svg";
import {
  YMaps,
  Map,
  Placemark,
  TrafficControl,
  ZoomControl,
  TypeSelector,
} from "react-yandex-maps";
import { RegButton } from "./RegButton";

const mapData = {
  center: [56.30942993477912, 43.8257589776912],
  zoom: 16,
};

const coordinates = [
  {
    id: 1,
    coordinate: [56.30942993477912, 43.8257589776912],
  },
];

function MapYandex() {
  return (
    <div className="map-yandex">
      <div id="adress-pto">
        <div className="container adress-pto">
          <div id="contacts" className="contacts">
            <div className="contacts__info">
              <img
                src={mapIcon}
                className="contacts__map-icon"
                alt="contacts__map-icon"
              />
              <h1>Контакты</h1>
              <span>{information.fullAdress}</span>
              <hr />
              <a href={information.hrefTel}>{information.tel}</a>
              <a href={information.hrefEmail}>{information.email}</a>
              <span>
                Режим работы с 9:00 до 18:00 <br />
                Без выходных
              </span>
              <RegButton />
            </div>
          </div>
        </div>
      </div>
      <YMaps>
        <Map
          className="map-yandex"
          defaultState={mapData}
          query={{ lang: "en_RU" }}
          instanceRef={(ref) => {
            ref && ref.behaviors.disable("scrollZoom");
          }}
        >
          {coordinates.map((coordinate) => (
            <Placemark
              key={coordinate.id}
              geometry={coordinate.coordinate}
              options={{
                iconLayout: "default#image",
                iconImageHref: mappoint,
                iconImageSize: [43.09, 57.69],
                iconImageOffset: [-20, -55],
                balloonOffset: [3, -40],
                hideIconOnBalloonOpen: true,
                openBalloonOnClick: true,
              }}
            />
          ))}
          <TrafficControl options={{ float: "right" }} />
          <ZoomControl
            options={{
              size: "auto",
              position: { top: 300, bottom: "auto", left: "auto", right: 10 },
            }}
          />
          <TypeSelector options={{ float: "right" }} />
        </Map>
      </YMaps>
    </div>
  );
}

export default MapYandex;