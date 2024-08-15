import React from "react";
import SearchFlight from "./SearchFlight";
import FlightDetails from "./FlightDetails";
import "./DisplayAvailableFlights.css";
import { useState, useEffect } from "react";

function DispalayAvailableFlights() {
  const url = "http://localhost:3000/flights/";
  const [flights, setFlights] = useState([]);

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

  console.log(flights);

  return (
    <div className="Container">
      <SearchFlight />
      <div className="FlightsWrapper">
        <FlightDetails flights={flights} />
      </div>
    </div>
  );
}

export default DispalayAvailableFlights;
