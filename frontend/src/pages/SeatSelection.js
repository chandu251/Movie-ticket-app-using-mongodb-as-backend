import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./SeatSelection.css"; // optional external CSS

const SeatSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { movie } = location.state || {};

  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    const allSeats = [];
    for (let i = 1; i <= 200; i++) {
      allSeats.push({ number: i, booked: false }); // booked can be dynamic later
    }
    setSeats(allSeats);
  }, []);

  const toggleSeat = (seatNumber) => {
    setSelectedSeats((prev) =>
      prev.includes(seatNumber)
        ? prev.filter((s) => s !== seatNumber)
        : [...prev, seatNumber]
    );
  };

  const handleConfirmSeats = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat!");
      return;
    }
    navigate("/payment", { state: { selectedSeats, movie } });
  };

  return (
    <div className="seat-container">
      <h2>Select Seats for {movie?.title}</h2>
      <div className="screen">SCREEN</div>
      <div className="seats-grid">
        {seats.map((seat) => (
          <button
            key={seat.number}
            disabled={seat.booked}
            className={`seat ${
              seat.booked ? "booked" : selectedSeats.includes(seat.number) ? "selected" : ""
            }`}
            onClick={() => toggleSeat(seat.number)}
          >
            {seat.number}
          </button>
        ))}
      </div>
      <p>Selected Seats: {selectedSeats.join(", ") || "None"}</p>
      <button className="confirm-btn" onClick={handleConfirmSeats}>
        Proceed to Payment
      </button>
    </div>
  );
};

export default SeatSelection;
