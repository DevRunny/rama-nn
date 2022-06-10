import React from "react";
import { information } from "./Data";
import mapIcon from "../images/icons/mapicon.svg";
import mappoint from "../images/icons/mappoint.svg";
import { Map, Placemark, TrafficControl, TypeSelector, YMaps, ZoomControl, } from "react-yandex-maps";
import { RegButton } from "./RegButton";

const mapData = {
  center: [ 56.30942993477912, 43.8257589776912 ],
  zoom: 16,
};

const coordinates = [
  {
    id: 1,
    coordinate: [ 56.30942993477912, 43.8257589776912 ],
  },
];

export const MapYandex = ({ setOpenItem }) => {
  return (
    <div className="map-yandex">
      <img
        src={ mapIcon }
        className="map-yandex__map-icon"
        alt="map-icon"
      />
      <div id="address-pto">
        <div className="container address-pto">
          <div id="contacts" className="contacts">
            <div className="contacts__info">
              <img
                src={ mapIcon }
                className="contacts__map-icon"
                alt="map-icon"
              />
              <h1>Контакты</h1>
              <span>{ information.fullAddress }</span>
              <hr />
              <a href={ information.hrefTel }>{ information.tel }</a>
              <hr />
              <a href={ information.hrefEmail }>{ information.email }</a>
              <hr />
              <span>
                Режим работы с 9:00 до 18:00 <br />
                Без выходных
              </span>
              <hr />
              <RegButton setOpenItem={ setOpenItem } />
            </div>
          </div>
        </div>
      </div>
      <YMaps>
        <Map
          className="map-yandex"
          defaultState={ mapData }
          instanceRef={ (ref) => {
            ref && ref.behaviors.disable("scrollZoom");
          } }
        >
          { coordinates.map((coordinate) => (
            <Placemark
              key={ coordinate.id }
              geometry={ coordinate.coordinate }
              options={ {
                iconLayout: "default#image",
                iconImageHref: mappoint,
                iconImageSize: [ 43.09, 57.69 ],
                iconImageOffset: [ -18, -58 ],
                hideIconOnBalloonOpen: true,
                openBalloonOnClick: true,
              } }
              properties={{
                hintContent: `ИП: ${information.name}`,
                balloonContent: `<b>ИП: ${information.name}</b>
                  <br />${information.address}`
              }}
              modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
            />
          )) }
          <TrafficControl options={ { position: { top: 80, right: 10 } } } />
          <ZoomControl
            options={ {
              size: "auto",
              position: { top: 300, bottom: "auto", left: "auto", right: 10 },
            } }
          />
          <TypeSelector options={ { position: { top: 40, right: 10 } } } />
        </Map>
      </YMaps>
    </div>
  );
};
