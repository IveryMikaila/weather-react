import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Importing the Component Files
import Form from "./Form";
import Location from "./Location";
import Weather from "./Weather";
import Source from "./Source";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 // <React.StrictMode>
  //  <App />
  //</React.StrictMode>
   <div className="wrapper">
   <div className="weatherApp">
     <Form />
     <Location />
   </div>
   <Weather />
   <Source />
 </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
