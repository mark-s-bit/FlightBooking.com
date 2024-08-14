import React from "react";
import "./Payment.css";

function Payment() {
  return (
    <div className="container">
      <div className="payment-header">
        <h1>Complete Your Payment</h1>
      </div>
      <form className="payment-form">
        <div className="form-group">
          <label htmlFor="name">Name on Card</label>
          <input
            type="text"
            id="name"
            placeholder="jonh doe"
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
          <label htmlFor="expiry-date">Expiry Date</label>
          <input
            type="date"
            id="expiry-date"
            placeholder="MM/YY"
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
        <button type="submit" className="btn-primary">
          Pay Now
        </button>
      </form>
      <div className="security-info">
        <p>Your payment is secure with us.</p>
      </div>
    </div>
  );
}

export default Payment;
