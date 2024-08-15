import React from "react";
import "./SearchFlight.css"; // Import the CSS file

function SearchFlight() {
  return (
    <div>
      <select className="SelectBox" >
        <option value="">Nairobi</option>
        <option value="">Nakuru</option>
      </select>
      <select className="SelectBoxSecondary" >
        <option value="">Nairobi</option>
        <option value="">Nakuru</option>
      </select>
      <input className="DateInput" type="date"></input>
      <button type="submit">Search</button>
    </div>
  );
}

export default SearchFlight;
