import React from "react";

const Profile = ({ img, name, isDark }) => {
  return (
    <div className="flex items-center -mt-3">
      <div className="flex w-8 h-8  ">
        <img src={img} alt=" " className="object-cover rounded-full " />
      </div>
      <p className={` pl-2  ${isDark && "text-white"} `}>{name}</p>
    </div>
  );
};

export default Profile;
