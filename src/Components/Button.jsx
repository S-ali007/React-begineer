import React from "react";

function Button({ title, data }) {
  return (
    <div className="btn flex justify-center  gap-2 ">
      <button  
        onClick={data}
        className="text-white bg-green-800 border-gray-300 border-2 p-2 rounded-md font-bold  "
      >
        {title}
      </button>
    </div>
  );
}

export default Button;
