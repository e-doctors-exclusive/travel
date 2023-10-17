// import "../styles/landing.css";
import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "../store";
import DatePickers from "./DatePickers";
import CalendarIcon from "../Assets/icons/calendar.svg";
// import { fetchAllFlights, fetchFlights,selected} from "../store/flights";
// import { useNavigate } from "react-router-dom";

function SearchBar() {
  // const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(e.target.value, "this is date");

  //   setDateFrom(e.target.value);
  // };

  // const [modalVisible, setModalVisible] = useState(false);
  // const [dateModalVisible, setDateModalVisible] = useState(false);
  // const [departDate, setDepartDate] = React.useState<Date | null>(null);
  // const [arriveDate, setArriveDate] = React.useState<Date | null>(null);
// const navigate = useNavigate()
//   const handleOpenModal = () => {
//     setModalVisible(true);
//   };

  // const handleCloseModal = () => {
  //   setModalVisible(false);
  // };

  // const handleOpenDateModal = () => {
  //   setDateModalVisible(!dateModalVisible);
  // };

  // const modalClass = dateModalVisible ? "date_picker_modal" : "hidden";

  // const [destFrom, setDestFrom] = useState("");
  // const [destTo, setDestTo] = useState<string>("");
  // const [dateFrom, setDateFrom] = useState<string>("");

  interface objTypeAll {
    destFrom: string;
    destTo: string;
    dateFrom: Date;
    dateTo: Date;
    price: number;
  }

  // const dispatch: AppDispatch = useDispatch();

  // const flights = useSelector((state: RootState) => state.flights.Flights);
  // console.log(fligh  ts,"this is flights");

  // const allFlight: objTypeAll[] = useSelector(
  //   (state: RootState) => state.flights.allFlights
  // );

  // useEffect(() => {
  //   dispatch(fetchAllFlights());
  // }, []);

  // let a = allFlight.map((e: objTypeAll) => e.destFrom);
  // let b = allFlight.map((e: objTypeAll) => e.destTo);
  // let flight = { origin: [...new Set(a)], destination: [...new Set(b)] };
  // console.log(flight.origin)

  return (


          <div className="landing-inputs">
            <div className="landing-input">
              <i className="fa-solid fa-plane-departure"></i>
              <select
                // onChange={(e) => setDestFrom(e.target.value)}
                name="from"
                id=""
                placeholder="where are you going"
              >
                <option>where are you going</option>
                {/* {flight.origin.map((e) => (
                  <option value={e}>{e}</option>
                ))} */}
              </select>
            </div>

            <div className="landing-input">
              <i className="fa-solid fa-plane-arrival"></i>
              <select
                // onChange={(e) => setDestTo(e.target.value)}
                name="from"
                id=""
                placeholder="where are you going"
              >
                <option value="">where are you comming</option>
                {/* {flight.destination.map((e) => (
                  <option value={e}>{e}</option>
                ))} */}
              </select>
            </div>

            <div className="landing-input calendar_check">
              <div className="date_data">
                <img
                  id="dateIcon"
                  src={CalendarIcon}
                  alt=""
                  // onClick={handleOpenDateModal}
                />
                <p>Depart - </p>
                <p>Return</p>
              </div>
              {/* <div className="date_picker_modal" id={modalClass}>
                <DatePickers
                  handleOpenDateModal={handleOpenDateModal}
                  setDepartDate={setDepartDate}
                  setArriveDate={setArriveDate}
                />
              </div> */}
            </div>
            <div className="landing-input">
              <i className="fa-solid fa-user"></i>
              <input type="number" placeholder="Adults" />
            </div>
            <div>
              <button
                className="landing-boutton"
                // onClick={() => {
                //   dispatch(selected({}));
               
                //     dispatch(
                //       fetchFlights({
                //         destFrom,
                //         destTo,
                //         departDate:
                //           departDate
                //             ?.toLocaleDateString()
                //             .replace(/\//g, "-") ?? "",
                //         arriveDate:
                //           arriveDate
                //             ?.toLocaleDateString()
                //             .replace(/\//g, "-") ?? "",
                //       })
                //     )
                //     navigate("/FlightFinder")
                // }}
              >
                search
              </button>
            </div>
            </div>
  );
}

export default SearchBar;
