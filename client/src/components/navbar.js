import React from "react";
import "../styles/navbar.css";

export default function navbar() {
  return (
    <div className="navbar">
      <img className="logo" src={require("../assets/logo.png")} />
      <div className="links">
        <a className="navigation" href="#">
          მთავარი
        </a>
        <a className="navigation" href="#">
          ჩვენ შესახებ
        </a>
        <ul class="nav-child">
          <li>
            <a href="#">სერვისები +</a>
            <ul>
              <li>
                <a href="#">დახმარება</a>
              </li>
              <li>
                <a href="#">კონტაქტი</a>
              </li>
              <li>
                <a href="#">სერვისები</a>
              </li>
              <li>
                <a href="#">პაკეტები</a>
              </li>
            </ul>
          </li>
        </ul>
        <a className="navigation" href="#">
          პაკეტები
        </a>
      </div>
      <img className="flag" src={require("../assets/flag.png")} />
      <h1 className="geo">GEO</h1>
    </div>
  );
}
