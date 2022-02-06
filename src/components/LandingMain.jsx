import React from "react";
import style from "./LandingMain.module.css";
import { ArrowRightShort } from "react-bootstrap-icons";

export default function LandingMain() {
  return (
    <div className={style.landingMain}>
      <img
        src="https://m.media-amazon.com/images/I/71B4F425o2L.jpg"
        alt="Avatar img"
        className={style.avatarLogo}
      />
      <h2 className={style.landingTitle}>I'm Rakib!</h2>
      <h1 className={style.landingTitle2}>WEB DEVELOPER</h1>
      <p className={style.subTitle}>Expert on Front-End</p>
      <button className={style.myworksbtn}>
        My Works <ArrowRightShort />
      </button>
    </div>
  );
}
