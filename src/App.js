import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Moment from "react-moment";
import moment from "moment";

import {
  faCloudRain,
  faCloudBolt,
  faSnowflake,
  faSmog,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

import "./App.scss";

moment.updateLocale("en", {
  weekdays: [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ],
});

const baseURL =
  "https://api.open-meteo.com/v1/forecast?latitude=50.45&longitude=30.52&hourly=weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto";

export default function App() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setWeather(response.data);
    });
  }, []);

  if (!weather) return "No weather data!";

  const timeList = weather.daily.time;
  const tempMaxList = weather.daily.temperature_2m_max;
  const tempMinList = weather.daily.temperature_2m_min;
  const weatherCode = weather.daily.weathercode;
  const weatherCodeItems = weatherCode.map((codes, i) => {
    if (codes === 0) {
      return (
        <p key={i}>
          <FontAwesomeIcon icon={faSun} />
          Ясно
        </p>
      );
    }
    if (codes === 1) {
      return (
        <p key={i}>
          <FontAwesomeIcon icon={faSun} />
          Переменная облачность
        </p>
      );
    }
    if (codes === 2) {
      return (
        <p key={i}>
          <FontAwesomeIcon icon={faSun} />
          Переменная облачность
        </p>
      );
    }
    if (codes === 3) {
      return (
        <p key={i}>
          <FontAwesomeIcon icon={faSun} />
          Переменная облачность
        </p>
      );
    }
    if (codes === 45) {
      return (
        <p key={i}>
          <FontAwesomeIcon icon={faSmog} />
          Туман и изморозь
        </p>
      );
    }
    if (codes === 48) {
      return (
        <p key={i}>
          <FontAwesomeIcon icon={faSmog} />
          Туман и изморозь
        </p>
      );
    }
    if (codes === 51) {
      return (
        <p key={i}>
          <FontAwesomeIcon icon={faCloudRain} />
          Морось легкая
        </p>
      );
    }
    if (codes === 53) {
      return (
        <p key={i}>
          <FontAwesomeIcon icon={faCloudRain} />
          Морось умеренная
        </p>
      );
    }
    if (codes === 55) {
      return (
        <p key={i}>
          <FontAwesomeIcon icon={faCloudRain} />
          Морось плотная
        </p>
      );
    }
    if (codes === 56) {
      return (
        <p key={i}>
          <FontAwesomeIcon icon={faCloudRain} />
          Ледяная морось легкая
        </p>
      );
    }
    if (codes === 57) {
      return (
        <p key={i}>
          <FontAwesomeIcon icon={faCloudRain} />
          Ледяная морось плотная
        </p>
      );
    }
    if (codes === 61) {
      return (
        <p key={i}>
          <FontAwesomeIcon icon={faCloudRain} />
          Дождь слабый
        </p>
      );
    }
    if (codes === 63) {
      return (
        <p key={i}>
          <FontAwesomeIcon icon={faCloudRain} />
          Дождь умеренный
        </p>
      );
    }
    if (codes === 65) {
      return (
        <p key={i}>
          <FontAwesomeIcon icon={faCloudRain} />
          Дождь сильный
        </p>
      );
    }
    if (codes === 66) {
      return (
        <p key={i}>
          <FontAwesomeIcon icon={faCloudRain} />
          Ледяной дождь легкий
        </p>
      );
    }
    if (codes === 67) {
      return (
        <p key={i}>
          <FontAwesomeIcon icon={faCloudRain} />
          Ледяной дождь сильный
        </p>
      );
    }
    if (codes === 71) {
      return (
        <p key={i}>
          <FontAwesomeIcon icon={faSnowflake} />
          Снегопад слабый
        </p>
      );
    }
    if (codes === 73) {
      return (
        <p key={i}>
          <FontAwesomeIcon icon={faSnowflake} />
          Снегопад средний
        </p>
      );
    }
    if (codes === 75) {
      return (
        <p key={i}>
          <FontAwesomeIcon icon={faSnowflake} />
          Снегопад сильный
        </p>
      );
    }
    if (codes === 77) {
      return (
        <p key={i}>
          <FontAwesomeIcon icon={faSnowflake} />
          Легкий снег
        </p>
      );
    }
    if (codes === 80) {
      return (
        <p key={i}>
          <FontAwesomeIcon icon={faCloudRain} />
          Ливень
        </p>
      );
    }
    if (codes === 81) {
      return (
        <p key={i}>
          <FontAwesomeIcon icon={faCloudRain} />
          Ливень
        </p>
      );
    }
    if (codes === 82) {
      return (
        <p key={i}>
          <FontAwesomeIcon icon={faCloudRain} />
          Ливень
        </p>
      );
    }
    if (codes === 85) {
      return (
        <p key={i}>
          <FontAwesomeIcon icon={faCloudRain} />
          Слабый снег
        </p>
      );
    }
    if (codes === 86) {
      return (
        <p key={i}>
          <FontAwesomeIcon icon={faCloudRain} />
          Сильный снег
        </p>
      );
    }
    if (codes === 95) {
      return (
        <p key={i}>
          <FontAwesomeIcon icon={faCloudBolt} />
          Гроза
        </p>
      );
    }
    if (codes === 96) {
      return (
        <p key={i}>
          <FontAwesomeIcon icon={faCloudBolt} />
          Гроза и град
        </p>
      );
    }
    if (codes === 99) {
      return (
        <p key={i}>
          <FontAwesomeIcon icon={faCloudBolt} />
          Гроза и град
        </p>
      );
    }

    return null;
  });
  const timeItems = timeList.map((weatherDay, i) => (
    <li key={i}>
      {weatherDay.slice(8) +
        "." +
        weatherDay.slice(5, 7) +
        "." +
        weatherDay.slice(0, 4)}
    </li>
  ));
  const tempMaxItems = tempMaxList.map((tempMax, i) => (
    <li key={i}>{tempMax}</li>
  ));
  const tempMinItems = tempMinList.map((tempMin, i) => (
    <li key={i}>{tempMin}</li>
  ));

  return (
    <>
      <div className="wrapper">
        <div class="widget-container">
          <div className="widget-container__top">
            <div className="widget-container__top__left">
              <div className="widget-container__top__left-content">
                <h2>Прогноз погоды</h2>
                <h3>
                  <Moment format="dddd" />
                </h3>
                <h3>{timeItems[0]}</h3>
                <h3>
                  <Moment format="HH:mm" />
                </h3>
              </div>
            </div>
            <div className="widget-container__top__right">
              <div className="widget-container__top__right-content">
                <h3>{weather.timezone ? "Kyiv, Ukraine" : null}</h3>
                <>{weatherCodeItems[0]}</>
              </div>
            </div>
          </div>

          <div className="widget-container__bottom">
            <div className="widget-container__bottom-left">
              <span>{tempMaxItems[0]}</span>
              <span>°C</span>
              <span>/</span>
              <span>{tempMinItems[0]}</span>
              <span>°C</span>
            </div>
            <div className="widget-container__bottom-right">
              <div className="widget-container__bottom-right__time">
                <p>{timeItems}</p>
              </div>
              <div className="widget-container__bottom-right__weather">
                <p>{weatherCodeItems}</p>
              </div>
              <div className="widget-container__bottom-right__tempMax">
                <p>{tempMaxItems}</p>
              </div>
              <div className="widget-container__bottom-right__tempMin">
                <p>{tempMinItems}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
