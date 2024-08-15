import React from "react";
import SearchFlight from "./SearchFlight";
import FlightDetails from "./FlightDetails";
import "./DisplayAvailableFlights.css";
import { useState, useEffect } from "react";

function DispalayAvailableFlights() {
  const url = "http://localhost:3000/flights/";
  const [flights, setFlights] = useState([]);
  let filterd;

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setFlights(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFlights();
  }, []);

  const filterBySearch = (obj) => {
    if (flights.length > 0) {
      filterd = flights.filter(
        (flight) =>
          flight.from == obj.from &&
          flight.to == obj.to &&
          flight.date == obj.date
      );
    }
  };

  // console.log(flights);

  return (
    <div className="Container">
      <div className="searchFlights">
        <SearchFlight flights={flights} filterBySearch={filterBySearch} />
      </div>
      <div className="FlightsWrapper">
        <FlightDetails flights={filterd > 0 ? filterd : flights} />
      </div>
    </div>
  );
}

export default DispalayAvailableFlights;
