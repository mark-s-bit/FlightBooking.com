import React from "react";
import SearchFlight from "./SearchFlight";
import FlightDetails from "./FlightDetails";
import "./DisplayAvailableFlights.css";
import { useState, useEffect } from "react";

function DispalayAvailableFlights() {
  const url =
  "https://gist.githubusercontent.com/johnson-Omwoyo/b77aa49abb32f3db912d8c3a355d13f8/raw/2de7e9f14dfcd4524c204303de8420571427f508/db.json";
  const [flights, setFlights] = useState([]);
  let filterd;

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setFlights(data.flights);
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
