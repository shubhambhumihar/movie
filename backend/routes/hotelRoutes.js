const express = require("express");
const {
  createHotel,
  getAllHotels,
  getSingleHotel,
  deleteHotel,
  updateHotel,
  getCountByCityHotel,
} = require("../controllers/hotelCntrlr");
const { isAuthenticated, isAdmin } = require("../middlewares/auth");

const router = express.Router();

router.route("/create").post(isAuthenticated, isAdmin, createHotel);

router.route("/").get(getAllHotels);
router.route("/hotelbycity").get(getCountByCityHotel);

router.route("/:id").get(getSingleHotel);

router.route("/:id").delete(isAuthenticated, isAdmin, deleteHotel);

router.route("/:id").put(isAuthenticated, isAdmin, updateHotel);

module.exports = router;
