import React from "react";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdArrowDropdown,
} from "react-icons/io";
import profile from "../assets/guy.jpg";
import profile1 from "../assets/pic2.jpg";
import profile3 from "../assets/pic3.jpg";
import profile4 from "../assets/pic1.jpg";
import Profile from "./Profile";

const Messages = ({ isDark }) => {
  const profiles = [
    { img: profile, name: "Max Andrew" },
    { img: profile1, name: "Joe Doe" },
    { img: profile3, name: "Tom Jerry" },
    { img: profile4, name: "M. Bisping" },
  ];
  return (
    <div className="">
      <div className="flex items-center pt-2 justify-between">
        <p
          className={` text-[12px] font-semibold  ${
            isDark ? "text-white" : "text-gray-500"
          }  `}
        >
          MESSAGES
        </p>
        <div className="flex items-center space-x-2 ">
          <IoIosArrowBack
            className={` ${isDark ? "text-white" : "text-gray-500"} `}
          />
          <IoIosArrowForward
            className={` ${isDark ? "text-white" : "text-gray-500"} `}
          />
        </div>
      </div>
      <div
        className={` ${
          isDark ? "bg-blue-800/70" : "bg-white"
        } w-full h-[15rem]  mt-2 rounded-[1rem] space-y-[1.2rem] flex  flex-col justify-center  pl-4 `}
      >
        {profiles.map((profile, index) => (
          <Profile
            img={profile.img}
            name={profile.name}
            key={index}
            isDark={isDark}
          />
        ))}
      </div>
      <div className=" p-2  flex justify-center w-full -mt-8">
        <button
          className={`${
            isDark ? " bg-[#0c33de]" : "  bg-[#0560fd]"
          }  py-4 px-4 rounded-full text-white flex items-center `}
        >
          <IoMdArrowDropdown className="text-[19px]" />
          <span className="text-[14px] pl-2">All messages</span>
        </button>
      </div>
    </div>
  );
};

export default Messages;
