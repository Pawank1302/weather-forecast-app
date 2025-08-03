
import React, { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import "./index.css";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    if (!city) return;
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await res.json();
    if (data.cod === 200) setWeather(data);
    else setWeather(null);
  };

  return (
    <div className="app">
      <h1>🌦️ Weather App</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Get Weather</button>
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default App;
