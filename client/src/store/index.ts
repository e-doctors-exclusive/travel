import { configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlicer"
import FlightSlice from "./flights"


export const store = configureStore({
    reducer:{
        user: userReducer,
        flights:FlightSlice
    }
})




export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch