'use client'
import React, { useEffect } from 'react'
import { BarChart as RechartsBarChart,  XAxis, YAxis, Bar, Tooltip, Legend, ResponsiveContainer} from "recharts";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from '@/store';
// import { fetchFlights } from '@/store/flights';
import { fetchFlights} from "../../../store/flights";
// import { AppDispatch, RootState } from "../../store"
const  BarChart = () => {
  const data = [
    {
        name: "One",
        high: 4000,
       
    },
    {
        name: "Tow",
        high: 5000,
        
    },
    {
        name: "Three",
        high: 6000,
        
    },
    {
        name: "Four",
        high: 6500,
        
    },
    {
        name: "Five",
        high: 7000,
        
    },
    {
        name: "Jun",
        high: 8000,
        
    },
    {
        name: "Jul",
        high: 7400,
       
    },
  ];
    interface objTypeAll {
        destFrom: string;
        destTo: string;
        dateFrom: Date;
        dateTo: Date;
        price: number;
        brands:any
      }
      const dispatch: AppDispatch = useDispatch();
    //   const flights = useSelector((state: RootState) => state.flights.allFlights);
      const flights:objTypeAll[] = useSelector((state: RootState) => state.flights.allFlights)
      console.log(flights,"this is flights")
      // useEffect(() => {
      //   dispatch(fetchFlights({
      //       destFrom:"",
      //       destTo:"",
      //       dateFrom:
      //   }));
      // }, []);
    
      let brandRating = flights.map((e: objTypeAll) => e.brands?.rating);
  return (
    <>
    <ResponsiveContainer width="100%" height="100%">
    <RechartsBarChart width={700} height={200} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Rating" fill= "var(--Purple-Blue, #605dec)" />
      </RechartsBarChart>
    </ResponsiveContainer>
  </>
  )
}

export default  BarChart