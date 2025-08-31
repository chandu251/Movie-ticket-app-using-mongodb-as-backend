// backend/routes/bookingRoutes.js
import express from "express";
import Booking from "../models/Booking.js";

const router = express.Router();

// ✅ Get booked seats for a movie
router.get("/:movieId", async (req, res) => {
  try {
    const { movieId } = req.params;
    const bookings = await Booking.find({ movieId });
    const bookedSeats = bookings.flatMap((b) => b.seats);
    res.json({ success: true, bookedSeats });
  } catch (err) {
    console.error("❌ Error fetching booked seats:", err);
    res.status(500).json({ success: false, message: "Failed to fetch seats" });
  }
});

// ✅ Book seats
router.post("/book", async (req, res) => {
  try {
    const { movieId, seats } = req.body;

    if (!movieId || !seats || seats.length === 0) {
      return res.status(400).json({ success: false, message: "Invalid data" });
    }

    // check if already booked
    const existingBookings = await Booking.find({ movieId });
    const alreadyBooked = existingBookings.flatMap((b) => b.seats);

    const conflictSeats = seats.filter((s) => alreadyBooked.includes(s));
    if (conflictSeats.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Seats already booked: ${conflictSeats.join(", ")}`
      });
    }

    // save booking
    const newBooking = new Booking({ movieId, seats });
    await newBooking.save();

    res.status(201).json({
      success: true,
      message: "Booking successful",
      bookedSeats: seats
    });
  } catch (err) {
    console.error("❌ Error booking seats:", err);
    res.status(500).json({ success: false, message: "Booking failed" });
  }
});

export default router;
