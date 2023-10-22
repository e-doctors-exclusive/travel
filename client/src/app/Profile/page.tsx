"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../../Components/Navbar";
import Avatar from "../../../public/Assets/avatar.jpeg";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import axios from "axios";
import { setLogState } from "@/store/tokenSlicer";
import ChatRoom from "../../Components/ChatRoom"
const ProfileUser = () => {
  const user = useSelector((state: any) => state.token);
  const [checkoutData,setCHekouData]=useState([])
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
  const [userReservations, setReservation] = useState<Array<Object>>([]);
  const [element, setElement] = useState("userProfile");
  const dispatch = useDispatch()
  const router = useRouter()
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return
    }
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "vhhtdlm3");

    try {
      const response = await axios.post(
        "https://cors-anywhere.herokuapp.com/https://api.cloudinary.com/dh8ogvcuy/image/upload",
        formData
      );
      setForm({ ...form, image: response.data.secure_url });
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdate = async (obj: Object) => {
    try {
      console.log(user);

      const response = await axios.put(
        `http://localhost:1337/users/update/${user.token.id}`,
        obj
      );
      toast.success("Update Successfully");
      console.log("");

    } catch (error) {
      console.error(error);
    }
  };





const fetchAllCheckout = async ()=>{
  const id = localStorage.getItem("id")

  try {
    const response = await axios.get(`http://localhost:1337/payment/getAllPaymentById/${id}`)
    console.log(response.data);
    setCHekouData(response.data)
  } catch (error) {
    console.log(error);
    
  }
}


  const takeReservation = async (id: number) => {
    try {
      const response = await axios.get(
        `http://localhost:1337/reservation/getFor/${id}`
      );
      setReservation(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    takeReservation(user.id);
  fetchAllCheckout()

  }, []);
  console.log("imhere",checkoutData);
  
  return (
    <>
      <Navbar />

      <div className="userProfile_main_container">
        <div className="userProfile_container">
          <div className="profile_side_nav">
            <div
              className={`side_nav_card ${element === "userProfile" ? "active" : ""
                }`}
              onClick={() => setElement("userProfile")}
            >
              <p className="account_seeting_title">Account Setting</p>
              <p className="account_seeting_desc">
                Details about your Personal information
              </p>
            </div>
            <div
              className={`side_nav_card ${element === "userCheckout" ? "active" : ""
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
              className={`side_nav_card ${element === "userChat" ? "active" : ""
                }`}
              onClick={() => setElement("userChat")}
            >
              <p className="account_seeting_title">Contact admin</p>
              <p className="account_seeting_desc">
                Details about your Personal information
              </p>
            </div>
            <button id="logout" onClick={() => {
              localStorage.removeItem("token")
              dispatch(setLogState(false))
              router.push("/")
              toast.info("Goodbye!");
            }}>Logout</button>
          </div>
          <div className="profile_container">
            {element === "userProfile" && (
              <>
                <div className="profile_img">
                  <div className="avatar_container">
                    <Image src={Avatar} alt="" id="avatar" />
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
                  <button onClick={() => { handleUpdate(form) }}>Update Information</button>
                </div>
              </>
            )}
            {element === "userChat" && (
              <div className="chat">
                <ChatRoom />
              </div>
            )}
            {element === "userCheckout" && (
              <div className="checkoutt">

                  {checkoutData.map((r:any)=>{
                    console.log(r);
                    return  <div className="one-checkout-user">
                    <p style={{color:"white"}} > <span className="pragraphs-checkout" >Price :</span> {r.price} $</p>
                    <p style={{color:"white"}} > <span className="pragraphs-checkout">Created At :</span> {r.createdAt}</p>
                    </div>
                  })}
                {/* {userReservations.map((r) => {
                  return (
                    <div className="oneChekout"> */}
                      {/* <div className="flight-data">
                        <div className="logo-sec">
                          <Image
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
                      </div> */}
                    {/* </div>
                  );
                })} */}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileUser;
