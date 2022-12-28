import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Pages/subPages/Header";
import "./css/Styles.css";

export default function Head() {
  return (
    <div className="main-container">
      <Header />
      <div className="main-wrapper">
        <Outlet />
      </div>
    </div>
  );
}
