import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Ticket.css';  

function Ticket() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className="container">
      <h1 className="ticket-title">Your Ticket</h1>
      <div className="ticket-form">
        <div className="form-row-horizontal">
          <input type="text" placeholder="From" />
          <input type="text" placeholder="To" />
        </div>
        <div className="form-row">
          <input type="date" />
        </div>
        <div className="form-row">
          <label>Members</label>
          <input type="number" placeholder="" />
        </div>
        <div className="form-row">
          <label>Bags</label>
          <input type="number" placeholder="" />
        </div>
        <div className="form-row">
          <label>Class</label>
          <input type="text" placeholder="" />
        </div>
        <div className="form-row">
          <label>Total</label>
          <input type="text" placeholder="$120000" className="total" />
        </div>
        <div className="form-buttons">
          <button className="countdown-btn" onClick={handleHomeClick}>Home</button>
        </div>
        <div className="cancel-text">
          <p>To Cancel Contact Us {" "}
              <a href="https://aaes.aero/flight-support-services/">
                FlightBooking.com
              </a></p>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
