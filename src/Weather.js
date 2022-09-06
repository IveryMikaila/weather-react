import React from "react";
import cloudIcon from "./images/clouds-256.png";

function Weather() {
  return (
    <div className="WeeklyWeather row">
      <div className="col">
        Wed <br />
        <img src={cloudIcon} alt="cloud Icon" />
        <br />
        50°
      </div>
      <div className="col">
        Thu <br />
        <img src={cloudIcon} alt="cloud Icon" />
        <br />
        56°
      </div>
      <div className="col">
        Fri <br />
        <img src={cloudIcon} alt="cloud Icon" />
        <br />
        51°
      </div>
      <div className="col">
        Sat <br />
        <img src={cloudIcon} alt="cloud Icon" />
        <br />
        52°
      </div>
      <div className="col">
        Sun <br />
        <img src={cloudIcon} alt="cloud Icon" />
        <br />
        45°
      </div>
    </div>
  );
}

export default Weather;