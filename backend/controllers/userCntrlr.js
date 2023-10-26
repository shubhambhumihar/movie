const User = require("../models/userModel");
const asyncHandler = require("express-async-handler\
");
const sendToken = require("../utils/sendJwtToken");
const { errorHandle } = require("../utils/errorHandler");

exports.registerUser = asyncHandler(async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      throw new Error("Please Enter all required fields");
    }

    const findUser = await User.findOne({ email: email });

    if (findUser) {
      return next(errorHandle(401, "User is already registered!"));
    }

    const newUser = await User.create(req.body);

    sendToken(newUser, 201, res);
  } catch (error) {
    next(error);
  }
});

exports.loginUser = asyncHandler(async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Please Enter all required fields");
    }

    const findUser = await User.findOne({ email: email }).select("+password");
    if (!findUser) {
      return next(
        errorHandle(404, "User Not Found! Register first to get Started.")
      );
    }

    const isPasswordValid = await findUser.comparePassword(password);

    if (!isPasswordValid) {
      return next(errorHandle(400, "Email or Password is not Correct"));
    }

    sendToken(findUser, 200, res);
  } catch (error) {
    throw new Error(error.message);
  }
});

exports.getAllUser = asyncHandler(async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ success: true, users });
  } catch (error) {
    throw new Error(error.message);
  }
});

exports.getSingleUser = asyncHandler(async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return next(errorHandle(404, "User Not Found!"));
    }
    res.status(200).json({ success: true, user });
  } catch (error) {
    throw new Error(error.message);
  }
});

exports.updateUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res
      .status(200)
      .json({ success: true, message: "Profile Updated Successfuly", user });
  } catch (error) {
    throw new Error(error.message);
  }
});

exports.deleteUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return next(errorHandle(404, "User Not Found!"));
    }
    res
      .status(200)
      .json({ success: true, message: "User deleted Successfuly" });
  } catch (error) {
    return next(errorHandle(503, "Something went wrong"));
  }
});

exports.logout = asyncHandler(async (req, res) => {
  try {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });

    res
      .status(200)
      .json({ success: true, message: "User logged out successfully" });
  } catch (error) {
    console.log(error.message);
  }
});
