import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import AboutUs from "./components/aboutus";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutUs />
    </div>
  );
}

export default App;
