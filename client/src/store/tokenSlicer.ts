import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import axios from "axios";
import build from "next/dist/build";

interface init {
  token: any;
  err: any;
  loggedIn: boolean;
  link: string;
}

const initialState = {
  token: {},
  err: {},
  loggedIn: false,
  link: "",
};
export const checkUser = createAsyncThunk(
  "/checkUser",
  async (token: string | "") => {
    console.log("this is token", token);

    const task = await axios.get("http://localhost:1337/users/getUser", {
      headers: { Authorization: `Bearer ${JSON.parse(token)}` },
    });
    return task.data;
  }
);

export const paymentUser = createAsyncThunk(
  "/payment",
  async (amount: number | 0) => {
    console.log("linklink", amount);
    const response = await axios.post(`http://localhost:1337/payment/payment`, {
      amount: amount,
    });
    console.log("jiji ya asal", response.data.result.link);

    return response.data.result.link;
  }
);

export const tokenSlicer = createSlice({
  name: "token",
  initialState,
  reducers: {
    setLogState: (state, action: PayloadAction<boolean>) => {
      state.loggedIn = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(checkUser.fulfilled, (state, action) => {
      state.token = action.payload;
      console.log(state.token);

      state.loggedIn = true;
    }),
      builder.addCase(paymentUser.fulfilled, (state, action) => {
        state.link = action.payload;
      });
  },
});
export const { setLogState } = tokenSlicer.actions; // Removed checkUser from here
export const selectUser = (state: RootState) => state.token.token;
export const selectUserError = (state: RootState) => state.token.err;
export const selectLoggedIn = (state: RootState) => state.token.loggedIn;
export const selectLink = (state: RootState) => state.token.link;
export default tokenSlicer.reducer;
