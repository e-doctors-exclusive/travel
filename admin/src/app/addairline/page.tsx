"use client"
import React, { useState } from "react";
import SideBar from "../../Components/SideBar";
import { CloudinaryContext, Image } from "cloudinary-react";
import axios from "axios";
import { useRouter } from "next/navigation";

const AddBrand = () => {
    const router=useRouter()
  const [clicked, setClicked] = useState(true);


  const [imageUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");

  const handleFileUpload = async (event:any) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ntdxso9x");
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/ddsp5aq1k/image/upload",
      formData
    );
console.log(response.data.secure_url);
    setImageUrl(response.data.secure_url);
  };

  const addBrands = (body:any) => {
    axios
      .post("http://localhost:1337/brands/add", body)
      .then((res) => {
        console.log("Successfully added brands");
        setClicked(false);
        router.push('/airlines');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ display: "flex" }}>
      <SideBar setClicked={setClicked} clicked={clicked} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flex: 1,
          marginLeft: "70px",
          width: "50%"
        }}
      >
        <CloudinaryContext cloudName="ddsp5aq1k" apiKey="337975874429965">
          <form className="formadd">
            <span className="titleadd">Add an Airline</span>
            <label htmlFor="file-input">
              <Image
                publicId={imageUrl || "default_avatar"}
                width="100"
                height="100"
                crop="fill"
                className="avatar"
              />
            </label>
            <input
              id="file-input"
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
            />
            <input
              type="text"
              className="input"
              placeholder="Airline Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="email"
              className="input"
              placeholder="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label
              htmlFor="textarea"
             
            >
              Airline Description
            </label>
            <textarea
            //   required=""
            //   cols="50"
            //   rows="10"
              id="textarea"
              name="textarea"
              onChange={(e) => {
                console.log(e.target.value,"descti");
                setDescription(e.target.value);
              }}
            ></textarea>
            <button className="btnadd"
              onClick={(e) => {
                e.preventDefault();
                addBrands({
                  name: name,
                  description: description,
                  email: email,
                  image: imageUrl,
                });
              }}
            >
              Add Airline
            </button>
          </form>
        </CloudinaryContext>
      </div>
    </div>
  );
};

export default AddBrand;