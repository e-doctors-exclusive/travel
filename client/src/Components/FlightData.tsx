import React from "react";
import "../styles/FlightFinder.css";
import { selected } from "../store/flights";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { useNavigate } from "react-router-dom";
interface OneFlightData {
  Reservations: any[];
  Seats: any[];
  Users: any[];
  arrivalTime: string;
  brand: null;
  brandId: null;
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
interface propsType{
  oneFlight:OneFlightData 
}
const FlightData: React.FC <propsType>= (props:any) => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate()
 let startTime:any = props.oneFlight.departureTime.split(':').map(Number);
 let endTime:any = props.oneFlight.arrivalTime.split(':').map(Number);
 const hours1 = startTime[0];
  const minutes1 = startTime[1];
  const seconds1 = startTime[2];
  const hours2 = endTime[0];
  const minutes2 = endTime[1];
  const seconds2 = endTime[2];
  const totalSeconds1 = hours1 * 3600 + minutes1 * 60 + seconds1;
  const totalSeconds2 = hours2 * 3600 + minutes2 * 60 + seconds2;

  const timeDiff = Math.abs(totalSeconds2 - totalSeconds1);

  const hours = Math.floor(timeDiff / 3600);
  const minutes = Math.floor((timeDiff % 3600) / 60);

  return (
    <div className="flight-data" onClick={()=>{dispatch(selected(props.oneFlight));}}>
      <div className="logo-sec">
        <img id="airline_logo" src={props.oneFlight.brand.image} alt="" />
        <div className="logo-sec-desc">
          <p>{`${hours}:${minutes}m`}</p>
          <p>{props.oneFlight.brand.name}</p>
        </div>
      </div>
      <div>
        <p>{props.oneFlight.departureTime}- {props.oneFlight.arrivalTime}</p>
      </div>
      <div>
        <p>1 stop</p>
        <p>2h 45m in HNL</p>
      </div>
      <div>
        <p>${props.oneFlight.price}</p>
        <p>round trip</p>
      </div>
    </div>
  );
};

export default FlightData;
