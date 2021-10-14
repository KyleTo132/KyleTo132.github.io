import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import Background from "./Background";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video
        src="/videos/video-2.mp4"
        type="video/mp4"
        autoPlay
        loop
        muted
      ></video> */}

      <Background src="videos/video-2.gif" />

      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          TRENDING 
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
