import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Test.css";

const Test = ({ test, handleSelect, select }) => {
  const { name, Rs, parametersName, parametersNumber, required, time, type } =
    test;

  return (
    <div className={`card cart-design capitalize`}>
      <div className="card-body text-left">
        <div className="flex justify-between items-center">
          <h2 className="card-title ">{name}</h2>
          <input type="checkbox" className="checkbox" onClick={handleSelect} />
        </div>
        <h3 className="panel-type">Panel type : {type}</h3>
        <h3 className="report">Report within : {time}</h3>
        {required ? <h3 className="required rounded-md">{required}</h3> : ""}

        <h3 className="parameter-number">
          Name & no. of parameters : {parametersNumber}
        </h3>
        <ul>
          {parametersName?.map((parameter) => (
            <li className="parameter-name " key={parameter._id}>
              <span>* </span>
              {parameter}
            </li>
          ))}
        </ul>
        <div className="flex justify-between items-center">
          <span className="view-all">
            <Link to="/">View All Parameters</Link>
          </span>
          <h3 className="font-semibold rs-price ">
            Rs. <span className=" font-bold rs-price-rate ">{Rs}</span>
          </h3>
        </div>
        <div className="card-actions justify-center mt-6">
          <button className="btn-design font-semibold">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Test;
