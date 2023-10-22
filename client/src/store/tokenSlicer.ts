import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import axios from "axios";
import build from "next/dist/build";

interface init {
  token: any;
  err: any;
  loggedIn: boolean;
  link: string;

  price: number;

}

const initialState = {
  token: {},
  err: {},
  loggedIn: false,
  link: "",

  price: 0,
};

export const checkUser = createAsyncThunk("/checkUser", async () => {
  const token = localStorage.getItem("token") || "";

  const task = await axios.get("http://localhost:1337/users/getUser", {
    headers: { Authorization: `Bearer ${token}` },
  });
  console.log(task.data);

  return task.data;
});

export const paymentUser = createAsyncThunk(
  "/payment",
  async (amount: number | 0) => {
    console.log("linklink", amount);
    const response = await axios.post(`http://localhost:1337/payment/payment`, {
      amount: amount,
    });



    return response.data.result.link;
  }
);

export const savePaymentHistory = createAsyncThunk(
  "/savePaymentHistory",
  async ({price,userId}:any) => {
    console.log(userId);
    
    const body = {price,usersId:+userId}
    const response = await axios.post(
      "http://localhost:1337/payment/addUserPayment",
       body 
    );
    return response.data;
  }
);


export const tokenSlicer = createSlice({
  name: "token",
  initialState,
  reducers: {
    setLogState: (state, action: PayloadAction<boolean>) => {
      state.loggedIn = action.payload;
    },

    setPrice: (state, action: PayloadAction<number>) => {
      state.price = action.payload;
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
export const { setLogState, setPrice } = tokenSlicer.actions; // Removed checkUser from here
export const selectUser = (state: RootState) => state.token.token;
export const selectPrice = (state: RootState) => state.token.price;
export const selectUserError = (state: RootState) => state.token.err;
export const selectLoggedIn = (state: RootState) => state.token.loggedIn;
export const selectLink = (state: RootState) => state.token.link;
export default tokenSlicer.reducer;
