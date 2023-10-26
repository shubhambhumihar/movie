const Room = require("../models/roomModel");
const Hotel = require("../models/hotelModel");
const asyncHandler = require("express-async-handler\
");

// create the hotel
exports.createRoom = asyncHandler(async (req, res) => {
  // get the hotel id from req.params
  const { hotels } = req.body;
  try {
    // find that hotel
    const hotel = await Hotel.findById(hotels);
    if (!hotel) {
      return res.status(404).send("Hotel not found");
    }
    const room = await Room.create(req.body);

    await Hotel.findByIdAndUpdate(hotels, {
      $push: { rooms: room._id },
    });

    res.status(201).json({ success: true, room });
  } catch (error) {
    console.log(error);
  }
});

// get all hotels
exports.getAllRooms = asyncHandler(async (req, res) => {
  try {
    const totalRooms = await Room.countDocuments();
    const rooms = await Room.find();

    res.status(200).json({ success: true, rooms, totalRooms });
  } catch (error) {
    console.log(error);
  }
});

exports.getFilteredRooms = asyncHandler(async (req, res) => {
  try {
    const availableRooms = await Room.find({
      $or: [{ bookings: { $exists: false } }, { bookings: { $size: 0 } }],
    });

    res.json({ rooms: availableRooms });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred while filtering rooms." });
  }
});
// get filtered room
// exports.getFilteredRooms = asyncHandler(async (req, res) => {
//   const { fromDate, toDate } = req.params;

//   // Convert fromDate and toDate to JavaScript Date objects
//   const fromDateObj = new Date(fromDate);
//   const toDateObj = new Date(toDate);

//   try {
//     const availableRooms = await Room.find({
//       $or: [
//         {
//           bookings: {
//             $not: {
//               $elemMatch: {
//                 $and: [
//                   {
//                     fromDate: { $lte: toDateObj },
//                     toDate: { $gte: fromDateObj },
//                   },
//                 ],
//               },
//             },
//           },
//         },
//         // { bookings: { $size: 0 } },
//       ],
//     });

//     res.json({ rooms: availableRooms });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "An error occurred while filtering rooms." });
//   }
// });

// get single hotel
exports.getSingleRoom = asyncHandler(async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);

    if (!room) {
      res.status(404).json({ message: "Room not found" });
    }

    res.status(200).json({ success: true, room });
  } catch (error) {
    next(error);
    console.log(error);
  }
});
exports.updateRoom = asyncHandler(async (req, res) => {
  try {
    const { roomId } = req.params;

    const updates = req.body;
    // find room
    const findRoom = await Room.findById(roomId);

    if (!findRoom) {
      res.status(404).json({ message: "Room not found" });
    }

    // check if hotel id changed or not
    if (updates.hotels && updates.hotels != findRoom.hotels.toString()) {
      //changed hotel id

      // get previus hotel and delte from there
      const oldHotel = await Hotel.findById(findRoom.hotels);
      if (oldHotel) {
        oldHotel.rooms = oldHotel.rooms.filter((id) => id.toString() != roomId);
        await oldHotel.save();
      }
    }

    // update the new hotel
    const newHotel = await Hotel.findById(updates.hotels);
    if (newHotel) {
      newHotel.rooms.push(roomId);
      newHotel.save();
    }

    const room = await Room.findByIdAndUpdate(
      roomId,
      updates,

      {
        new: true,
        runValidators: true,
      }
    );

    res
      .status(200)
      .json({ success: true, message: "Room Updated successfully!", room });
  } catch (error) {
    console.log(error);
  }
});

exports.deleteRoom = asyncHandler(async (req, res) => {
  try {
    const { roomId } = req.params;
    const room = await Room.findById(roomId);

    if (!room) {
      res.status(404).json({ message: "Room not found" });
    }

    // first delete from the hotel
    const hotel = await Hotel.findById(room.hotels);
    if (hotel) {
      hotel.rooms = hotel.rooms.filter((id) => id.toString() != roomId);
      await hotel.save();
    }

    await Room.findByIdAndDelete(roomId);

    res
      .status(200)
      .json({ success: true, message: "Room deleted successfully!" });
  } catch (error) {
    console.log(error);
  }
});
