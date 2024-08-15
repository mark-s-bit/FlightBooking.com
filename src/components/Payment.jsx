import React, { useState } from "react";
import "./Payment.css";
import { useNavigate } from 'react-router-dom';

function Payment() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setSuccess(false);

    // Simulate a payment process
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000); // Simulate 2 seconds delay for payment processing

    
  };
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className="container">
      <div className="payment-header">
        <h1>Complete Your Payment</h1>
      </div>
      {!success ? (
        <form className="payment-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name on Card</label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="card-number">Card Number</label>
            <input
              type="text"
              id="card-number"
              placeholder="1234 5678 9012 3456"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              placeholder="123"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="billing-address">Billing Address</label>
            <input
              type="text"
              id="billing-address"
              placeholder="123 Main St"
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? "Processing..." : "Pay Now"}
          </button>
        </form>
      ) : (
        <>
        <div className="success-message">
          <div className="success-icon">&#10004;</div>
          <p>Booked Successful!</p>
        </div>
        <div className="form-buttons">
          <button className="countdown-btn" onClick={handleHomeClick}>Home</button>
        </div>
      </>
      )}
      <div className="security-info">
        <p>Your payment is secure with us.</p>
      </div>
      
      {loading && (
        <div className="spinner">
          <p>Booking...</p>
        </div>
      )}
    </div>
  );
}

export default Payment;
