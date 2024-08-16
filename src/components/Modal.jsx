// Modal.js
import React, { useState } from "react";
import "./Modal.css";
import { useNavigate } from "react-router-dom";

const Modal = ({ isOpen, onClose, formData }) => {
  const [isLoading, setIsLoading] = useState(false);

  const ticket = useNavigate();

  if (!isOpen) return null;
  const handleConfirm = () => {
    setIsLoading(true);

    setTimeout(() => {
      console.log("Booking confirmed:", formData);
      setIsLoading(false);
      onClose();
      ticket("/payment");
    }, 3000);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{isLoading ? "" : "Booking Details"}</h2>
        {isLoading ? (
          <div className="spinner">Checking Details...</div>
        ) : (
          <div className="booking-details">
            <div className="detail-item">
              <strong>From:</strong> {formData.from}
            </div>
            <div className="detail-item">
              <strong>To:</strong> {formData.to}
            </div>
            <div className="detail-item">
              <strong>Date:</strong> {formData.date}
            </div>
            <div className="detail-item">
              <strong>No. of people:</strong> {formData.people}
            </div>
            <div className="detail-item">
              <strong>Bags:</strong> {formData.bags}
            </div>
            <div className="detail-item">
              <strong>Class:</strong> {formData.class}
            </div>
            <div className="detail-item">
              <strong>Name:</strong> {formData.name}
            </div>
            <div className="detail-item">
              <strong>Phone No.:</strong> {formData.phone}
            </div>
            <div className="detail-item">
              <strong>Passport No:</strong> {formData.passport}
            </div>
            <div className="detail-item">
              <strong>Total:</strong> {formData.total}
            </div>
          </div>
        )}
        {!isLoading && (
          <div className="modal-buttons">
            <button onClick={onClose}>Edit</button>
            <button onClick={handleConfirm}>Confirm</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
