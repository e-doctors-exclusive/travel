"use client"
import * as React from 'react';
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import SideBar from '../../Components/SideBar';
import axios from 'axios';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'destFrom', headerName: 'From', width: 160 },
  { field: 'destTo', headerName: 'Destination', width: 160 },
  { field: 'dateFrom', headerName: 'Date From', width: 160 },
  { field: 'departureTime', headerName: 'Departure', width: 160 },
  { field: 'dateTo', headerName: 'Date To', width: 160 },
  { field: 'arrivalTime', headerName: 'Arrival', width: 160 },
  { field: 'price', headerName: 'Price', width: 160 },
];

export default function Flights() {
  const [clicked, setClicked] = useState(true);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get('http://localhost:1337/flights/getAll');
        const flights = response.data.map((flight:any) => (
          console.log(flight.departureTime),
          {
          ...flight,
          dateFrom: new Date(flight.dateFrom).toLocaleDateString(),
          timeFrom: new Date(flight.departureTime).toLocaleTimeString(),
          dateTo: new Date(flight.dateTo).toLocaleDateString(),
          timeTo: new Date(flight.arrivalTime).toLocaleTimeString(),
        }));
        setRows(flights);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFlights();
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <SideBar setClicked={setClicked} clicked={clicked} />
      <div
        style={{
          height: 400,
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          flex: 1,
          marginLeft:'250px',
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </div>
  );
}