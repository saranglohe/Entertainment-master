import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "../../css/header.module.css";
import "../../css/Styles.css";

export default function Header() {
  const [cls, setCls] = useState(styles.topnav);
  function myFunction() {
    if (cls === styles.topnav) {
      setCls(styles.topnav + " " + styles.responsive);
    } else {
      setCls(styles.topnav);
    }
  }
  return (
    <>
      <div className={cls} id="myTopnav">
        
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/tv">TV Shows</NavLink>
        <NavLink to="/movie">Movie</NavLink>
        <NavLink to="/">Trending</NavLink>
        <NavLink className={styles.icon} onClick={myFunction}>
          <i className="fa fa-bars"></i>
        </NavLink>

        <h2>Entertainment Express</h2>
      </div>
    </>
  );
}
