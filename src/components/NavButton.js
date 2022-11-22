import React from "react";

const NavButton = ({ title, icon, isDark }) => {
  return (
    <div
      className={`flex items-center space-x-2  ${
        isDark
          ? "text-white  hover:text-gray-500"
          : "text-gray-500 hover:text-black"
      } duration-100 ease-out`}
    >
      {icon}
      <p className="font-semibold ">{title}</p>
    </div>
  );
};

export default NavButton;
