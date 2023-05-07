import React from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
  const params = useParams;
  const name = params;
  return (
    <div>
      <h1> Data : {name}</h1>
    </div>
  );
}

export default UserDetails;
