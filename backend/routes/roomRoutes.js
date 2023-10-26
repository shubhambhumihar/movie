const express = require("express");
const {
  createRoom,
  getAllRooms,
  getSingleRoom,
  updateRoom,
  deleteRoom,
  getFilteredRooms,
} = require("../controllers/roomCntrlr");
const { isAuthenticated, isAdmin } = require("../middlewares/auth");

const router = express.Router();

router.route("/create").post(isAuthenticated, isAdmin, createRoom);
router.route("/").get(getAllRooms);
router.route("/filter/room").get(getFilteredRooms);
router.route("/:id").get(getSingleRoom);

router.route("/:roomId").put(isAuthenticated, isAdmin, updateRoom);
router.route("/:roomId").delete(isAuthenticated, isAdmin, deleteRoom);

module.exports = router;
