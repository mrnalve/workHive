import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="flex justify-between items-center flex-wrap bg-custom-color px-4">
      <div className="text-3xl text-black font-extrabold">WorkHive</div>
      <div>
        <NavLink
          className={`${(isActive) =>isActive ? "active"
              : ""}text-[16px] md:px-4 px-2 py-4 inline-block md:my-0 text-gray-400 leading-4 font-medium `}
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={`${(isActive) =>isActive ? "active"
              : ""}text-[16px] md:px-4 px-2 py-4 inline-block md:my-0 text-gray-400 leading-4 font-medium `}
          to={"/statistics"}
        >
          Statistics
        </NavLink>
        <NavLink
          className={`${(isActive) =>isActive ? "active"
              : ""}text-[16px] md:px-4 px-2 py-4 inline-block md:my-0 text-gray-400 leading-4 font-medium `}
          to={"/applied-jobs"}
        >
          Applied Jobs
        </NavLink>
        <NavLink
          className={`${(isActive) =>isActive ? "active"
              : ""}text-[16px] md:px-4 px-2 py-4 inline-block md:my-0 text-gray-400 leading-4 font-medium `}
          to={"/blog"}
        >
          Blog
        </NavLink>
      </div>
      <div>
        <button className="applied-button">Star Applying</button>
      </div>
    </nav>
  );
};

export default Header;
