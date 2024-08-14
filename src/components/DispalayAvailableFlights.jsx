import SearchFlight from "./SearchFlight";
import React from "react";
import FlightDetails from "./FlightDetails";

function DispalayAvailableFlights() {
  return (
    <div
      className="m-0"
      style={{
        height: "100%",
        width: "100%",
        margin: "0px",
        padding: "0px",
        backgroundColor: "black",
      }}
    >
      <SearchFlight />
      <FlightDetails />
    </div>
  );
}

export default DispalayAvailableFlights;
