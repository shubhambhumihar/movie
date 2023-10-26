const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const databaseConnect = require("./config/dbConnect");
const userRouter = require("./routes/userRoute");
const hotelRouter = require("./routes/hotelRoutes");
const roomRouter = require("./routes/roomRoutes");
const bookingRouter = require("./routes/bookingRoutes");
const cors = require("cors");

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello from server");
});

//! DATABASE CONNECT
databaseConnect();

app.use(cors());

// !TO SEND REQ.BODY WE NEED TO USE THIS to parse the json format so that js code can work with it -> it receive raw data and then parse into meaning ful data
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true })); //used for form submision
app.use(cookieParser());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/hotel", hotelRouter);
app.use("/api/v1/room", roomRouter);
app.use("/api/v1/bookings", bookingRouter);

// !ERROR HANDING IN EXPRESS
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something Went Wrong!";
  return res.status(status).json({
    success: false,
    status: status,
    message: message,
    stack: err.stack,
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
