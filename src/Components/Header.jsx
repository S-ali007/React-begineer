import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header justify-between flex p-2  text-white bg-[#9c88ff]">
      <div>
        
      </div>
      <Link to="/">
      <h1 className=" flex text-center items-center text-2xl py-4 font-bold ">
        TO-DO APP
      </h1>
      </Link>
     <div className=" flex items-center gap-6 text-white font-bold  ">
     <Link to="/" className=" ">
        <h1>Home</h1>
      </Link>

      <Link to="/contact" className="">
        Contact Us
      </Link>
      <br />
      <Link to="/about" className="">
        About Us
      </Link>
     </div>
     <div></div>
    </div>
  );
}

export default Header;
