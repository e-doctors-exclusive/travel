import { createAsyncThunk, createSlice,PayloadAction  } from "@reduxjs/toolkit";
import { RootState } from ".";
import axios from "axios";

interface init {
  token: any;
  err:any;
  loggedIn: boolean;
}

const initialState = {
  token: {},
  err:{},
  loggedIn: false,
};
export const checkUser = createAsyncThunk("/checkUser", async (token:string | "") => {
  console.log("this is token",token);
  
  const task = await axios.get("http://localhost:1128/users/getUser", {
    headers: { Authorization: `Bearer ${JSON.parse(token)}` }

  });
  return task.data;
});

export const tokenSlicer = createSlice({
  name: "token",
  initialState,
  reducers: {
    setLogState:(state,action:PayloadAction<boolean>)=>{
     state.loggedIn=action.payload
    }
  },
  extraReducers(builder) {
    builder.addCase(checkUser.fulfilled, (state, action) => {
      state.token = action.payload;
      console.log(state.token);
      
      state.loggedIn=true
    })
  },
});

export const { setLogState } = tokenSlicer.actions; // Removed checkUser from here
export const selectUser = (state: RootState) => state.token.token;
export const selectUserError = (state: RootState) => state.token.err;
export const selectLoggedIn = (state: RootState) => state.token.loggedIn;
export default tokenSlicer.reducer;
