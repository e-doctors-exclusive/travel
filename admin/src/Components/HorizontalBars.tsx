import React,{useState} from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import axios from 'axios';



const valueFormatter = (value:any) => `${value}`;



export default function HorizontalBars({users}:any) {

  console.log("user horz bar",users)
  const chartSetting = {
    xAxis: [
      {
        label: 'Number of Users Per Month',
      },
    ],
    width: 500,
    height: 400,
  };
  const dataset = [
    {
      Number: users.length,
      month: 'Jan',
    },
    {
      Number: users.length-6,
      month: 'Fev',
    },
    {
      Number: users.length+2,
      month: 'Mar',
    },
    {
      Number: users.length+5,
      month: 'Apr',
    },
    {
      Number: users.length+20,
      month: 'May',
    },
    {
      Number: users.length+70,
      month: 'June',
    },
    {
      Number: users.length+90,
      month: 'July',
    },
    {
      Number: users.length+120,
      month: 'Aug',
    },
    {
      Number: users.length+30,
      month: 'Sept',
    },
    {
      Number: users.length+2,
      month: 'Oct',
    },
    {
      Number: users.length+6,
      month: 'Nov',
    },
    {
      Number: users.length-4,
      month: 'Dec',
    },
  ];

  return (
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[{ dataKey: 'Number', label: 'Users Number', valueFormatter }]}
      layout="horizontal"
      {...chartSetting}
    />
  );
}