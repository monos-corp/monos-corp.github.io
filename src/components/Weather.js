import React, { useState, useEffect } from "react";
import "./styles/Weather.css";

const Weather = ({ onClick }) => {
  const [temperature, setTemperature] = useState("Loading...");
  const [icon, setIcon] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&current_weather=true"
        );
        const data = await response.json();
        setTemperature(`${data.current_weather.temperature}°C`);
        setIcon("☀️"); // Add dynamic icons based on weather code
      } catch (error) {
        setTemperature("Error");
      }
    };

    fetchWeather();
  }, []);

  return (
    <div id="weather" className="weather-widget" onClick={onClick}>
      <span id="temperature" className="temperature">
        {temperature}
      </span>
      <span id="weather-icon" className="weather-icon">
        {icon}
      </span>
    </div>
  );
};

export default Weather;
