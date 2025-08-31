// frontend/src/components/BookTicket.js

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function BookTicket() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Hardcoded example title (you can fetch details if needed)
  const movieTitle = "Interstellar"; // Ideally, fetch using ID from backend

  const handleBook = () => {
    // Navigate to seat selection with movie data
    navigate(`/seats/${id}`, {
      state: { title: movieTitle, movieId: id }
    });
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Booking for {movieTitle}</h2>
      <button onClick={handleBook} style={{ padding: '10px 20px' }}>
        Select Seats
      </button>
    </div>
  );
}

export default BookTicket;
