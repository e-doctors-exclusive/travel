"use client"
import React, { useEffect, useState } from "react";
import icon1 from "../../../public/Assets/icons/PaymentPage-icons/credit card.svg";
import icon5 from "../../../public/Assets/icons/PaymentPage-icons/flousi.svg";
import information from "../../../public/Assets/icons/PaymentPage-icons/information.svg";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const Payment = () => {
  const router = useRouter();
  const [can, setCan] = useState(true);
  const user = useSelector((state: any) => state.token);
  const userid = user.token.id;
  const currentFlight = useSelector((state:any) => state.flights.currentFlight);
  const currentReservation = useSelector((state:any) => state.flights.currentReservation);

  const takeAseat = async (id:number) => {
    try {
      const res = await axios.put(`http://localhost:1128/seats/update/${id}`, {
        availble: false,
      });
      return res.data;
    } catch (error) {
      throw error;
    }
  };

  const addReservation = async (obj:object) => {
    try {
      const res = await axios.post(`http://localhost:1128/reservation/add`, obj);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    setCan(true);
  }, []);

  return (
    <>
     <Navbar />
      <div className="payment_main_container">
        <div className="payment_container">
          <div className="payment_methods">
            <div className="payment_method_title">
              <p>Payment method</p>
              <p>
                Select a payment method below. Tripma processes your payment
                securely with end-to-end encryption.
              </p>
            </div>
            <ul className="payment_methods_creditCard">
              <li>
                <Image src={icon1} alt="" />
                <p>Credit card</p>
              </li>
              <li>
                <Image id="flousi_icon" src={icon5} alt="" className="flousi" />
                <p>Flousi</p>
              </li>
            </ul>
            <div className="payment_methods_creditCard_details">
              <p>Credit card details</p>
              <div className="payment_methods_billing_adress_check">
                <label>
                  <input type="checkbox" />
                </label>
                <p>Billing address is same as Passenger 1 </p>
              </div>
              <input type="text" placeholder="Name on card" />
              <input type="text" placeholder="Card number" />
              <div className="exp-ccv-inputs">
                <div className="exp">
                  <input type="text" placeholder="Expiration date" />
                  <p>MM/YY</p>
                </div>
                <div className="ccv">
                  <input type="text" placeholder="CCV" />
                  <Image src={information} alt="" />
                </div>
              </div>
            </div>
            <div className="payment_methods_createAccount"></div>
            <div className="payment_methods_privacyPolicy">
              <div className="cancellation_policy">
                <p>Cancellation policy</p>
                <p>
                  This flight has a flexible cancellation policy. If you cancel
                  or change your flight up to 30 days before the departure date,
                  you are eligible for a free refund. All flights booked on
                  Tripma are backed by our satisfaction guarantee, however
                  cancellation policies vary by airline. See the{" "}
                  <span>full cancellation policy</span> for this flight.
                </p>
              </div>

              {
                can ?  <div className="payment_methods_privacyPolicy_btns">
                <button
                  onClick={() => {
                    router.push("/PlaneBooking");
                  }}
                >
                  Back to seat select
                </button>
                {user.token.id ? (
                  <button
                    id="goout"
                    onClick={() => {
                      setCan(false)
                      takeAseat(currentReservation.seatid);
                      addReservation({
                        firstName: currentReservation.firstName,
                        lastName: currentReservation.lastName,
                        birthDate: currentReservation.date,
                        phone: currentReservation.phoneNumber,
                        email: currentReservation.email,
                        userId: userid,
                        FlightId: currentFlight.id,
                      });
                    }}
                  >
                    Confirm and pay
                  </button>
                ) : (
                  <p id="alert">to make your checkout you need to connect</p>
                )}
              </div> : null
              }
             


            </div>
          </div>
          <div className="bills-trips">
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
                    <p>{}</p>
                    <p>
                      {currentFlight.departureTime} -{" "}
                      {currentFlight.arrivalTime}
                    </p>
                    <p className="ref">
                      {currentFlight.destFrom} - {currentFlight.destTo}
                    </p>
                  </div>
                </div>
              </div>
              <div className="trip_fees">
                <div className="total-cost">
                  <p>Seat</p>
                  <p>Subtotal</p>
                  <p>Taxes and Fees</p>
                  <p>Total</p>
                </div>
                <div className="prices">
                  <p>{currentReservation.seatNumber}</p>
                  <p>${currentFlight.price}</p>
                  <p>$66</p>
                  <p>${currentFlight.price + 66}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
