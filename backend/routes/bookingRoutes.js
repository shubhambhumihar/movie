const express = require("express");
const {
  bookRoom,
  getAllBookings,
  getUserBookings,
  getSingleBooking,
} = require("../controllers/bookingCntrlr");
const router = express.Router();

router.route("/bookroom").post(bookRoom);

router.route("/allbookings").get(getAllBookings);

router.route("/allbookings/:userId").get(getUserBookings);

router.route("/booking/:id").get(getSingleBooking);

module.exports = router;
