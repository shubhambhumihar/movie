/* eslint-disable no-unused-vars */
import axios from "axios";
import { base_url } from "../../utils/axiosConfig";

const bookRoom = async (bookingData) => {
  const res = await axios.post(`${base_url}bookings/bookroom`, bookingData);
  if (res) {
    return res.data;
  }
};

const getAllBookings = async () => {
  const res = await axios.get(`${base_url}bookings/allbookings`);
  if (res) {
    return res.data;
  }
};

const getAllBookingsOfUser = async (userId) => {
  const res = await axios.get(`${base_url}bookings/allbookings/${userId}`);
  if (res) {
    return res.data;
  }
};
const getSingleBooking = async (id) => {
  const res = await axios.get(`${base_url}bookings/booking/${id}`);
  if (res) {
    return res.data;
  }
};

const bookroomService = {
  bookRoom,
  getAllBookings,
  getAllBookingsOfUser,
  getSingleBooking,
};

export default bookroomService;
