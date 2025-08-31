// insertMovies.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Movie from "./models/Movie.js"; // make sure path is correct

dotenv.config();

const movies = [
  {
    title: "Inception",
    description: "A mind-bending thriller",
    genre: "Sci-Fi",
    language: "English",
    releaseDate: "2010-07-16",
    poster: "https://image-url.com/inception.jpg"
  },
  {
    title: "Interstellar",
    description: "Journey through space and time",
    genre: "Sci-Fi",
    language: "English",
    releaseDate: "2014-11-07",
    poster: "https://image-url.com/interstellar.jpg"
  }
];

const insertData = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/moviedb');
    await Movie.deleteMany(); // clear old
    await Movie.insertMany(movies);
    console.log("✅ Movies inserted successfully!");
    process.exit();
  } catch (err) {
    console.error("❌ Insertion error:", err);
    process.exit(1);
  }
};

insertData();
