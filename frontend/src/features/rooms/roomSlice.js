/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import roomService from "./roomService";
import { toast } from "react-toastify";

export const getAllRooms = createAsyncThunk(
  "room/getallRooms",
  async (thunkAPI) => {
    try {
      return await roomService.getAllRooms();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const filterRooms = createAsyncThunk(
  "room/filterRooms",
  async (thunkAPI) => {
    try {
      return await roomService.filterRooms();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const getSingleRoom = createAsyncThunk(
  "room/getsingleRoom",
  async (id, thunkAPI) => {
    try {
      return await roomService.getSingleRoom(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  rooms: [],
  singleRoom: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const roomSlice = createSlice({
  name: "room",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllRooms.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllRooms.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;

        state.rooms = action.payload;
      })
      .addCase(getAllRooms.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.rooms = null;

        if (state.isError == true) {
          toast.error(action.payload.message);
        }
      })
      .addCase(getSingleRoom.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleRoom.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;

        state.singleRoom = action.payload;
      })
      .addCase(getSingleRoom.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.singleRoom = null;

        if (state.isError == true) {
          toast.error(action.payload.message);
        }
      })
      .addCase(filterRooms.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(filterRooms.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;

        state.rooms = action.payload;
      })
      .addCase(filterRooms.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.rooms = null;

        if (state.isError == true) {
          toast.error(action.payload.message);
        }
      });
  },
});

export default roomSlice.reducer;
