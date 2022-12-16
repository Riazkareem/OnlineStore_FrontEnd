import React, { Children } from "react";
import Header from "../components/Header";
import Navbar from "./Navbar";
import Slider from "./Slider";
function layout({ children }) {
  return (
    <div>
      <Header />
      <Navbar />
      <Slider />
      {children}
    </div>
  );
}

export default layout;
