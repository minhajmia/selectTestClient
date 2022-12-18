import React from "react";
import logo from "../../Utilities/Images/logo.png";
import "./Footer.css";
import linkedin from "../../Utilities/Images/linkedin.png";
import facebook from "../../Utilities/Images/facebook.png";
import google from "../../Utilities/Images/google.png";
import twitter from "../../Utilities/Images/twitter.png";

const Footer = () => {
  return (
    <footer className="footer p-9 mt-24 border-t-2">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="flex justify-between items-center gap-5">
        <img src={twitter} alt="" />
        <img src={linkedin} alt="" />
        <img src={facebook} alt="" />
        <img src={google} alt="" />
      </div>
      <div>
        <p>©2022 lyfestring.com</p>
      </div>
    </footer>
  );
};

export default Footer;
