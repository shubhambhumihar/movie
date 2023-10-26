const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter Hotel Name"],
    },
    desc: {
      type: String,
      required: [true, "Please Enter Hotel Description"],
    },
    address: {
      type: String,
      required: [true, "Please Enter Address"],
    },
    city: {
      type: String,
      required: [true, "Please Enter City"],
    },

    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    amenties: {
      type: [String],
    },
    images: {
      type: [String],
    },
    rooms: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Room",
      },
    ],
    cheapestRate: {
      type: Number,
    },
    highestRate: {
      type: Number,
    },
    famous: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Hotel", hotelSchema);
