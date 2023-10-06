import React, { useContext } from "react";
import { categories } from "../utils/constants";
import { Context } from "../context/contextApi";

const Sidebar = () => {
  const {mobileMenu} = useContext(Context)
  return (
    <div className={`md:block overflow-y-auto h-full py-4 bg-gray-100 absolute md:relative z-10 translate-x-0 transition-all ${mobileMenu ? 'w-[60px]' : 'md:w-[190px]'}`}>
      <div className="flex md:px-3 px-1 flex-col">
        {categories.map((item) => {
          return (
            <React.Fragment key={item.name}>
              <LeftNavMenuItem
                text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                // action={() => {
                //     clickHandler(item.name, item.type);
                //     navigate("/");
                // }}
                // className={`${
                //     selectedCategory === item.name
                //         ? "bg-white/[0.15]"
                //         : ""
                // }`}
              />
              {item.divider && <hr className="my-5 border-red-800/[0.2]" />}
            </React.Fragment>
          );
        })}

        <hr className="my-5 border-black/[0.2]" />
        <div className="text-black/[0.5] text-[12px]">Clone by: Amit Mali</div>
      </div>
    </div>
  );
};

export default Sidebar;

export const LeftNavMenuItem = ({ text, icon, mobileMenu ,action }) => {
  return (
    <div
      className={
        `text-black font-semibold text-sm cursor-pointer h-10 flex rounded-lg hover:bg-red-600/[0.15]
          ${mobileMenu ? 'items-center px-4 mb-[1px]' : 'items-center px-2 mb-[1px]'}`
      }
      onClick={action}
    >
      <span className="text-xl mr-5">{icon}</span>
      {text}
    </div>
  );
};
