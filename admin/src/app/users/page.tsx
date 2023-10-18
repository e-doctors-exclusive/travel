"use client"
import * as React from 'react';
import { useState, useEffect } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import SideBar from '../../Components/SideBar';
import Button from '@mui/material/Button';
import axios from 'axios';


export default function Users() {
  const [clicked, setClicked] = useState(true);
  const [rows, setRows] = useState([]);
  const columns= [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'name',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },{
      field: 'email',
      headerName: 'E-mail',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },
    {
      field: 'phone',
      headerName: 'Phone',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },
    {
      field: 'deleteButton',
      headerName: 'Delete', 
      width: 100,
      renderCell: (params:any) => (
        <Button
          variant="outlined" color="error"
          style={{ marginLeft: '20px' }}
          onClick={() => {deleteUser(params.row.id)
    
          }}
        >
          Delete
        </Button>
      ),
    }
  ];
  
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:1128/users/getAll');
      setRows(response.data);
    } catch (error) {
      console.error(error);
    }
  };

const deleteUser = async (id:any) => {
  console.log(id)
  axios.delete(`http://127.0.0.1:1128/users/delete/${id}`)
  .then(() => {
    fetchUsers();
  })
  .catch((error) => {
    console.error(error);
  });
}

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ display: 'flex' }}>
        <SideBar setClicked={setClicked} clicked={clicked} fetchUsers={fetchUsers} />
    <div style={{ height: 400, width: '100%',display: 'flex',
          flexWrap: 'wrap',
          flex: 1,
          marginLeft: clicked ? '250px' : '70px' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        onSelectionModelChange={(newSelection) => {
          fetchUsers(newSelection.selectionModel[0]);
        }}
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