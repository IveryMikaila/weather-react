import React from "react";
import locationIcon from "./images/location.png";
import sunIcon from "./images/sun-24.png";

function Location() {
  let weatherData = {
    city: " New York",
    day: "Tuesday",
    date: "April 12",
    time: "4:44 PM",
    temp: "71",
    description: "SUNNY",
    humidity: "41",
    wind: "7"
  };

  return (
    <div className="Location">
      <h1 className="myLocation">
        <img src={locationIcon} alt="location icon" width="17px" />
        <span>{weatherData.city} </span>
      </h1>
      <div className="time">
        {weatherData.day}, {weatherData.date} - {weatherData.time}
      </div>
      <div className="degrees">
        <a className="celsius" href="">
          °C
        </a>
        {"  "}|
        <a className="farenheit" href="">
          °F
        </a>
        {"  "}
      </div>
      <div className="locationTemp">
        <img src={sunIcon} alt="sun icon" />
        <span>
          <strong> {weatherData.temp}° </strong>
        </span>
      </div>

      <div className="description">{weatherData.description}</div>

      <div className="row hourlyTemp">
        <div className="col-2 space" />
        <div className="col-2 ">
          5 PM <br />
          <img src={sunIcon} alt="sun Icon" />
          <br />
          70°
        </div>
        <div className="col-2 ">
          6 PM <br />
          <img src={sunIcon} alt="sun Icon" />
          <br />
          69°
        </div>
        <div className="col-2 ">
          7 PM <br />
          <img src={sunIcon} alt="sun Icon" />
          <br />
          66°
        </div>
        <div className="col-2 ">
          8 PM <br />
          <img src={sunIcon} alt="sun Icon" />
          <br />
          61°
        </div>
        <div className="col-2 space" />
      </div>

      <div className="row locationConditions">
        <div className="col-2 space" />
        <div className="col-4 humidity">
          Humidity <br />
          {weatherData.humidity}%
        </div>
        <div className="col-4 wind">
          Wind <br />
          {weatherData.wind} mph
        </div>
        <div className="col-2 space" />
      </div>
    </div>
  );
}

export default Location;