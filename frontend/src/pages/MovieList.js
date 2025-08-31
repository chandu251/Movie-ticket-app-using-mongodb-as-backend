import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MovieList.css";   // ✅ link CSS here

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5001/api/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error("Error fetching movies", err));
  }, []);

  return (
    <div className="movie-container">
      <h2 className="movie-heading">🎬 Available Movies</h2>

      {movies.length === 0 ? (
        <p className="no-movies">No movies found.</p>
      ) : (
        <div className="movie-grid">
          {movies.map((movie) => (
            <div key={movie._id} className="movie-card">
              <img src={movie.poster} alt={movie.title} className="movie-poster" />
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
              <button
                className="book-btn"
                onClick={() => navigate(`/seats/${movie._id}`)}
              >
                🎟️ Book Ticket
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;
