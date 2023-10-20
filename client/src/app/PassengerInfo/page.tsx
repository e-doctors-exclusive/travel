"use client"
import Image from "next/image";
import React, { useState, ChangeEvent, useEffect } from "react";
import BagIllustration from "../../../public/Assets/Illustration.png";
import logoIllustration from "../../public/Assets/logoIllustration.png";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { AppDispatch } from "../../store";
import { RootState } from "../../store";
import Link from 'next/link';
import  {fillForm}  from "../../store/flights";
import {selectLink} from "../../store/tokenSlicer"
import {paymentUser,checkUser,selectUser} from "../../store/tokenSlicer"
import  {useRouter}  from "next/navigation";
interface FormData {
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string;
  date: string;
  email: string;
  phoneNumber: string;
  redressNumber: string;
  knownTravelerNumber: string;
  sameAsPassenger1: boolean;
  seatNumber:string
}
interface OneFlightData {
  Reservations: any[];
  Seats: any[];
  Users: any[];
  arrivalTime: string;
  brand:any;
  createdAt: string;
  dateFrom: string;
  dateTo: string;
  departureTime: string;
  destFrom: string;
  destTo: string;
  id: number;
  price: number;
  updatedAt: string;
}
interface fightType{
  oneFlight:OneFlightData 
}


const PassengerInfo: React.FC = () => {
  const router = useRouter()
  const userData:any = useSelector(selectUser)
  const link = useSelector(selectLink)
  const dispatsh:AppDispatch = useDispatch()
  // const router = useRouter()
  const currentFlight:any= useSelector((state: RootState) => state.flights.currentFlight);
  const currentReservation:any= useSelector((state: RootState) => state.flights.currentReservation);
  const [formData, setFormData] = useState<FormData>({
    firstName: currentReservation.firstName,
    middleName:  currentReservation.middleName,
    lastName: currentReservation.middleName,
    suffix:  currentReservation.suffix,
    date:currentReservation.date,
    email:currentReservation.email,
    phoneNumber:currentReservation.phoneNumber,
    redressNumber:currentReservation.phoneNumber,
    knownTravelerNumber: "",
    sameAsPassenger1: false,
    seatNumber:currentReservation.seatNumber,
  });


  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, 
      [name]: value, 
    });
    
    
    
  };
