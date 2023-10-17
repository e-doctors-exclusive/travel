import "../styles/ClientProfil.css";
import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Avatar from "../Assets/avatar.jpeg";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { logout } from "../store/userSlicer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfileUser = () => {
  const { user } = useSelector((state) => state.user);
  const [form, setForm] = useState({
    name: user.name,
    email: user.email,
    password: user.password,
    phone: user.phone,
    adress: user.adress,
    city: user.city,
    state: user.state,
    country: user.country,
    zip: user.zip,
    image: user.image,
  });
  const [userReservations, setReservation] = useState([]);
  const [element, setElement] = useState("userProfile");
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "vhhtdlm3");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/dh8ogvcuy/image/upload",
        formData
      );
      setForm({ ...form, image: response.data.secure_url });
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdate = async (obj) => {
    try {
      const response = await axios.put(
        `http://localhost:1128/users/update/${user.id}`,
        obj
      );
      toast.success("Update Successfully");
    } catch (error) {
      console.error(error);
    }
  };

  const takeReservation = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:1128/reservation/getFor/${id}`
      );
      setReservation(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    takeReservation(user.id);
  }, []);
  return (
    <>
      <Navbar />

      <div className="userProfile_main_container">
        <div className="userProfile_container">
          <div className="profile_side_nav">
            <div
              className={`side_nav_card ${
                element === "userProfile" ? "active" : ""
              }`}
              onClick={() => setElement("userProfile")}
            >
              <p className="account_seeting_title">Account Setting</p>
              <p className="account_seeting_desc">
                Details about your Personal information
              </p>
            </div>
            <div
              className={`side_nav_card ${
                element === "userCheckout" ? "active" : ""
              }`}
              onClick={() => {
                setElement("userCheckout");
                takeReservation(user.id);
              }}
            >
              <p className="account_seeting_title">User checkout</p>
              <p className="account_seeting_desc">
                Details about your Payment transactions
              </p>
            </div>
            <div
              className={`side_nav_card ${
                element === "userChat" ? "active" : ""
              }`}
              onClick={() => setElement("userChat")}
            >
              <p className="account_seeting_title">Contact admin</p>
              <p className="account_seeting_desc">
                Details about your Personal information
              </p>
            </div>
            <button id="logout" onClick={()=>{
              dispatch(logout())
              navigate("/")
              toast.info("Goodbye!");
            }}>Logout</button>
          </div>
          <div className="profile_container">
            {element === "userProfile" && (
              <>
                <div className="profile_img">
                  <div className="avatar_container">
                    <img src={Avatar} id="avatar" />
                    <div className="avatar_info">
                      <p id="avatar_title">Upload a New Photo</p>
                      <p id="avatar_file_source">Profile-pic.jpg</p>
                    </div>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    placeholder="Update"
                  />
                </div>
                <div className="profile_information">
                  <p>Change User Information here</p>
                  <div className="username_email">
                    <input
                      type="text"
                      placeholder="username"
                      defaultValue={user.name}
                      onChange={(e) => {
                        setForm({ ...form, name: e.target.value });
                      }}
                    />
                    <input
                      type="text"
                      placeholder="email"
                      defaultValue={user.email}
                      onChange={(e) => {
                        setForm({ ...form, email: e.target.value });
                      }}
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Address*"
                    defaultValue={user.adress}
                    onChange={(e) => {
                      setForm({ ...form, adress: e.target.value });
                    }}
                  />
                  <div className="user_info">
                    <input
                      type="text"
                      placeholder="City"
                      defaultValue={user.city}
                      onChange={(e) => {
                        setForm({ ...form, city: e.target.value });
                      }}
                    />
                    <input
                      type="text"
                      placeholder="State/Province"
                      defaultValue={user.state}
                      onChange={(e) => {
                        setForm({ ...form, state: e.target.value });
                      }}
                    />
                    <input
                      type="number"
                      placeholder="Zip Code"
                      defaultValue={user.zip}
                      onChange={(e) => {
                        setForm({ ...form, zip: parseInt(e.target.value) });
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Country"
                      defaultValue={user.country}
                      onChange={(e) => {
                        setForm({ ...form, country: e.target.value });
                      }}
                    />
                  </div>
                  <button onClick={()=>{handleUpdate(form)}}>Update Information</button>
                </div>
              </>
            )}
            {element === "userChat" && (
              <div className="chat">
                <h1>chat</h1>
              </div>
            )}
            {element === "userCheckout" && (
              <div className="checkoutt">
                {userReservations.map((r) => {
                  return (
                    <div className="oneChekout">
                      <div className="flight-data">
                        <div className="logo-sec">
                          <img
                            id="airline_logo"
                            src={r.Flight.brand.image}
                            alt=""
                          />
                          <div className="logo-sec-desc">
                            <p>{r.createdAt}</p>
                            <p>{r.Flight.brand.name}</p>
                          </div>
                        </div>
                        <div>
                          <p>
                            {r.Flight.departureTime}- {r.Flight.arrivalTime}
                          </p>
                        </div>
                        <div>
                          <p>${r.Flight.price}</p>
                          <p>round trip</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileUser;
