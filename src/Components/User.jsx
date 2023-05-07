import React from "react";
import { Link } from "react-router-dom";

export default function User() {

  return (
    <div className="header justify-center flex p-2 gap-2 text-black items-center  ">
      <Link to="/user/userdetails" className=" ">
        <h1 className="p-5 cursor-pointer border-2 border-red-950 ">
          User: Ali
        </h1>
      </Link>

      <Link to="/user/userdetails" className=" ">
        <h1 className="p-5 cursor-pointer border-2 border-red-950 ">
          User:AHMAD
        </h1>
      </Link>
    </div>
  );
}
