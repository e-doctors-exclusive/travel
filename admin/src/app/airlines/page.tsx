"use client"
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import SideBar from "../../Components/SideBar";
import axios from "axios";

function Airlines() {
  const [clicked, setClicked] = useState(true);
  const [brand, setBrand] = useState([]);

  const fetch = () => {
    axios.get("http://localhost:1128/brands/getAll").then((res) => {
      console.log(res);
      setBrand(res.data);
    });
  };

  useEffect(() => {
    fetch();
    console.log("this is brand", brand);
  }, []);


 const handleDelete = (id:any)=>{
  axios.delete(`http://localhost:1128/brands/${id}`)
  .then((res) => {
      console.log("brand deleted successfully");
      fetch();
    })
    .catch((err) => {
      console.log(err);
 } )
}

  return (
    <div style={{ display: "flex" }}>
      <SideBar setClicked={setClicked} clicked={clicked} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flex: 1,
          marginLeft:"250px" ,
        }}
      >
        {brand.map((brand:any) => (
          <Card key={brand.id} sx={{ maxWidth: 345, margin: "16px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={brand.image}
                alt={brand.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {brand.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {brand.describtion}
                </Typography>
              </CardContent>
            </CardActionArea>

            <div>
              <button className="btndelete" onClick={(()=>{handleDelete(brand.id)})}>
                <svg
                  viewBox="0 0 15 17.5"
                  height="17.5"
                  width="15"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                >
                  <path
                    transform="translate(-2.5 -1.25)"
                    d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z"
                    id="Fill"
                  ></path>
                </svg>
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Airlines;