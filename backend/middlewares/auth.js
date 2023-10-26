const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const { errorHandle } = require("../utils/errorHandler");

exports.isAuthenticated = asyncHandler(async (req, res, next) => {
  //   let token;
  //   if (
  //     req.headers.authorization &&
  //     req.headers.authorization.startsWith("Bearer")
  //   ) {
  //     token = req.headers.authorization.split(" ")[1];
  //     console.log(token);
  //   } else {
  //     throw new Error(
  //       "Not authorised! please login to acesss the resources! no token"
  //     );
  //   }

  const { token } = req.cookies;
  //   console.log(req.cookies);
  // console.log(token);
  //   get information about the user using the token
  try {
    if (token) {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      // console.log(decoded);
      req.user = await User.findById(decoded.id);
      console.log(req.user);
      next();
    } else {
      return next(
        errorHandle(403, "No Token! Please Login to access the resources!")
      );
    }
  } catch (error) {
    return next(
      errorHandle(404, "User Not Found! Please Login to access the resources!")
    );
  }
});

exports.verifyUser = asyncHandler(async (req, res, next) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    next();
  } else {
    return next(errorHandle(403, "You are not Authorised! 🙃 "));
  }
});
exports.isAdmin = asyncHandler(async (req, res, next) => {
  const { email } = req.user;
  const user = await User.findOne({ email: email });

  if (user.isAdmin) {
    next();
  } else {
    return next(
      errorHandle(
        403,
        "Not authorised! You are not allowed  to access the resources!"
      )
    );
  }
});
