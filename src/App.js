import React, { useState } from "react";
import Clock from "./components/Clock";
import Weather from "./components/Weather";
import Search from "./components/Search";
import Timer from "./components/Timer";
import AppDrawer from "./components/AppDrawer";
import CustomizeModal from "./components/Modals/CustomizeModal";
import WeatherModal from "./components/Modals/WeatherModal";
import TimezoneModal from "./components/Modals/TimezoneModal";
import "./styles/App.css";

const App = () => {
  const [isCustomizeOpen, setIsCustomizeOpen] = useState(false);
  const [isWeatherModalOpen, setIsWeatherModalOpen] = useState(false);
  const [isTimezoneModalOpen, setIsTimezoneModalOpen] = useState(false);

  return (
    <div className="app">
      <div className="container">
        <Clock onClick={() => setIsTimezoneModalOpen(true)} />
        <Weather onClick={() => setIsWeatherModalOpen(true)} />
      </div>
      <Search />
      <Timer />
      <AppDrawer />
      <button className="customize-button" onClick={() => setIsCustomizeOpen(true)}>
        Edit
      </button>
      <CustomizeModal isOpen={isCustomizeOpen} onClose={() => setIsCustomizeOpen(false)} />
      <WeatherModal isOpen={isWeatherModalOpen} onClose={() => setIsWeatherModalOpen(false)} />
      <TimezoneModal isOpen={isTimezoneModalOpen} onClose={() => setIsTimezoneModalOpen(false)} />
    </div>
  );
};

export default App;
