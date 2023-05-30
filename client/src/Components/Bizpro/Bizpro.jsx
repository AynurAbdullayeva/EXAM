import React, { useEffect, useState } from "react";
import "./Bizpro.css";
import EditNoteIcon from "@mui/icons-material/EditNote";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
// import{useState, useEffect} from 'react'
const Bizpro = () => {
//   const [brizpro,setBrizpro]=useState;
//   useEffect(()=>{
// .fetch('http://localhost:3000/api')
// .then(res=>res.json)
// .brizpro(data=>setBrizpro(data))
//   })
  return (
    <>
      <div className="bzp-txt">
        <h1>ABOUT OUR BIZPRO</h1> 
        <hr style={{ width: "3%", height:'3px' ,backgroundColor: "red", border:"none" }} /><br />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's <br /> standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type.
        </p><br />
        
      </div>
      <div className="bizpro">
        <div className="container1">
          <div className="cards">
            <div className="card">
              <div className="hd-icon">
                <EditNoteIcon />
              </div>{" "}
              <br />
              <div className="bzp-info">
                <h3 className="txt">WEB DEVELOPMENT</h3> <br />
                <p>
                  Lorem ipsum dolor sit amet, consect et adipiscing <br /> elit,
                  sed do eiusmod tempor incididunt ut labore et <br /> dolore
                  magna.
                </p>{" "}
                <br />
                <button className="m-btn"> More Details</button>
              </div>
            </div>

            <div className="card">
              <div className="hd-icon">
                <CameraAltIcon />
              </div>{" "}
              <br />
              <div className="bzp-info">
                <h3 className="txt">PHOTOGRAPHY</h3> <br />
                <p>
                  Lorem ipsum dolor sit amet, consect et adipiscing <br /> elit,
                  sed do eiusmod tempor incididunt ut labore et <br /> dolore
                  magna.
                </p>{" "}
                <br />
                <button className="m-btn"> More Details</button>
              </div>
            </div>

            <div className="card">
              <div className="hd-icon">
                <SportsBasketballIcon />
              </div>{" "}
              <br />
              <div className="bzp-info">
                <h3 className="txt">DIGITAL MEDIA</h3> <br />
                <p>
                  Lorem ipsum dolor sit amet, consect et adipiscing <br /> elit,
                  sed do eiusmod tempor incididunt ut labore et <br /> dolore
                  magna.
                </p>{" "}
                <br />
                <button className="m-btn"> More Details</button>
              </div>
            </div>

            <div className="card">
              <div className="hd-icon">
                <TrendingUpIcon />
              </div>{" "}
              <br />
              <div className="bzp-info">
                <h3 className="txt">ONLINE MARKETING</h3> <br />
                <p>
                  Lorem ipsum dolor sit amet, consect et adipiscing <br /> elit,
                  sed do eiusmod tempor incididunt ut labore et <br /> dolore
                  magna.
                </p>{" "}
                <br />
                <button className="m-btn"> More Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bizpro;
