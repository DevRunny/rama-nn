import React from "react";
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
        <div className="container" style={{ height: 0 }}>
          <div id="contacts" className="contacts-block">
            <div className="contacts-info">
              <img src={mapIcon} className="map-icon" alt="map-icon" />
              <h1>Контакты</h1>
              <span>
                603092, Нижегородская область, <br />
                г. Нижний Новгород, Московское шоссе, 302а к1
              </span>
              <hr />
              <a href="tel:+79043991450">+7 (904) 399-14-50</a>
              <a href="mailto:rama-nn@mail.ru">rama-nn@mail.ru</a>
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
          height="100%"
          width="100%"
          defaultState={mapData}
          query={{ lang: "en_RU" }}
        >
          {coordinates.map((coordinate) => (
            <Placemark
              key={coordinate.id}
              geometry={coordinate.coordinate}
              options={{
                iconContent: "Рамыч",
                iconLayout: "default#image",
                iconImageHref: mappoint,
                iconImageSize: [43.09, 57.69],
                iconImageOffset: [-20, -55],
                hideIconOnBalloonOpen: false,
                balloonOffset: [3, -40],
              }}
            />
          ))}
          <TrafficControl options={{ float: "right" }} />
          <ZoomControl options={{ float: "left" }} />
          <TypeSelector options={{ float: "right" }} />
        </Map>
      </YMaps>
    </div>
  );
}

export default MapYandex;
