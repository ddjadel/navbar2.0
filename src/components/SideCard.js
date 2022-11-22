import React from "react";
import { MdBusinessCenter } from "react-icons/md";
import { FaClipboardList, FaGraduationCap } from "react-icons/fa";
import { ImPriceTag } from "react-icons/im";
import { BsShieldLockFill } from "react-icons/bs";
import { FiTarget } from "react-icons/fi";
import profile from "../assets/guy.jpg";
import profile1 from "../assets/pic2.jpg";
import profile3 from "../assets/pic3.jpg";
import profile4 from "../assets/pic1.jpg";

import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdArrowDropdown,
} from "react-icons/io";

const SideCard = ({ isDark, setIsDark }) => {
  const profiles = [profile, profile1, profile3, profile4];
  const buttons = [
    <MdBusinessCenter />,
    <FaClipboardList />,
    <ImPriceTag />,
    <FaGraduationCap />,
    <BsShieldLockFill />,
    <FiTarget />,
  ];

  const textColor = isDark
    ? "text-white  hover:text-gray-500"
    : "text-gray-500 hover:text-black";

  return (
    <div
      className={`w-[5rem] h-[53rem] ${
        isDark ? "bg-black/70" : "bg-white/70"
      }  rounded-[1rem]  backdrop-blur-lg
      `}
    >
      {/* Header */}
      <div className="flex  w-full justify-center pt-6 space-x-1">
        <div className="w-[15px] h-[15px] bg-red-500  rounded-full"></div>
        <div className="w-[15px] h-[15px] bg-yellow-500  rounded-full"></div>
        <div className="w-[15px] h-[15px] bg-green-500  rounded-full"></div>
      </div>

      {/* Profile */}
      <div className="flex justify-center items-center pt-5">
        {isDark ? (
          <div className="p-2 bg-white rounded-full w-10 h-10 items-center flex justify-center  ">
            <div className="bg-black  w-7 h-7 rounded-full shrink-0 "></div>
          </div>
        ) : (
          <div className="p-2 bg-black rounded-full w-10 h-10 items-center flex justify-center  ">
            <div className="bg-white  w-7 h-7 rounded-full shrink-0 "></div>
          </div>
        )}
      </div>
      <div className="border-b border-gray-400/[25%] pb-4 mx-3 pt-[0.15rem]"></div>

      {/* Menu */}
      <div className="flex items-center flex-col">
        <p
          className={`text-[12px] font-semibold ${
            isDark ? "text-white " : "text-gray-500 "
          } text-gray-500 pt-3`}
        >
          MENU
        </p>
        <div className="pt-3 space-y-6">
          {buttons.map((button) => (
            <div
              className={` ${textColor} flex items-center space-x-2 duration-100 ease-out text-[22px]   `}
            >
              {button}
            </div>
          ))}
        </div>
      </div>
      <div className="border-b border-gray-400/[25%] pb-4 mx-3 pt-[0.15rem]"></div>
      <div className=" ">
        <p
          className={` text-[12px] font-semibold  ${
            isDark ? "text-white" : "text-gray-500"
          } pt-4 w-full text-center
           `}
        >
          MESSAGES
        </p>
      </div>
      {/* Profiles */}
      <div className="px-3">
        <div
          className={` ${
            isDark ? "bg-blue-800/70" : "bg-white"
          } w-full h-[15rem]  mt-2 rounded-[1rem] space-y-[1.2rem] flex  flex-col justify-center items-center    `}
        >
          {profiles.map((profile) => (
            <div className=" ">
              <img src={profile} alt="" className="w-10 h-10  rounded-full" />
            </div>
          ))}
        </div>
      </div>
      <div className=" p-2  flex justify-center w-full -mt-4">
        <button
          className={`${
            isDark ? " bg-[#0c33de]" : "  bg-[#0560fd]"
          }  py-2 px-2 rounded-full text-white flex items-center `}
        >
          <IoMdArrowDropdown className="text-[19px]" />
        </button>
      </div>
      <div className="flex items-center justify-center pt-4">
        <div className="  w-12 h-12 p-[2px] bg-white rounded-full">
          <img src={profile} alt="" className="object-cover rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default SideCard;
