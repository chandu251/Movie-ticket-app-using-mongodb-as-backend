import Movie from './models/movie.js';

export const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching movies' });
  }
};

export const addMovie = async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    await newMovie.save();
    res.status(201).json({ message: 'Movie added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding movie' });
  }
};

export const deleteMovie = async (req, res) => {
  try {
    const deleted = await Movie.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.status(200).json({ message: 'Movie deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting movie' });
  }
};
