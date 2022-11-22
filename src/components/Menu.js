import { MdBusinessCenter } from "react-icons/md";
import { FaClipboardList, FaGraduationCap } from "react-icons/fa";
import { ImPriceTag } from "react-icons/im";
import { BsShieldLockFill } from "react-icons/bs";
import { FiTarget } from "react-icons/fi";
import NavButton from "./NavButton";

const Menu = ({ isDark }) => {
  const buttons = [
    { title: "My offers", icon: <MdBusinessCenter /> },
    { title: "User's Task", icon: <FaClipboardList /> },
    { title: "Product Discounts", icon: <ImPriceTag /> },
    { title: "Case Study", icon: <FaGraduationCap /> },
    { title: "Security", icon: <BsShieldLockFill /> },
    { title: "Your Ability", icon: <FiTarget /> },
  ];
  return (
    <div className="pt-2">
      {/* Title */}
      <p
        className={`text-[12px] font-semibold ${
          isDark ? "text-white " : "text-gray-500 "
        } text-gray-500 `}
      >
        MENU
      </p>
      {/* NavButtons */}
      <div className="flex flex-col gap-6 pt-3">
        {buttons.map((button) => (
          <NavButton
            title={button.title}
            icon={button.icon}
            key={button.title}
            isDark={isDark}
          />
        ))}
      </div>
      <div className="border-b border-gray-400/[40%] pb-4"></div>
    </div>
  );
};

export default Menu;
