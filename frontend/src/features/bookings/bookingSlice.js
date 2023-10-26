/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import bookroomService from "./bookingService";

export const bookroom = createAsyncThunk(
  "booking/bookroom",
  async (bookingData, thunkAPI) => {
    try {
      return await bookroomService.bookRoom(bookingData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getAllBookings = createAsyncThunk(
  "booking/getAllBookings",
  async (thunkAPI) => {
    try {
      return await bookroomService.getAllBookings();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const getAllBookingsOfUser = createAsyncThunk(
  "booking/getAllBookingsOfUser",
  async (userId, thunkAPI) => {
    try {
      return await bookroomService.getAllBookingsOfUser(userId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getSingleBookingDetails = createAsyncThunk(
  "booking/getSingleBooking",
  async (id, thunkAPI) => {
    try {
      return await bookroomService.getSingleBooking(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  booking: [],
  bookingsOfUser: [],
  singleBooking: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const bookingSlice = createSlice({
  name: "booking",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(bookroom.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(bookroom.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        if (state.isSuccess == true) {
          toast.success("Booked Successfully!");
        }
        state.booking = action.payload;
        // console.log(action.payload);
      })
      .addCase(bookroom.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.booking = null;

        if (state.isError == true) {
          toast.error(action.payload.message);
        }
      })
      .addCase(getAllBookings.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllBookings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;

        state.booking = action.payload;
        // console.log(action.payload);
      })
      .addCase(getAllBookings.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.booking = null;

        if (state.isError == true) {
          toast.error(action.payload.message);
        }
      })
      .addCase(getAllBookingsOfUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllBookingsOfUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;

        state.bookingsOfUser = action.payload;
        // console.log(action.payload);
      })
      .addCase(getAllBookingsOfUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.bookingsOfUser = null;

        if (state.isError == true) {
          toast.error(action.payload.message);
        }
      })
      .addCase(getSingleBookingDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleBookingDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;

        state.singleBooking = action.payload;
        // console.log(action.payload);
      })
      .addCase(getSingleBookingDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.singleBooking = null;

        if (state.isError == true) {
          toast.error(action.payload.message);
        }
      });
  },
});

export default bookingSlice.reducer;
