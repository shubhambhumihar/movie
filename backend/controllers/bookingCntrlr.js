const Booking = require("../models/bookingModel");
const User = require("../models/userModel");
const Room = require("../models/roomModel");
const asyncHandler = require("express-async-handler\
");

exports.bookRoom = asyncHandler(async (req, res) => {
  const { user, room, fromDate, toDate, totalAmount, totalDays } = req.body;

  try {
    // Create a new booking record
    const booking = await Booking.create({
      room, // Reference to the room ID
      user,
      fromDate,
      toDate,
      totalAmount,
      totalDays,
      transactionId: "1234",
    });

    // Create a booking object in the required format
    const newBooking = {
      guest: user, // Reference to the user
      fromDate,
      toDate,
    };

    await Room.findByIdAndUpdate(room, {
      $push: { bookings: newBooking },
      new: true,
    });

    // Return a success response with the created booking object
    res.status(201).json({ success: true, booking });
  } catch (error) {
    console.log(error);
  }
});

// get all bookings
exports.getAllBookings = asyncHandler(async (req, res) => {
  try {
    const totalBooking = await Booking.countDocuments();
    const bookings = await Booking.find();

    res.status(200).json({ success: true, bookings, totalBooking });
  } catch (error) {
    console.log(error);
  }
});

exports.getSingleBooking = asyncHandler(async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate("room");

    res.status(200).json({ success: true, booking });
  } catch (error) {
    console.log(error);
  }
});

// get all bookings
// exports.getSingleBooking = asyncHandler(async (req, res) => {
//   try {
//     const booking = await Booking.findById(req.params.id).populate("user");

//     res.status(200).json({ success: true, booking });
//   } catch (error) {
//     console.log(error);
//   }
// });

// Get all bookings for a specific user
exports.getUserBookings = async (req, res) => {
  try {
    const userId = req.params.userId; // Assuming you pass the user's ID in the URL

    const bookings = await Booking.find({ user: userId }).populate("room");

    if (bookings) {
      res.status(200).json(bookings);
    } else {
      res.status(404).json({ error: "No bookings found for the user" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to fetch user bookings" });
  }
};
