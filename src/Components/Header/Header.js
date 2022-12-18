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
      <div className="navbar-center hidden lg:flex"></div>
      <div className="navbar-end md:hidden ">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Header;