useEffect(()=>{
  dispatsh(checkUser())
  dispatsh(paymentUser(currentFlight.price+121))
},[])
  const handleCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked, 
    });
    // console.log(e.target.checked);
  };

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
    
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      // console.log(count);
      
    }
  };
  
  return (
    <div>
      <Navbar />
      <div className="passenger_container">
        <div className="passenger-main-container">
          <div className="passenger-form">
            <div className="required-info">
              <p id="pas_inf">Passenger information</p>
              <p>
                Enter the required information for each traveler and be sure
                that it exactly matches the government-issued ID presented at
                the airport.
              </p>
            </div>
            <div className="from1">
              <p>Passenger 1 (Adult)</p>
              <div className="form1-inputs">
                <input
                  type="text"
                  placeholder="First name*"
                  name="firstName"
                  defaultValue={currentReservation.firstName}
                  // value={formData.firstName}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Middle"
                  name="middleName"
                  defaultValue={currentReservation.middleName}
                  // value={formData.middleName}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Last name*"
                  name="lastName"
                  defaultValue={currentReservation.lastName}
                  // value={formData.lastName}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Suffix"
                  name="suffix"
                  defaultValue={currentReservation.suffix}
                  // value={formData.suffix}
                  onChange={handleInputChange}
                />
                <input
                  id="flexBasis"
                  type="date"
                  placeholder="Date of birth"
                  name="date"
                  defaultValue={currentReservation.date}
                  // value={formData.date}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="from2">
              <input
                type="text"
                placeholder="Email address*"
                name="email"
                defaultValue={currentReservation.email}
                // value={formData.email}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Phone number*"
                name="phoneNumber"
                defaultValue={currentReservation.phoneNumber}
                // value={formData.phoneNumber}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Redress number"
                name="redressNumber"
                defaultValue={currentReservation.redressNumber}
                // value={formData.redressNumber}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Known traveller number*"
                name="knownTravelerNumber"
                defaultValue={currentReservation.knownTravelerNumber}
                // value={formData.knownTravelerNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="form3">
              <p>Emergency contact information</p>
              <div className="check">
                <input
                  type="checkbox"
                  name="sameAsPassenger1"
                  checked={formData.sameAsPassenger1}
                  onChange={handleCheckBox}
                />
                <p>Same as Passenger 1</p>
              </div>
              <div className="form4">
                <input type="text" placeholder="First name*" />
                <input type="text" placeholder="Last name*" />
                <input type="text" placeholder="Email adress*" />
                <input type="text" placeholder="Phone number*" />
              </div>
            </div>
            <div className="bag-info">
              <p id="title">Bag information</p>
              <p id="desc">
                Each passenger is allowed one free carry-on bag and one personal
                item. First checked bag for each passenger is also free. Second
                bag check fees are waived for loyalty program members.{" "}
                <span>See the full bag policy.</span>
              </p>
              <div className="bag-info-checked">
                <div className="first">
                  <p id="title2">Passenger 1</p>
                  <p>First Last</p>
                </div>
                <div className="second">
                  <p id="title2">Checked bags</p>
                  <div className="inc-btns">
                    <button>
                      <svg
                        onClick={handleDecrement}
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M9 15H23C23.5523 15 24 15.4477 24 16C24 16.5523 23.5523 17 23 17L9 17C8.44772 17 8 16.5523 8 16C8 15.4477 8.44772 15 9 15Z"
                          fill="#605DEC"
                        />
                      </svg>
                    </button>
                    <p>{count}</p>
                    <button>
                      <svg
                        onClick={handleIncrement}
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M15 15V9C15 8.44772 15.4477 8 16 8C16.5523 8 17 8.44772 17 9V15L23 15C23.5523 15 24 15.4477 24 16C24 16.5523 23.5523 17 23 17L17 17V23C17 23.5523 16.5523 24 16 24C15.4477 24 15 23.5523 15 23V17H9C8.44772 17 8 16.5523 8 16C8 15.4477 8.44772 15 9 15H15Z"
                          fill="#605DEC"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="choice-btns">
              <button className="btnsave_and_clode" onClick={()=>{
                (localStorage.setItem("price",currentFlight.price+121))
                localStorage.setItem("id",userData.id)
                console.log(userData.id);
                
                router.push(link)
              }} >Save and close</button>
              <Link href="/PlaneBooking">
              <button onClick={()=>{dispatsh(fillForm(formData)) }} id="larger">Select seats</button>
              </Link>
            </div>
          </div>
          <div className="trips">
            <div className="informatios">
              <div className="trip-info">
                <div className="aller">
                  <div className="aller_container">
                    <Image src={currentFlight.brand?.image} alt="" />
                    <div className="img_title">
                      <p>{currentFlight.brand?.name}</p>
                      <p className="ref">FIG4312</p>
                    </div>
                  </div>
                  <div className="time">
                    <p>{currentFlight.departureTime} - {currentFlight.arrivalTime}</p>
                    <p className="ref">{currentFlight.destFrom} - {currentFlight.destTo}</p>
                  </div>
                </div>
              </div>
              <div className="trip_fees">
                <div className="total-cost">
                  <p>Subtotal</p>
                  <p>Taxes and Fees</p>
                  <p>Total</p>
                </div>
                <div className="prices">
                  <p>${currentFlight.price}</p>
                  <p>$121</p>
                  <p>${currentFlight.price + 121}</p>
                </div>
              </div>
            </div>
            <Image id="illustration" src={BagIllustration} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PassengerInfo;

