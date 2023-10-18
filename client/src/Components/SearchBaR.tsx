"use client"
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import DatePickers from "./DatePickers";
import CalendarIcon from "../../public/Assets/icons/calendar.svg";
import { useRouter } from "next/navigation";
import { fetchAllFlights, fetchFlights,selected} from "../store/flights";
import Image from "next/image";
const planeLanding =<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M381 114.9L186.1 41.8c-16.7-6.2-35.2-5.3-51.1 2.7L89.1 67.4C78 73 77.2 88.5 87.6 95.2l146.9 94.5L136 240 77.8 214.1c-8.7-3.9-18.8-3.7-27.3 .6L18.3 230.8c-9.3 4.7-11.8 16.8-5 24.7l73.1 85.3c6.1 7.1 15 11.2 24.3 11.2H248.4c5 0 9.9-1.2 14.3-3.4L535.6 212.2c46.5-23.3 82.5-63.3 100.8-112C645.9 75 627.2 48 600.2 48H542.8c-20.2 0-40.2 4.8-58.2 14L381 114.9zM0 480c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32z"/></svg>
const planeArrival =<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M.3 166.9L0 68C0 57.7 9.5 50.1 19.5 52.3l35.6 7.9c10.6 2.3 19.2 9.9 23 20L96 128l127.3 37.6L181.8 20.4C178.9 10.2 186.6 0 197.2 0h40.1c11.6 0 22.2 6.2 27.9 16.3l109 193.8 107.2 31.7c15.9 4.7 30.8 12.5 43.7 22.8l34.4 27.6c24 19.2 18.1 57.3-10.7 68.2c-41.2 15.6-86.2 18.1-128.8 7L121.7 289.8c-11.1-2.9-21.2-8.7-29.3-16.9L9.5 189.4c-5.9-6-9.3-14-9.3-22.5zM32 448H608c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32zm96-80a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm128-16a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
function SearchBar() {
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value, "this is date");

    setDateFrom(e.target.value);
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [dateModalVisible, setDateModalVisible] = useState(false);
  const [departDate, setDepartDate] = React.useState<Date | null>(null);
  const [arriveDate, setArriveDate] = React.useState<Date | null>(null);
const router = useRouter()
  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleOpenDateModal = () => {
    setDateModalVisible(!dateModalVisible);
  };

  const modalClass = dateModalVisible ? "date_picker_modal" : "hidden";

  const [destFrom, setDestFrom] = useState("");
  const [destTo, setDestTo] = useState<string>("");
  const [dateFrom, setDateFrom] = useState<string>("");

  interface objTypeAll {
    destFrom: string;
    destTo: string;
    dateFrom: Date;
    dateTo: Date;
    price: number;
  }

  const dispatch: AppDispatch = useDispatch();

  const flights = useSelector((state: RootState) => state.flights.Flights);
  console.log(flights,"this is flights");

  const allFlight: objTypeAll[] = useSelector(
    (state: RootState) => state.flights.allFlights
  );

  useEffect(() => {
    dispatch(fetchAllFlights());
  }, []);

  let a = allFlight.map((e: objTypeAll) => e.destFrom);
  let b = allFlight.map((e: objTypeAll) => e.destTo);
  let flight = { origin: [...new Set(a)], destination: [...new Set(b)] };
  console.log(flight.origin)

  return (


          <div className="landing-inputs">
            <div className="landing-input">
             {planeLanding}
              <select
                onChange={(e) => setDestFrom(e.target.value)}
                name="from"
                id=""
                placeholder="where are you going"
              >
                <option>where are you going</option>
                {flight.origin.map((e) => (
                  <option value={e}>{e}</option>
                ))}
              </select>
            </div>

            <div className="landing-input">
            {planeArrival}
              <select
                onChange={(e) => setDestTo(e.target.value)}
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
                <Image
                  id="dateIcon"
                  src={CalendarIcon}
                  alt=""
                  onClick={handleOpenDateModal}
                />
                <p>Depart - </p>
                <p>Return</p>
              </div>
              <div className="date_picker_modal" id={modalClass}>
                <DatePickers
                  handleOpenDateModal={handleOpenDateModal}
                  setDepartDate={setDepartDate}
                  setArriveDate={setArriveDate}
                />
              </div>
            </div>
            <div className="landing-input">
              <i className="fa-solid fa-user"></i>
              <input type="number" placeholder="Adults" />
            </div>
            <div>
              <button
                className="landing-boutton"
                onClick={() => {
                  dispatch(selected({}));
               
                    dispatch(
                      fetchFlights({
                        destFrom,
                        destTo,
                        departDate:
                          departDate
                            ?.toLocaleDateString()
                            .replace(/\//g, "-") ?? "",
                        arriveDate:
                          arriveDate
                            ?.toLocaleDateString()
                            .replace(/\//g, "-") ?? "",
                      })
                    )
                    router.push("/FlightFinder")
                }}
              >
                search
              </button>
            </div>
            </div>
  );
}

export default SearchBar;
