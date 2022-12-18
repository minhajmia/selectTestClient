import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../Utilities/Images/hamberIcon.png";
import logo from "../../Utilities/Images/logo.png";
import { XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <div className="navbar bg-base-100 md:border-b-2">
      <div className="navbar-start">
        <div className="md:hidden  ">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="tests">Tests</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Header;
