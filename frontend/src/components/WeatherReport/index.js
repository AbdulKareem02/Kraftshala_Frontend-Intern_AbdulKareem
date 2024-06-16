import {
  WeatherReportBgContainer,
  WeatherReportContainer,
  TepmeratureCard,
} from "./weatherReportStyle";

import "./index.css";

const WeatherReport = (props) => {
  const { theme, weatherDetailsObj } = props;
  const { name, main, wind, weather } = weatherDetailsObj;
  const { temp, humidity } = main;
  const { description, icon } = weather[0];
  const weatherMain = weather[0].main;
  const { speed } = wind;
  const currentTemp = Math.round(temp - 273.15);
  const now = new Date();
  const currentDate = now.toLocaleDateString();
  const currentTime = now.toLocaleTimeString();

  return (
    <WeatherReportBgContainer>
      <h1 className="title">
        Weather Now
        <span>
          {`${currentDate}`} {`${currentTime}`}
        </span>
      </h1>
      <WeatherReportContainer>
        <TepmeratureCard cardTheme={theme}>
          <div>
            <h1>{name}</h1>
            <h1 className="current-temp">
              {currentTemp}
              <sup className="deg-icon">o</sup>
              <img
                className="weather-icon"
                src={`http://openweathermap.org/img/wn/${icon}.png`}
                alt="weather-icon"
              />
            </h1>
            <p className="wether-main">{weatherMain}</p>
          </div>

          <div>
            <h4>Today's Highlights'</h4>
            <div>
              <h2>{description}</h2>
              <p>Humidity : {humidity}%</p>
              <p>Wind Speed : {speed} km/h</p>
            </div>
          </div>
        </TepmeratureCard>
      </WeatherReportContainer>
    </WeatherReportBgContainer>
  );
};

export default WeatherReport;
