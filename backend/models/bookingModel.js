const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    // room: {
    //   type: String,
    //   required: true,
    // },
    // roomId: {
    //   type: String,
    //   required: true,
    // },
    // userId: {
    //   type: String,
    //   required: true,
    // },
    room: { type: mongoose.Schema.Types.ObjectId, ref: "Room" }, // Reference to the room booked
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    fromDate: {
      type: String,
      required: true,
    },
    toDate: {
      type: String,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    totalDays: {
      type: Number,
      required: true,
    },
    transactionId: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "booked",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
