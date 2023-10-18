"use client"
import Image from "next/image";
import React, { useReducer, useState } from "react";
import point from "../../../public/Assets/tripmaBooking/pointHeavy.png";
import check from "../../../public/Assets/tripmaBooking/check heavy.png";
import wordmark from "../../../public/Assets/tripmaBooking/Wordmark.png";
import arrowRight from "../../../public/Assets/tripmaBooking/arrowRight.png";
import ecoSeats from "../../../public/Assets/tripmaBooking/Economy Seats.png";
import bussinesSeats from "../../../public/Assets/tripmaBooking/Business Seats.png";
import { useSelector } from "react-redux";
import { fillForm } from "../../store/flights";
import { AppDispatch, RootState } from "../../store";
import plane from "../../../public/Assets/plane.svg";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
const PlaneBooking = () => {
  const currentReservation: any = useSelector(
    (state: RootState) => state.flights.currentReservation
  );
  const [selectedSeat, setCurrentSeat] = useState<number>(0);
  const [seatNumber, setSeatNumbert] = useState<string>(currentReservation.seatNumber || "");
  const currentFlight: any = useSelector(
    (state: RootState) => state.flights.currentFlight
  );
 
  const dispatsh = useDispatch();
  const router = useRouter();
  return (
    <div className="tripma_container">
      <div className="tripma">
        <div className="the-plane">
          <div className="plane_svg">
            <Image src={plane} alt="" />
            <div className="plane_seats">
              {currentFlight.Seats?.map((oneSeat: any) => {
                return (
                  <button
                    disabled={!oneSeat.availble}
                    style={
                      oneSeat.availble
                        ? {}
                        :{ background: "#ec5986" }
                    }
                    className="seat"
                    id="forclik"
                    onClick={() => {
                      setCurrentSeat(oneSeat.id);
                      setSeatNumbert(oneSeat.name);
                      dispatsh(
                        fillForm({
                          ...currentReservation,
                          seatNumber: seatNumber,
                          seatid:oneSeat.id
                        })
                      );
                    }}
                  >
                   
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="seat-selector">
          <div className="border" />
          <div className="content">
            <div className="progress-step-header-default">
              <div className="flight-information">
                <div className="flight-info-information-da">
                  <div className="code">{currentFlight.destFrom}</div>
                  <div className="location"></div>
                </div>
                <Image className="arrowright-icon" alt="" src={arrowRight} />
                <div className="flight-info-information-da">
                  <div className="code">{currentFlight.destTo}</div>
                  <div className="location"></div>
                </div>
                <Image className="arrowright-icon1" alt="" src={wordmark} />
                <div className="flight-info-information-da2">
                  <div className="code">Code</div>
                  <div className="location">City, Country</div>
                </div>
              </div>
              <div className="progress-step">
                <div className="flight-info-divider-dark">
                  <div className="divider" />
                </div>
                <div className="flight-info">
                  <div className="flight-info-inactive">
                    <div className="time-data">
                      <span></span>
                      <span className="span">{` | `}</span>
                      <span>{currentFlight.departureTime}</span>
                    </div>
                    <div className="direction">Departing</div>
                  </div>
           
                </div>
                <div className="flight-info-divider-dark">
                  <div className="divider" />
                </div>
                <div className="flight-info1">
                  <div className="time-data">
                    <span></span>
                    <span className="span">{` | `}</span>
                    <span>{currentFlight.arrivalTime}</span>
                  </div>
                  <div className="direction">Arriving</div>
                </div>
              </div>
            </div>
            <div className="feature-lists">
              <div className="feature-list-economy">
                <Image className="economy-seats-icon" width={320} height={180} alt="" src={ecoSeats} />
                <div className="feature-list">
                  <div className="header-and-badge">
                    <div className="header">Economy</div>
                    <div className="badge-selected">
                      <b className="label">Selected</b>
                    </div>
                  </div>
                  <div className="description">
                    Rest and recharge during your flight with extended leg room,
                    personalized service, and a multi-course meal service
                  </div>
                  <div className="divider-thick" />
                  <div className="feature-list-bullet">
                    <Image className="point-heavy-icon" alt="" src={point} />
                    <div className="bullets-of-key">
                      Built-in entertainment system
                    </div>
                  </div>
                  <div className="feature-list-bullet">
                    <Image className="point-heavy-icon" alt="" src={point} />
                    <div className="bullets-of-key">
                      Complimentary snacks and drinks
                    </div>
                  </div>
                  <div className="feature-list-bullet">
                    <Image className="point-heavy-icon" alt="" src={point} />
                    <div className="bullets-of-key">
                      One free carry-on and personal item
                    </div>
                  </div>
                  <div className="feature-list-bullet3">
                    <Image
                      className="point-heavy-icon"
                      alt=""
                      src="/rectangle-10.svg"
                      width={0}
                      height={0}
                    />
                    <div className="bullets-of-key">
                      Bullets of key value for user
                    </div>
                  </div>
                  <div className="feature-list-bullet3">
                    <Image
                      className="point-heavy-icon"
                      alt=""
                      src="/rectangle-10.svg"
                      width={0}
                      height={0}
                    />
                    <div className="bullets-of-key">
                      Bullets of key value for user
                    </div>
                  </div>
                  <div className="feature-list-bullet3">
                    <Image
                      className="point-heavy-icon"
                      alt=""
                      src="/rectangle-10.svg"
                      width={0}
                      height={0}
                    />
                    <div className="bullets-of-key">
                      Bullets of key value for user
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature-list-economy">
                <Image
                  className="economy-seats-icon"
                  alt=""
                  src={bussinesSeats}
                />
                <div className="feature-list">
                  <div className="header-and-badge1">
                    <div className="header">Business class</div>
                    <div className="badge-selected1">
                      <b className="label">Selected</b>
                    </div>
                  </div>
                  <div className="description">
                    Rest and recharge during your flight with extended leg room,
                    personalized service, and a multi-course meal service
                  </div>
                  <div className="divider-thick1" />
                  <div className="feature-list-bullet">
                    <Image className="point-heavy-icon" alt="" src={check} />
                    <div className="bullets-of-key">Extended leg room</div>
                  </div>
                  <div className="feature-list-bullet">
                    <Image className="point-heavy-icon" alt="" src={check} />
                    <div className="bullets-of-key">
                      First two checked bags free
                    </div>
                  </div>
                  <div className="feature-list-bullet">
                    <Image className="point-heavy-icon" alt="" src={check} />
                    <div className="bullets-of-key">Priority boarding</div>
                  </div>
                  <div className="feature-list-bullet">
                    <Image className="point-heavy-icon" alt="" src={check} />
                    <div className="bullets-of-key">Personalized service</div>
                  </div>
                  <div className="feature-list-bullet">
                    <Image className="point-heavy-icon" alt="" src={check} />
                    <div className="bullets-of-key">
                      Enhanced food and drink service
                    </div>
                  </div>
                  <div className="feature-list-bullet">
                    <Image className="point-heavy-icon" alt="" src={check} />
                    <div className="bullets-of-key">
                      Seats that recline 40% more than economy
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="navigation-footer">
              <div className="seat-selection-divider">
                <div className="divider2" />
              </div>
              <div className="content1">
                <div className="user-selections">
                  <div className="passenger-data">
                    <div className="label2">Passenger</div>
                    <div className="name">{currentReservation.firstName}</div>
                  </div>
                  <div className="passenger-data1">
                    <div className="label3">Seat number</div>
                    <div className="name">{seatNumber}</div>
                  </div>
                </div>
                <div className="button-row">
                  <div className="button">
                    <div
                      className="label3"
                      onClick={() => {
                        router.push("/PassengerInfo");
                      }}
                    >
                      Save and close
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlaneBooking;
