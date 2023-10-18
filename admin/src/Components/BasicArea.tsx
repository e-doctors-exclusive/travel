import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function BasicArea() {
  return (
    <div style={{marginTop:"20px"}}>
        <h1 style={{textAlign:"center"}}>Monthly profits</h1>
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          area: true,
        },
      ]}
      width={500}
      height={300}
    />

    </div>
  );
}