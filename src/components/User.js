import profile from "../assets/guy.jpg";
const User = ({ isDark }) => {
  return (
    <div className="flex pt-5">
      <div className="flex w-12 h-12 p-[2px] bg-white rounded-full">
        <img src={profile} alt="" className="object-cover rounded-full" />
      </div>
      <div className=" pl-2">
        <p
          className={` ${isDark ? "text-white " : "text-gray-500 "} font-bold `}
        >
          William Gray
        </p>
        <p className={` ${isDark ? "text-white/60 " : "text-gray-600/80 "}  `}>
          Product Designer
        </p>
      </div>
    </div>
  );
};

export default User;
