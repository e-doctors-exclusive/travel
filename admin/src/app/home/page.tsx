"use client"
import React from 'react';
import { useState } from 'react';
import SideBar from '../../Components/SideBar';
import BasicArea from '../../Components/BasicArea';
import HorizontalBars from '../../Components/HorizontalBars';

const Home = () => {
  const [clicked, setClicked] = useState(true);
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
          <BasicArea />
          <HorizontalBars />
        </div>
      </div>
    </div>
  );
};

export default Home;