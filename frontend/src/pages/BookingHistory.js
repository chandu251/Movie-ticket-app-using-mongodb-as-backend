// src/pages/BookingHistory.js
import React, { useEffect, useState } from "react";

function BookingHistory() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/bookings")
      .then(res => res.json())
      .then(data => setBookings(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">My Bookings</h1>
      {bookings.length > 0 ? (
        bookings.map((b, index) => (
          <div key={index} className="border p-3 rounded mb-3">
            <h2 className="font-semibold">{b.movieTitle}</h2>
            <p>Seats: {b.seats.join(", ")}</p>
            <p>Date: {new Date(b.date).toLocaleString()}</p>
          </div>
        ))
      ) : (
        <p>No bookings found.</p>
      )}
    </div>
  );
}

export default BookingHistory;
