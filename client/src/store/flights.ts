import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
interface flightType {
  destFrom: string;
  destTo: string;
  dateFrom: Date;
  dateTo: Date;
  departureTime: Date;
  arrivalTime: Date;
  price: number;
}
// interface objType{
//     destFrom:string
//     destTo:string
// }

// interface objTypeAll{
//     destFrom:string
//     destTo:string
//     departDate:string
//     arriveDate:string
// }

export const fetchFlights = createAsyncThunk(
  "/flights/destFrom/destTo/dateFrom",
  async (obj: flightType) => {
    const res = await axios.get(
      `http://localhost:1128/flights/getAll/${obj.destFrom}/${obj.destTo}/${obj.dateFrom}`
    );
    return res.data;
  }
);

export const fetchAllFlights = createAsyncThunk("/flights/getAll", async () => {
  const res = await axios.get("http://localhost:1128/flights/getAll");

  return res.data;
});

const FlightSlice = createSlice({
  name: "flights",
  initialState: {
    Flights: [],
    allFlights: [],
    currentFlight: {},
    currentReservation: {
      firstName: "",
      middleName: "",
      lastName: "",
      suffix: "",
      date: "",
      email: "",
      phoneNumber: "",
      redressNumber: "",
      seatNumber: "",
    },

    error: null,
    loading: false,
  },
  reducers: {
  selected:(state,action)=>{
      state.currentFlight = action.payload
  },
  fillForm:(state,action)=>{
      state.currentReservation = action.payload
  }
},
  extraReducers(builder) {
    builder

      .addCase(fetchFlights.fulfilled, (state, action) => {
        state.allFlights = action.payload;
      })
      .addCase(fetchAllFlights.fulfilled, (state, action) => {
        state.allFlights = action.payload;
      });
  },
});
export const {fillForm,selected} = FlightSlice.actions
export default FlightSlice.reducer;
