import React, {useState} from "react";

export default function WeatherTemperature(props) {
const [unit, setUnit] = useState("fahrenheit");
function convertToC (event){
  event.preventDefault();
  setUnit("celcius")
}

function convertToF (event){
  event.preventDefault();
  setUnit("fahrenheit");
}

if(unit === "fahrenheit"){
  return (
    <div className="WeatherTemperature">
      <div className="WeatherTemperature-container">
      <span className="temperature">{Math.round(props.celsius)}</span>
      <span className="unit" >°F |{" "}
      <a href="/" onClick={convertToC} >°C</a></span>
      </div>
    </div>
  );
}
else{
  let celsius = (props.celsius - 32) * 5/9 ;
return (
  <div className="WeatherTemperature">
    <div className="WeatherTemperature-container">
    <span className="temperature">{Math.round(celsius)}</span>
    <span className="unit" ><a href="/" onClick={convertToF} >°F |</a>{" "}
   °C</span>
    </div>
  </div>
);
}
}