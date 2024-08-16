import React from "react";
import { useNavigate } from "react-router-dom";
import "./Ticket.css";

function Ticket() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <div className="container">
      <h1 className="about-title">About Us</h1>
      <div className="about-content">
        <p>
          Welcome to FlightBooking.com, your premier source for flight bookings and travel services. Our mission is to provide you with a seamless and enjoyable travel experience. With a wide range of options and dedicated customer support, we are here to assist you every step of the way.
        </p>
        <p>
          Our team of experienced professionals is committed to helping you find the best deals and ensuring your journey is smooth and stress-free. From booking your flights to managing your itinerary, we are here to make your travel experience as enjoyable as possible.
        </p>
        <p>
          For more information about our services or to get in touch with our support team, please visit our <a href="https://aaes.aero/flight-support-services/" target="_blank" rel="noopener noreferrer">Flight Support Services</a> page.
        </p>
      </div>
      <div className="form-buttons">
        <button className="countdown-btn" onClick={handleHomeClick}>
          Home
        </button>
      </div>
    </div>
  );
}

export default Ticket;
