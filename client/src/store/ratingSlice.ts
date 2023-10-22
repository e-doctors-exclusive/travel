import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
interface ratingtType {
  number: number;
  flightId: number;
  usersId: number;
}

export const fetch = createAsyncThunk(
  "/ratingt/fetch",
  async (flightId: number) => {
    const res = await axios.get(`http://localhost:1337/rating/get/${flightId}`);
    return res.data;
  }
);

const initialState = {
  rating: [],
};

const RatingSlice = createSlice({
  name: "rating",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetch.fulfilled, (state, action) => {
      state.rating = action.payload;
    });
  },
});
export default RatingSlice.reducer;
