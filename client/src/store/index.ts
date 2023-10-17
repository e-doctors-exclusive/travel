import { configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlicer"
import FlightsSlice from "./flights"


export const store = configureStore({
    reducer:{
        user: userReducer,
        flights:FlightsSlice
    }
})




export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch