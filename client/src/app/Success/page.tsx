"use client"
import React, { useEffect } from 'react'
import '../../styles/Success.css'
import { useRouter } from 'next/navigation'
import {savePaymentHistory,checkUser,selectUser,selectPrice} from "@/store/tokenSlicer"
import { AppDispatch } from "../../store";
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";

const page = () => {
  const dispatsh:AppDispatch = useDispatch()
  const price:number = Number(localStorage.getItem("price"))
  const userId = localStorage.getItem("id")
  const router = useRouter()
  useEffect(()=>{
    dispatsh(checkUser())
  },[])
  
  const handleClickPayment = ()=>{

    dispatsh(savePaymentHistory({price,userId}))
    router.push("/")
  }
  return (

      <div className='container-success'>
        <div  className='tick' >
        <svg xmlns="http://www.w3.org/2000/svg" height="8em" fill="green" viewBox="0 0 448 512"><style></style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
        </div>
        <div className="paragraph-success">
          <h1 className='thank'>Thank you!</h1>
          <p className='pay'>Payment done Successfully</p>
          <p className='you-will'> You will be redirected to the home page shortly or <br/> click here to return to home page </p>
        </div>
        <div className='button-success'>
          <button className='btn-success' onClick={()=>handleClickPayment()} >Home</button>
        </div>
      </div>

    )
}

export default page