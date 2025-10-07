import React from "react";
import Button from "../UI/Button/Button";
import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Header = () => {
  const links = (
    <>
      <li className="text-[16px] font-semibold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent underline decoration-[#632EE3] underline-offset-4"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="text-[16px] font-semibold">
        <NavLink
          to="/apps"
          className={({ isActive }) =>
            isActive
              ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent underline decoration-[#632EE3] underline-offset-4"
              : ""
          }
        >
          Apps
        </NavLink>
      </li>
      <li className="text-[16px] font-semibold">
        <NavLink
          to="/installation"
          className={({ isActive }) =>
            isActive
              ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent underline decoration-[#632EE3] underline-offset-4"
              : ""
          }
        >
          Installation
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar sticky top-0 left-0 right-0 z-50 shadow-md mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link className="btn btn-ghost  ">
          <img className="w-[40px] hidden md:flex" src={logo} alt="logo" />{" "}
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold text-[16px]">
            HERO.IO
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link
          to={"https://github.com/Raihan1018"}
          target="blank"
          className="btn"
        >
          <Button icon={FaGithub} text={"Contribute"} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
