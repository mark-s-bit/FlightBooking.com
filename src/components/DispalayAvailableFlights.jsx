import React from "react";
import SearchFlight from "./SearchFlight";
import FlightDetails from "./FlightDetails";
import "./DisplayAvailableFlights.css" 

function DispalayAvailableFlights() {
  return (
    <div className="Container">
      <SearchFlight />
      <div className="FlightsWrapper">
        <FlightDetails />
      </div>
    </div>
  );
}

export default DispalayAvailableFlights;
