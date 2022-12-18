import React, { Children } from "react";
import Header from "../components/Header";
import FeaturedProduct from "./FeaturedProduct";
import Navbar from "./Navbar";
import Slider from "./Slider";
function layout({ children }) {
  return (
    <div>
      <Header />
      <Navbar />
      <Slider />
      <FeaturedProduct />
      {children}
    </div>
  );
}

export default layout;
