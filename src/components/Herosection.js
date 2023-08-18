import React from "react";
import Button from "./Button";
import "./Herosection.css";
import "../App.css";

function Herosection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted></video>

      <h1>ADVENTURE AWAITS</h1>
      <br />
      <p>
        <strong>What are you waiting for !</strong>
      </p>

      <div className="hero-btn">
        <Button
          buttonStyle={"btn--outline"}
          buttonSize={"btn--lg"}
          className="btn"
        >
          GET STARTED
        </Button>
        <Button
          buttonStyle={"btn--primary"}
          buttonSize={"btn--lg"}
          className="btn"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default Herosection;
