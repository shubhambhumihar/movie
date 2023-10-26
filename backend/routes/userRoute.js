const express = require("express");
const {
  registerUser,
  loginUser,
  getAllUser,
  getSingleUser,
  updateUser,
  logout,
  testFn,
  deleteUser,
} = require("../controllers/userCntrlr");
const { isAuthenticated, isAdmin, verifyUser } = require("../middlewares/auth");

const router = express.Router();

// router.get("/check", isAuthenticated, (req, res) => {
//   res.json("AUTHENTICATED");
// });
router.route("/register").post(registerUser);
router.route("/logout").get(logout);
router.route("/login").post(loginUser);
router.route("/users").get(isAuthenticated, isAdmin, getAllUser);
router.route("/:id").get(isAuthenticated, verifyUser, getSingleUser);
router.route("/:id").put(isAuthenticated, verifyUser, updateUser);
router.route("/:id").delete(isAuthenticated, verifyUser, deleteUser);

module.exports = router;
