import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
});

export default mongoose.model("Movie", MovieSchema);
