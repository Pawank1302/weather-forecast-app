
import React from "react";

const WeatherCard = ({ weather }) => {
  return (
    <div className="card">
      <h2>{weather.name}, {weather.sys.country}</h2>
      <p>{weather.weather[0].description}</p>
      <h3>{Math.round(weather.main.temp)}°C</h3>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind: {weather.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
