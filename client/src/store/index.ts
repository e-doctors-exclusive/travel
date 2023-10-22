import { configureStore} from "@reduxjs/toolkit"
import tokenReducer from "./tokenSlicer"
import adminReducer from "./adminSlicer"
import FlightsSlice from "./flights"
import ratingReducer from "./ratingSlice"


export const store = configureStore({
    reducer:{
        token: tokenReducer,
        flights:FlightsSlice,
        admin:adminReducer,
        rating:ratingReducer
    }
})




export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch