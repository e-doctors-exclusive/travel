import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

interface init {
  user: any;
  userToken: string;
  loggedIn: boolean;
}

const initialState = {
  user: {},
  userToken: "",
  loggedIn: false,
};

export const userSlicer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user } = action.payload;
      state.user = user;
    },
    logout: (state) => {
      state.user = "";
      state.loggedIn = false;
      localStorage.removeItem("userToken");
    },
    setLoggedIn: (state, action) => {
      const { token, loggedIn } = action.payload;
      localStorage.setItem("userToken", JSON.stringify(token));
      state.userToken = token;
      state.loggedIn = loggedIn;
    },
    
  },
  // extraReducers(builder) {
  //   checkToken:(state,action)=>{
      
  //   }
  // }

});

export const { setUser, logout, setLoggedIn } = userSlicer.actions;
export const selectUser = (state: RootState) => state.user.user;
export const selectLoggedIn = (state:RootState)=>state.user.loggedIn
export default userSlicer.reducer;
