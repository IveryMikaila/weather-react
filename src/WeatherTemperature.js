import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <div className="WeatherTemperature-container">
      <span className="temperature">{Math.round(props.celsius)}</span>
      <span className="unit">°F</span>
      </div>
    </div>
  );
}