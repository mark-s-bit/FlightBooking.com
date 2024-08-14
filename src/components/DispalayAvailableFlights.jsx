import SearchFlight from "./SearchFlight";
import React from "react";
import FlightDetails from "./FlightDetails";

function DispalayAvailableFlights() {
  return (
    <div
      className="m-0"
      style={{
        overflowY: "auto",
        height: "100vh",
        width: "100%",
        margin: "0px",
        padding: "0px",
        backgroundColor: "black",
        flexWrap: "wrap",
      }}
    >
      <SearchFlight />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap" /* Allow cards to wrap */,
          gap: "20px",
        }}
      >
        <FlightDetails />
      </div>
    </div>
  );
}

export default DispalayAvailableFlights;
