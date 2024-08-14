import React from "react";
import "./Details.css";
import logo from "../assets/logoo.png";
import NavigationBar from "../components/NavigationBar";

function DetailCollection() {
  return (
    <div>
     

      <nav className="navbar">
        <div className="navbar-brand">
          <img src={logo} alt="TravelTicketPro Logo" className="nav-logo" />
          <span className="brand-name">TravelTicketPro</span>
        </div>
      </nav>
      <form className="Detailcontainer">
        <div className="booking-form">
          <div className="form-row-horizontal">
            <input type="text" placeholder="From" />
            <input type="text" placeholder="To" />
          </div>
          <div className="form-row">
            <input type="date" placeholder="24 Aug 2024 1200hrs" />
          </div>
          <div className="form-row">
            <label>No. of people</label>
            <input type="number" />
          </div>
          <div className="form-row">
            <label>Bags</label>
            <input type="number" />
          </div>
          <div className="form-row">
            <label>Class</label>
            <input type="text" />
          </div>
          <div className="form-row">
            <label>Name</label>
            <input type="text" />
          </div>
          <div className="form-row">
            <label>Phone NO.</label>
            <input type="text" />
          </div>
          <div className="form-row">
            <label>Passport No</label>
            <input type="text" />
          </div>
          <div className="form-row">
            <label>Total</label>
            <input type="text" className="total" placeholder="$120000" />
          </div>
          <div className="form-buttons">
            <button className="back-btn" type="button">
              Back
            </button>
            <button type="submit">Book</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default DetailCollection;
