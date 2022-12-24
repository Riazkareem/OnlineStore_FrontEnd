import React, { Children } from "react";
import Header from "../components/Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

function layout({ children }) {
  return (
    <div className="bg-[#f3f5f6] relative">
      <div className="sticky top-0 z-50">
        <Header />
        <Navbar />
      </div>
      {children}
      <Footer />
    </div>
  );
}

export default layout;
