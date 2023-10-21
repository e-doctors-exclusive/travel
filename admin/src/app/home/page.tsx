"use client"
import React from 'react';
import { useState,useEffect } from 'react';
import SideBar from '../../Components/SideBar';
import BasicArea from '../../Components/BasicArea';
import HorizontalBars from '../../Components/HorizontalBars';
import axios from 'axios';

const Home = () => {
  const [clicked, setClicked] = useState(true);
  const [moneys,setMoney]=useState([])
  const [users,setUsers]= useState([])
  console.log('these are users',users.length);
  console.log('this is money',moneys);
  
  useEffect(() => {
    fetchUsers();
    fetchPayment();
  }, []);

  const fetchPayment = async ()=>{
    try {
      const payment = await axios.get('http://127.0.0.1:1337/payment/getAllPayments')
      setMoney(payment.data)
    } catch (error) {
      throw error
    }
}

  const fetchUsers =async()=>{
    try {
     const user = await axios.get('http://127.0.0.1:1337/users/getAll')
     setUsers(user.data)
     console.log(user.data);
     
    } catch (error) {
      throw error 
    }
  }

  const usersNumber = (array:Array<number>)=>{
    return array.length
  }

  return (
    
    <div style={{ display: 'flex' }}>
    <SideBar setClicked={setClicked} clicked={clicked} />
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        flex: 1,
        marginLeft:'250px' ,
      }}
    >
        <div style={{ display: 'flex' }}>
          <BasicArea money={moneys}/>
          <HorizontalBars users={users}/>
        </div>
      </div>
    </div>
  );
};

export default Home;