"use client";
import React, { useEffect } from "react";
import {
  BarChart as RechartsBarChart,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { fetch } from "../../../store/ratingSlice";
interface ratingtType {
  id:number,
  number: number;
  flightId: number;
  usersId: number;
  createdAt: string,
 updatedAt:string
}

interface objTypeAll {
  destFrom: string;
  destTo: string;
  dateFrom: Date;
  dateTo: Date;
  price: number;
  brands:any
}

const BarChart = () => {
  const dispatch: AppDispatch = useDispatch();
  const numberRating:any = useSelector((state: RootState) => state.rating.rating);
  const currentFlight :any= useSelector((state: RootState) => state.flights.currentFlight);
  
  console.log("this is rating", currentFlight);

  useEffect(() => {
    // if (currentFlight && currentFlight.id) {
      dispatch(fetch(currentFlight.id));
    // }
  }, []);
  // const rate =
  //   numberRating.reduce((acc, e: any) => acc + e.number, 0) /
  //   numberRating.length;

  const eachRating = () => {
    const ratingCounts:any = {}; 
    for (let i = 0; i < numberRating.length; i++) {
      const rating = numberRating[i].number;
      if (ratingCounts[rating]) {
        ratingCounts[rating]++;
      } else {
        ratingCounts[rating] = 1;
      }
    }
    return ratingCounts;
  }
  const ratingCounts = eachRating();

  const data = [
    {
      name: "One",
      rating: ratingCounts[1] || 0,
    },
    {
      name: "Two",
      rating: ratingCounts[2] || 0,
    },
    {
      name: "Three",
      rating: ratingCounts[3] || 0,
    },
    {
      name: "Four",
      rating: ratingCounts[4] || 0,
    },
    {
      name: "Five",
      rating: ratingCounts[5] || 0,
    },
  ];
  
  return (
    <>
      <ResponsiveContainer width="90%" height="60%">
        <RechartsBarChart width={200} height={100} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="rating" fill="var(--Purple-Blue, #605dec)" />
        </RechartsBarChart>
      </ResponsiveContainer>
    </>
  );
};

export default BarChart;
