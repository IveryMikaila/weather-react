import React from "react";
import searchIcon from "./images/search-13-256.png";

function Form() {
  return (
    <div className="searchBar">
      <form>
        <input type="search" className="search" placeholder=" Enter a City" />
        <button type="submit" className="searchButton">
          <img src={searchIcon} alt="search icon" width="20px" height="20px" />
        </button>
      </form>
    </div>
  );
}

export default Form;
