/* eslint-disable no-unused-vars */
import axios from "axios";
import { base_url } from "../../utils/axiosConfig";

const getAllRooms = async () => {
  const res = await axios.get(`${base_url}room/`);
  if (res) {
    return res.data;
  }
};

const filterRooms = async (fromDate, toDate) => {
  const res = await axios.get(`${base_url}room/filter/room`);
  if (res) {
    return res.data;
  }
};

const getSingleRoom = async (id) => {
  // console.log(id);
  const res = await axios.get(`${base_url}room/${id}`);
  if (res) {
    return res.data;
  }
};

const roomService = {
  getAllRooms,
  getSingleRoom,
  filterRooms,
};

export default roomService;
