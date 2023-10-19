"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "../../Components/SideBar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AddFlight = () => {
  const [clicked, setClicked] = useState(true);
  const [destFrom, setDestFrom] = useState("");
  const [destTo, setDestTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [brands, setBrands] = useState([]);
  const [numberOfSeats, setNumberOfSeats] = useState("");

  const fetchBrands = async () => {
    try {
      const response = await axios.get("http://localhost:1128/brands/getAll");
      setBrands(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    try {
      const formattedDepartureDate = new Date(departureDate);
      const formattedArrivalDate = new Date(arrivalDate);
      const response = await axios.post("http://localhost:1128/flights/add", {
        destFrom,
        destTo,
        dateFrom: formattedDepartureDate,
        departureTime: departureTime,
        dateTo: formattedArrivalDate,
        arrivalTime: arrivalTime,
        price:Number(price),
        brandId:Number(brand),
      });
      const seats = await axios.post("http://localhost:1128/seats/addSeats", {
        FlightId:response.data,
        numberOfSeats:numberOfSeats
      });
      toast.success("Flight added successfully");
      console.log(response.data);
    } catch (error) {
      toast.error("Error adding flight");
      console.error(error);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <SideBar clicked={clicked} setClicked={setClicked} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flex: 1,
          marginLeft: clicked ? "250px" : "70px",
        }}
      >
        <div className="container">
          <div className="form-container">
            <h1>Add a Flight</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="input"
                placeholder="Destination From"
                value={destFrom}
                onChange={(event) => setDestFrom(event.target.value)}
              />
              <input
                type="text"
                className="input"
                placeholder="Destination To"
                value={destTo}
                onChange={(event) => setDestTo(event.target.value)}
              />
              <label>
                Departure Date:
                <input
                  type="date"
                  className="input"
                  value={departureDate}
                  onChange={(event) => setDepartureDate(event.target.value)}
                />
              </label>
              <label>
                Departure Time:
                <input
                  type="time"
                  className="input"
                  value={departureTime}
                  onChange={(event) => {
                    console.log(event.target.value);
                    setDepartureTime(event.target.value)
                  }}
                />
              </label>
              <label>
                Arrival Date:
                <input
                  type="date"
                  className="input"
                  value={arrivalDate}
                  onChange={(event) => setArrivalDate(event.target.value)}
                />
              </label>
              <label>
                Arrival Time:
                <input
                  type="time"
                  className="input"
                  value={arrivalTime}
                  onChange={(event) => setArrivalTime(event.target.value)}
                />
              </label>
              <input
                type="number"
                className="input"
                placeholder="Price"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
              />
              <select
                className="input"
                value={brand}
                onChange={(event) => setBrand(event.target.value)}
              >
                <option>Select a brand</option>
                {brands.map((brand:any) => (
                  <option key={brand.id} value={brand.id}>
                    {brand.name}
                  </option>
                ))}
              </select>
              <input
                type="number"
                className="input"
                placeholder="Number of Seats"
                value={numberOfSeats}
                onChange={(event) => setNumberOfSeats(event.target.value)}
              />
              <button type="submit" className="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddFlight;
