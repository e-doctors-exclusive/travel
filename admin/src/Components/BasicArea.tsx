import React,{useState} from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import axios from 'axios';

export default function BasicArea() {
  const [money,setMoney]=useState([])
  const fetchPayment = async ()=>{
      try {
        const payment = await axios.get('')
        setMoney(payment.data)
      } catch (error) {
        throw error
      }
  }

  return (
    <div style={{marginTop:"20px"}}>
        <h1 style={{textAlign:"center"}}>Profits</h1>
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 12] }]}
      series={[
        {
          data: [200, 550, 200, 850, 1500, 1000],
          // area: true,
        },
      ]}
      width={500}
      height={300}
    />

    </div>
  );
}