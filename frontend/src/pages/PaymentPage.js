import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Payment.css"; // external CSS file

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedSeats, movie } = location.state || {};

  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePayment = (e) => {
    e.preventDefault();

    if (!paymentMethod) {
      alert("Please select a payment method!");
      return;
    }

    const paymentSuccess = Math.random() > 0.2;

    if (paymentSuccess) {
      alert("Payment Successful!");
      navigate("/"); // redirect to home
    } else {
      alert("Payment Failed! Please try again.");
    }
  };

  return (
    <div className="payment-container">
      <h2>Payment for {movie?.title || "Unknown Movie"}</h2>
      <p>Seats: {selectedSeats?.join(", ") || "No seats selected"}</p>

      <form onSubmit={handlePayment} className="payment-form">
        <h3>Select Payment Method</h3>
        <div className="payment-options">
          <button
            type="button"
            className={`payment-btn ${paymentMethod === "card" ? "selected" : ""}`}
            onClick={() => setPaymentMethod("card")}
          >
            Credit/Debit Card
          </button>

          <button
            type="button"
            className={`payment-btn ${paymentMethod === "upi" ? "selected" : ""}`}
            onClick={() => setPaymentMethod("upi")}
          >
            UPI
          </button>

          <button
            type="button"
            className={`payment-btn ${paymentMethod === "netbanking" ? "selected" : ""}`}
            onClick={() => setPaymentMethod("netbanking")}
          >
            Net Banking
          </button>
        </div>

        <button type="submit" className="confirm-btn">
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Payment;
