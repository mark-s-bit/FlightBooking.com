import React from "react";
import NavigationBar from "./NavigationBar";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
function FlightDetails() {
  const detail = useNavigate();
  const onBookFlight = () => {
    detail("/details");
  };
  return (
    <>
      <h2
        style={{
          color: "white",
          marginLeft: "30%",
          textDecoration: "underline",
        }}
      >
        Available Flights
      </h2>
      <div
        style={{
          flex: "1 1 calc(50% - 6%)",
          borderRadius: "2%",
          width: "270px",
          backgroundColor: "#1E1D1B",
          alignItems: "center",
          margin: "8% 0% 2% 6%",
          boxSizing: "border-box",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Card image"
          style={{ width: "100%" }}
        />
        <div className="card-body">
          <h4 className="card-title" style={{ color: "white" }}>
            Nairobi <i className="fa-solid fa-plane"></i>
            Kigali
          </h4>
          <p style={{ color: "white" }} className="card-text">
            Starts From:$550
          </p>
          <button
            onClick={() => onBookFlight()}
            style={{ marginLeft: "40%" }}
            type="button"
          >
            {" "}
            Book Flight
          </button>
        </div>
      </div>
      
    </>
  );
}

export default FlightDetails;
