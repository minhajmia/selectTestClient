import React from "react";
import banner from "../../Utilities/Images/banner.png";
const Banner = () => {
  return (
    <div>
      <div className="home-container text-center  w-full">
        <img src={banner} alt="" className="inline-block min-h-full " />
      </div>
    </div>
  );
};

export default Banner;
