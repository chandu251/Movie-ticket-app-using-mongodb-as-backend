import express from "express";
import Movie from "../models/Movie.js";

const router = express.Router();

// GET all movies
router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
