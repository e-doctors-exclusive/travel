import {createSlice} from "@reduxjs/toolkit"
import { RootState } from ".";

interface init {
    admin: any;
    adminToken: string;
    loggedIn: boolean;
  }
  
  const initialState = {
    admin: {},
    adminToken: "",
    loggedIn: false,
  };

  export const adminSlicer = createSlice({
    name:"admin",
    initialState,
    reducers:{
        setAdmin:(state,action)=>{
            const {admin} = action.payload;
            state.admin=admin
        },
        logout:(state)=>{
            state.admin="";
            state.loggedIn=false;
            localStorage.removeItem('adminToken')
        },
        setLoggedIn: (state,action)=>{
            const {token,loggedIn} = action.payload;
            localStorage.setItem('adminToken', JSON.stringify(token));
            state.adminToken=token;
            state.loggedIn=loggedIn;
        }
    }
  })

  export const {setAdmin,logout,setLoggedIn}= adminSlicer.actions;
  export const selectAdmin =(state:RootState) => state.admin.admin;
  export const selectLoggedIn=(state:RootState)=>state.admin.loggedIn;
  export default adminSlicer.reducer;