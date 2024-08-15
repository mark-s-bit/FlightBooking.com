import React from "react";

import NavigationBar from "./NavigationBar";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import "./FlightDetails.css";

function FlightDetails() {
  const detail = useNavigate();
  const onBookFlight = () => {
    detail("/details");
  };
  return (
    <>
      <h2 className="AvailableFlightsTitle">Available Flights</h2>
      <div className="FlightCard">
        <img
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Card image"
          className="FlightCardImage"
        />
        <div className="CardBody">
          <h4 className="card-title">
            Nairobi <i className="fa-solid fa-plane"></i> Kigali
          </h4>

          <p style={{ color: "white" }} className="card-text">
            Starts From:$550
          </p>
          <button
            onClick={() => onBookFlight()}
            className="btn btn-warning BookButton"
            type="button"
          >
            Book Flight
          </button>
        </div>
      </div>
      <div className="FlightCard">
        <img
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Card image"
          className="FlightCardImage"
        />
        <div className="CardBody">
          <h4 className="card-title">
            Nairobi <i className="fa-solid fa-plane"></i> Kigali
          </h4>

          <p style={{ color: "white" }} className="card-text">
            Starts From:$550
          </p>
          <button
            onClick={() => onBookFlight()}
            className="btn btn-warning BookButton"
            type="button"
          >
            Book Flight
          </button>
        </div>
      </div>
    </>
  );
}

export default FlightDetails;
