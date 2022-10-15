import React from "react";
import Navbars from "./Navbar";
// import Navbars from "./Navbar";

const LayOut = ({ children }) => {
  return (
    <div>
      <Navbars />
      {children}
    </div>
  );
};

export default LayOut;
