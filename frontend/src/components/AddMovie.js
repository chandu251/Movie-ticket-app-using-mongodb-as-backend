// frontend/src/components/AddMovie.js

import React, { useState } from 'react';
import axios from 'axios';

function AddMovie() {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [rating, setRating] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5001/api/movies', {
        title,
        genre,
        releaseDate,
        rating,
        imageUrl
      });

      alert('Movie added successfully!');
      setTitle('');
      setGenre('');
      setReleaseDate('');
      setRating('');
      setImageUrl('');
    } catch (error) {
      console.error(error);
      alert('Error adding movie.');
    }
  };

  return (
    <div>
      <h2>Add Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Movie Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        /><br />

        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
        /><br />

        <input
          type="date"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
          required
        /><br />

        <input
          type="text"
          placeholder="Rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        /><br />

        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        /><br />

        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;
