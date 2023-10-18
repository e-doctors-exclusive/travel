import { configureStore} from "@reduxjs/toolkit"
import tokenReducer from "./tokenSlicer"
import FlightsSlice from "./flights"


export const store = configureStore({
    reducer:{
        token: tokenReducer,
        flights:FlightsSlice
    }
})




export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch