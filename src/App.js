import React from "react";
import Weather from "./Weather";
import "./App.css";
import gitIcon from "./images/icons8-github-128.png";
import linkedinIcon from "./images/icons8-linkedin-circled-128.png";
import instaIcon from "./images/icons8-instagram-128.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Brooklyn" />

        <footer className="srcCodeContainer ">
        <a href="https://www.linkedin.com/in/mikaila-ivery-259218223/" target="_blank"><img src={linkedinIcon} alt="gitHub icon"  width="90px"/></a>  
         <a href="https://www.instagram.com/fkamynk" target="_blank"><img src={instaIcon} alt="gitHub icon"  width="90px"/></a> 
         <a href="https://github.com/IveryMikaila" target="_blank"><img src={gitIcon} alt="gitHub icon"  width="90px"/></a> 
      <div>
          <a
            href="https://github.com/IveryMikaila/weather-react"
            target="_blank"
            rel="noopener noreferrer"
            className="srcLink"
          >
            Open Source Code
          </a>{" "}
         
        by Mikaila Ivery 
        </div>
        </footer>
      </div>
    </div>
  );
}
