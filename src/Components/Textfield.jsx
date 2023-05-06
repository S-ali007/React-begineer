import React from "react";

function Textfield({ label, value, onChange, onClick }) {
  return (
    <div className="flex justify-center gap-3 ">
      <input
        className="p-3 outline-none border-gray-200 border-[2px] rounded-lg "
        type="text"
        placeholder={label}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Textfield;
