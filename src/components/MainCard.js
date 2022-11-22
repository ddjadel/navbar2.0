import { useState } from "react";
import Header from "../components/Header";

import Menu from "../components/Menu";
import Messages from "../components/Messages";
import User from "../components/User";

const MainCard = ({ isDark, changeTheme }) => {
  return (
    <div
      className={` w-[20rem] h-[53rem] ${
        isDark ? "bg-black/70" : "bg-white/70"
      }  rounded-[1rem]  backdrop-blur-lg
          px-9 `}
    >
      {/* Header */}
      <Header changeTheme={changeTheme} isDark={isDark} />
      {/* Menu */}
      <Menu isDark={isDark} />
      {/* Messages */}
      <Messages isDark={isDark} />
      {/* Profile */}
      <User isDark={isDark} />
    </div>
  );
};

export default MainCard;
