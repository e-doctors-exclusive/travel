// src/components/LandingPage.js
"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Image from 'next/image';


import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
} from 'mdb-react-ui-kit'
import test1 from '../images/test1.jpg'
import axios from 'axios';

const LandingPage=()=> {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [alert, setAlert] = useState("")
  const route = useRouter()


  const handleLogin = (body: any) => {
    axios.post('http://localhost:1337/admin/signin', body)
      .then((res) => {
        console.log(res.data);
        route.push("/home")
      })
      .catch((error) => {
        setAlert("Verify your Password")
        console.log(error);
      });
  }


  return (
    <div className='Landing'>

      <MDBContainer fluid>
        <MDBRow>

          <MDBCol sm='6' className='login'>

            <div className='d-flex flex-row ps-5 pt-5' style={{ color: 'white' }}>
              <MDBIcon fas icon="plane" />
              <span className="h1 fw-bold mb-0" style={{ color: 'white' }}>Tripma</span>
            </div>

            <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

              <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px', color: 'white' }}>Log in</h3>


              <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg' type='email' size="lg" onChange={((e) => { setEmail(e.target.value) })} />
              <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg' type='password' size="lg" onChange={((e) => { setPassword(e.target.value) })} onKeyDown={(event) => {
                if (event.keyCode == 13) {
                  handleLogin({ email, password })
                }
              }} />

              <MDBBtn id='logg' className="mb-4 px-5 mx-5 w-100" color='info' size='lg' onClick={(() => { handleLogin({ email, password }) })}>Login</MDBBtn>
              <p style={{ color: "red", fontSize: "20px", display: "flex", justifyContent: "center" }}>{alert}</p>
            </div>

          </MDBCol>

          <MDBCol sm='6' className='d-none d-sm-block px-0'>
            <Image src={test1}
              alt="Login image" className="w-100" />
          </MDBCol>

        </MDBRow>

      </MDBContainer>
    </div>
  );
}

export default LandingPage;