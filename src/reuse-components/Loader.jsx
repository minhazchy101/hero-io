import React from "react";
import logo from "../assets/logo.png";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <img
        src={logo}
        alt="Loading..."
        className="w-20 h-20 rounded-full animate-ping object-cover p-1 border-primary/70 border"
      /> 
    </div>
  );
};

export default Loader;