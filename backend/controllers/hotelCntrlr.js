const Hotel = require("../models/hotelModel");
const asyncHandler = require("express-async-handler\
");
const { errorHandle } = require("../utils/errorHandler");

// create the hotel
exports.createHotel = asyncHandler(async (req, res) => {
  try {
    const hotel = await Hotel.create(req.body);

    res.status(201).json({ success: true, hotel });
  } catch (error) {
    console.log(error);
  }
});

// get all hotels
exports.getAllHotels = asyncHandler(async (req, res, next) => {
  try {
    const totalHotel = await Hotel.countDocuments();
    const hotels = await Hotel.find();

    res.status(200).json({ success: true, hotels, totalHotel });
  } catch (error) {
    return next(error);
  }
});
// get all hotels
exports.getCountByCityHotel = asyncHandler(async (req, res, next) => {
  const cities = req.query.cities.split(",");

  try {
    const listOfCity = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );

    res.status(200).json({ success: true, listOfCity });
  } catch (error) {
    return next(error);
  }
});

// get single hotel
exports.getSingleHotel = asyncHandler(async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);

    if (!hotel) {
      res.status(404).json({ message: "Hotel not found" });
    }

    res.status(200).json({ success: true, hotel });
  } catch (error) {
    console.log(error);
  }
});

exports.updateHotel = asyncHandler(async (req, res) => {
  try {
    const findHotel = await Hotel.findById(req.params.id);

    if (!findHotel) {
      res.status(404).json({ message: "Hotel not found" });
    }

    const hotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      req.body,
      //   { $set: req.body },
      {
        new: true,
        runValidators: true,
      }
    );

    res
      .status(200)
      .json({ success: true, message: "Hotel Updated successfully!", hotel });
  } catch (error) {
    console.log(error);
  }
});

exports.deleteHotel = asyncHandler(async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);

    if (!hotel) {
      res.status(404).json({ message: "Hotel not found" });
    }

    await Hotel.findByIdAndDelete(req.params.id);

    res
      .status(200)
      .json({ success: true, message: "Hotel deleted successfully!" });
  } catch (error) {
    console.log(error);
  }
});
