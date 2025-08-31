import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.message) alert(location.state.message);
  }, [location.state]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/movies");
        setMovies(res.data);
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    };
    fetchMovies();
  }, []);

  if (!movies.length) return <h2>No movies found!</h2>;

  return (
    <div className="movies-container">
      <h1>Available Movies</h1>
      <div className="movies-grid">
        {movies.map((movie) => (
          <div key={movie._id} className="movie-card">
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <Link to={`/seat-selection/${movie._id}`} state={{ movie }}>
              Book Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
