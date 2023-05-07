import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className=" header justify-between flex p-2  text-white bg-[#9c88ff]">
      <div></div>
      <NavLink to="/" className="" 
     
  >
        <h1 className="  flex text-center items-center text-2xl py-4 font-bold ">
          TO-DO APP
        </h1>
      </NavLink>
      <div className=" flex items-center gap-6 text-white font-bold  ">
        <NavLink to="/" className=" ">
          <h1>Home</h1>
        </NavLink>

        <NavLink to="/contact" className="">
          Contact Us
        </NavLink>
        <br />
        <NavLink to="/about" className="">
          About Us
        </NavLink>
        <NavLink to="/user" className="">
          USERS
        </NavLink>
      </div>
      <div></div>
    </div>
  );
}

export default Header;
