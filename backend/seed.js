import mongoose from "mongoose";
import dotenv from "dotenv";
import Movie from "./models/Movie.js"; // ✅ make sure the path is correct

dotenv.config();

const seedMovies = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    await Movie.deleteMany(); // Clear existing movies
    await Movie.insertMany([
      {
        title: "Inception",
        genre: "Sci-Fi",
        releaseDate: "2010-07-16",
        rating: 8.8,
      },
      {
        title: "Interstellar",
        genre: "Sci-Fi",
        releaseDate: "2014-11-07",
        rating: 8.6,
      },
      {
        title: "Hari hara veera mallu",
        genre: "Sci-Fi",
        releaseDate: "2025-07-14",
        rating: 7.0,
      },
    ]);

    console.log("🎉 Movies seeded successfully");
    process.exit();
  } catch (err) {
    console.error("❌ Error seeding data:", err);
    process.exit(1);
  }
};

seedMovies();
