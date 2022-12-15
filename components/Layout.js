import React, { Children } from "react";
import Header from "../components/Header";
import Navbar from "./Navbar";
function layout({ children }) {
  return (
    <div>
      <Header />
      <Navbar />
      {children}
    </div>
  );
}

export default layout;
