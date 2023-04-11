import React from "react";
import "../styles/home.css";

export default function home() {
  return (
    <div className="home">
      <img src={require("../assets/homeImage.png")} />
      <h1 className="hometext" style={{ color: "black" }}>
        როგორ მოვაწესრიგოთ <h2>ბუღალტერია</h2>
      </h1>
      <h1 className="text">
        ჩვენთან თანამშრომლობით თქვენ იღებთ წვდომას თანამედროვე ტექნოლოგიებზე,
        მომსახურების საერთაშორისო სტანდარტებსა და ენერგიულ გუნდზე
      </h1>
      <button>დაგვეკონტაქტე</button>
      <a href="#" className="about-us">
        ჩვენ შესახებ
      </a>
      <h1 className="bottom-text">
        24/7<p>მომსახურება</p>
      </h1>
      <h1 className="bottom-text-2">
        760<p>აქტიური კლიენტი</p>
      </h1>
    </div>
  );
}
