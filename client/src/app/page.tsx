// pages/index.js
"use client"
import React from 'react';
import LandingPage from '../MainComponent/LandingPage'
import Navbar from '../Components/Navbar'
import dynamic from "next/dynamic";

function HomePage() {
  return (
    <div>
      <LandingPage />
    </div>
  );
}


export default dynamic (() => Promise.resolve(HomePage), {ssr: false})
