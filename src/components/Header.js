import React from "react";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import logo from "../assets/logo2.png";
const Header = ({ changeTheme, isDark }) => {
  return (
    <div className="pt-6    ">
      {/* Buttons */}
      <div className="flex items-center justify-between ">
        <div className="flex gap-[2px]">
          <div className="w-[15px] h-[15px] bg-red-500  rounded-full"></div>
          <div className="w-[15px] h-[15px] bg-yellow-500  rounded-full"></div>
          <div className="w-[15px] h-[15px] bg-green-500  rounded-full"></div>
        </div>
        <IoMdArrowDropleftCircle
          className="text-[28px] p-[2px] bg-white rounded-full"
          onClick={() => changeTheme()}
        />
      </div>

      {/* Profile */}
      <div className="flex  items-center pt-2">
        {isDark ? (
          <div className="p-2 bg-white rounded-full w-10 h-10 items-center flex justify-center  ">
            <div className="bg-black  w-7 h-7 rounded-full shrink-0 "></div>
          </div>
        ) : (
          <div className="p-2 bg-black rounded-full w-10 h-10 items-center flex justify-center  ">
            <div className="bg-white  w-7 h-7 rounded-full shrink-0 "></div>
          </div>
        )}

        <div className="pl-2">
          <p
            className={`font-bold text  ${
              isDark ? "text-white " : "text-gray-500 "
            }`}
          >
            Joe Doe
          </p>
        </div>
      </div>

      <div className="border-b border-gray-400/[25%] pb-4"></div>
    </div>
  );
};

export default Header;
