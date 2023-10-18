import { configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlicer"
import adminReducer from "./adminSlicer"
import FlightsSlice from "./flights"


export const store = configureStore({
    reducer:{
        user: userReducer,
        flights:FlightsSlice,
        admin:adminReducer
    }
})




export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch