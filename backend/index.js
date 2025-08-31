import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import movieRoutes from "./routes/movieRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/movieDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

app.use("/api/movies", movieRoutes);

const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
