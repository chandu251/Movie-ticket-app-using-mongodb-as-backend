// backend/models/Booking.js
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Movie",
  },
  seats: {
    type: [String],
    required: true,
  },
});

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
