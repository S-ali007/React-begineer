import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const navStyle=({isActive})=>{
    return{
   
          backgroundColor: isActive ? "white" : null,
          textDecoration: isActive ? "underline" : "none",
          padding: "13px",
          border: "20px",
          borderRadius:'20px',
          color:isActive? "black":"white"
      }
  }


  return (
    <div className=" header justify-between flex p-2  text-white bg-[#9c88ff]">
      <div></div>
      <NavLink to="/" className="">
        <h1 className="  flex text-center items-center text-2xl py-4 font-bold ">
          TO-DO APP
        </h1>
      </NavLink>
      <div className=" flex items-center gap-6 text-white font-bold  ">
        <NavLink
          to="/"
          className=" "
          style={navStyle}
        >
          <h1>Home</h1>
        </NavLink>

        <NavLink
          to="/contact"
          className=""
          style={navStyle}
        >
          Contact Us
        </NavLink>
        <br />
        <NavLink
          to="/about"
          className=""
          style={navStyle}
   
        >
          About Us
        </NavLink>
        <NavLink
          to="/user"
          className=""
          style={navStyle}
        >
          USERS
        </NavLink>
      </div>
      <div></div>
    </div>
  );
}

export default Header;
