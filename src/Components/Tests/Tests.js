import React, { useEffect, useState } from "react";
import "./Tests.css";

import {
  ArrowLongLeftIcon,
  MapPinIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import Test from "../Test/Test";

const Tests = () => {
  const [tests, setTests] = useState([]);
  const [select, setSelect] = useState(0);
  useEffect(() => {
    fetch(`http://localhost:5000/allTestInfo`)
      .then((res) => res.json())
      .then((data) => setTests(data));
  }, []);

  // select test
  const handleSelect = (event) => {
    if (event.target.checked) {
      setSelect(select + 1);
    } else {
      setSelect(select - 1);
    }
  };

  return (
    <div
      className={`text-center tests-container pt-0 md:pt-5 mt-10 md:mt-0 rounded-lg  ${
        select ? "border-x-lime-300" : "undefined"
      } md:border-0`}
    >
      <h3 className="pt-10 tests-heading font-bold text-left ml-8 md:text-center md:ml-0">
        {" "}
        <ArrowLongLeftIcon className="h-6 w-6 mr-3 text-black inline-block md:hidden " />
        Select Tests
      </h3>
      <h4 className="tests-subheading">
        <span className="tests-subheading-design">
          <MapPinIcon className="h-6 w-6  inline-block md:hidden " />
          Delhi{" "}
        </span>{" "}
        | Lab timing: 8 AM to 12 AM
      </h4>
      <div className="flex w-full  relative justify-center md:hidden ">
        <input
          type="text"
          name="price"
          id="price"
          placeholder="search tests"
          className="flex  text-left border  dark:border-gray-700 py-4 px-3 rounded-md  focus:outline-sky-500 "
        />
        <span className=" absolute top-[32%] right-[60px] md:mr-10 md:-mt-2">
          <MagnifyingGlassIcon className="h-6 w-6 text-black " />
        </span>
      </div>
      <h2 className="sub-heading">Frequently booked tests</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 bg-white rounded-md">
        {tests?.map((test) => (
          <Test test={test} key={test._id} handleSelect={handleSelect} />
        ))}
      </div>
      <h3 className="total-select">Add Tests( {select} selected)</h3>
    </div>
  );
};

export default Tests;
