import React from "react";

// internal imports
import style from "./landing.module.css";
import Nav from "../../components/Nav";
import LandingMain from "../../components/LandingMain";

export default function Landing() {
  return (
    <div className={style.landingWrapper}>
      <div className="container">
        <Nav />
        <LandingMain />
      </div>
    </div>
  );
}
