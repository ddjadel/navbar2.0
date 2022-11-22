import { useState } from "react";
import Header from "./components/Header";
import MainCard from "./components/MainCard";
import Menu from "./components/Menu";
import Messages from "./components/Messages";
import SideCard from "./components/SideCard";
import User from "./components/User";

function App() {
  const [isDark, setIsDark] = useState(false);
  const changeTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <div
      className={` ${
        isDark
          ? "bg-[url('../src/assets/darkmode.jpg')]"
          : "bg-[url('../src/assets/lightmode.jpg')]"
      }   bg-center  bg-cover`}
    >
      <div className="pt-10 flex   mx-auto w-min gap-20">
        <MainCard isDark={isDark} changeTheme={changeTheme} />
        <SideCard isDark={isDark} changeTheme={changeTheme} />
      </div>

      <div className="h-[29rem]"></div>
    </div>
  );
}

export default App;
