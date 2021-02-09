import React from "react";

import logo from "assets/img/logo.svg";
import imgIntroduction from "assets/img/img-introduction.png";
import "./Home.css";

export const Home: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div className="sm:flex">
        <div className="sm:w-1/2 sm:mt-0 mt-8 h-auto">
          <span className="text-xl">Wellcome to</span>{" "}
          <img
            className="w-24 h-4 inline-block align-baseline"
            src={logo}
            alt=""
          />
          <div className="w-11/12 text-5xl text-black txt-introduction">
            Freedom to Create the Websites You Want
          </div>
          <div className="text-lg mt-1">
            You'd Never Imagine That Powerful Websites Could Be Made That Easy
          </div>
        </div>
        <div className="sm:w-1/2 sm:mt-0 mt-8 h-auto">
          <img src={imgIntroduction} alt="" />
        </div>
      </div>
    </div>
  );
};
