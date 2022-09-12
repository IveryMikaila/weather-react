import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import locationIcon from "./images/location.png";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>  <img src={locationIcon} alt="location icon" width="17px" /> {props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
            <div>
              <WeatherIcon code={props.data.icon} size={52} />
              <WeatherTemperature celsius={props.data.temperature} className="mainTemp" />
          </div>
      
       <div className="humid-wind" >
            <span className="humid">Humidity: {props.data.humidity}%</span>
            <span className="wind">Wind: {props.data.wind} km/h</span>
          
        </div>
    </div>
  );
}