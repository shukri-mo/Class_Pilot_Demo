import React from "react";
import { HiOutlineAcademicCap } from "react-icons/hi2";
function Logo() {
  return (
    <div className="flex items-center gap-3 pt-2 mb-2">
      <div className=" w-10 h-9 rounded-tr-lg rounded-br-lg rounded-bl-md rounded-tl-md bg-white  flex items-center justify-center shadow-md">
        <HiOutlineAcademicCap className="text-blue-700" size={20} />
      </div>

      <div>
        <h1 className="text-white text-2xl  font-bold">classPilot </h1>
        <span><h3>Teaching made Magical</h3></span>
      </div>
    </div>
  );
}

export default Logo;
