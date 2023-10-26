const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    roomNumber: [
      {
        number: Number,
        unavailableDates: { type: [Date] },
      },
    ],
    roomType: {
      type: String,
      required: [true, "Please Enter Room type"],
    },
    title: {
      type: String,
      required: [true, "Please Enter Desc"],
    },
    desc: {
      type: String,
      required: [true, "Please Enter Desc"],
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    beds: {
      type: Number, // Number of beds in the room
      required: true,
    },

    hotels: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hotel",
    },

    pricePerNight: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    amenties: {
      type: [String],
    },
    images: {
      type: [String],
    },

    cheapestRate: {
      type: Number,
    },
    highestRate: {
      type: Number,
    },
    bookings: [
      {
        guest: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        fromDate: [],
        toDate: [],
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Room", roomSchema);
