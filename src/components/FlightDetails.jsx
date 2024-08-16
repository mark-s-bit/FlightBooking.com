import React, { useEffect, useState } from "react";

import NavigationBar from "./NavigationBar";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import "./FlightDetails.css";

function FlightDetails({ flights }) {
  const detail = useNavigate();
  const onBookFlight = (id) => {
    detail("/details", { state: id });
  };

  return (
    <div>
      <h2 className="AvailableFlightsTitle">Available Flights</h2>
      {flights.length > 0 ? (
        flights.map((flight) => {
          return (
            <div key={flight.id}>
              <div className="FlightCard">
                <img
                  src={flight.image}
                  alt="Card image"
                  className="FlightCardImage"
                />
                <div className="CardBody">
                  <h4 className="card-title">
                    {flight.from}
                    <i className="fa-solid fa-plane"></i>
                    {flight.to}
                  </h4>

                  <p style={{ color: "white" }} className="card-text">
                    <b>Date:</b>
                    {flight.date}
                  </p>
                  <p style={{ color: "white" }} className="card-text">
                    <b>Starts From:</b>${flight.cost} Only
                  </p>
                  <button
                    onClick={() => onBookFlight(flight.id)}
                    className="btn btn-warning BookButton"
                    type="button"
                  >
                    Book Flight
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h2 className="AvailableFlightsTitle">No flights available</h2>
      )}
    </div>
  );
}

export default FlightDetails;
