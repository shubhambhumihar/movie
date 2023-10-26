/* eslint-disable no-unused-vars */
//! this is my store where all my global state lies
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import roomReducer from "./features/rooms/roomSlice";
import bookingReducer from "./features/bookings/bookingSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    room: roomReducer,
    booking: bookingReducer,
  },
});
