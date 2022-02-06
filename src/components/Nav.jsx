import React from "react";
import style from "./Nav.module.css";

export default function Nav() {
  return (
    <div>
      <nav className={style.navigation}>
        <h2 className={style.logo}>
          <span>Md.</span>Rakib
        </h2>
        <ul className={style.unorderd}>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Works</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
