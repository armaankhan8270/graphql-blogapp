import React from "react";
import Navbar from "./Navbar";

const LayOut = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default LayOut;
