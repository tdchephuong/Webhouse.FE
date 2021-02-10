import React from "react";

import logo from "assets/img/logo.svg";
import imgIntroduction from "assets/img/img-introduction.png";
import category_11 from 'assets/img/category_11.png'
import category_20 from 'assets/img/category_20.png'
import category_19 from 'assets/img/category_19.png'
import category_2 from 'assets/img/category_2.png'
import category_10 from 'assets/img/category_10.png'
import category_6 from 'assets/img/category_6.png'
import category_3 from 'assets/img/category_3.png'
import category_4 from 'assets/img/category_4.png'
import category_7 from 'assets/img/category_7.png'
import category_16 from 'assets/img/category_16.png'
import category_9 from 'assets/img/category_9.png'
import category_13 from 'assets/img/category_13.png'
import "./Home.css";

export const Home: React.FC = () => {
  return (
    <div className="py-24 bg-default">
      <div className="container mx-auto">
        <div className="sm:flex">
          <div className="sm:w-1/2 sm:mt-0 mt-8">
            <span className="text-xl">Welcome to</span>{" "}
            <img
              className="w-24 h-4 inline-block align-baseline"
              src={logo}
              alt=""
            />
            <div className="w-10/12 text-5xl text-black txt-introduction font-medium mt-4">
              Freedom to Create the Websites You Want
            </div>
            <div className="text-lg mt-1 w-8/12">
              You'd Never Imagine That Powerful Websites Could Be Made That Easy
            </div>
          </div>
          <div className="sm:w-1/2 sm:mt-0 mt-8">
            <img src={imgIntroduction} alt="" />
          </div>
        </div>
        <div className="mt-36">
          <div className="text-5xl text-black font-medium">Stunning Templates</div>
          <div className="text-2xl mt-1">Start with free HTML website templates and bring your vision to life.</div>
          <div className="mt-12">
            <div className="sm:flex flex-wrap	">
              <div className="sm:w-1/4 sm:mt-0 mt-8">
                <img src={category_11} alt=""/>
                <p>Ethical Hacker</p>
              </div>
              <div className="sm:w-1/4 sm:mt-0 mt-8">
                <img src={category_20} alt=""/>
                <p>Project Manager</p>
              </div>
              <div className="sm:w-1/4 sm:mt-0 mt-8">
                <img src={category_19} alt=""/>
                <p>Scrum Master</p>
              </div>
              <div className="sm:w-1/4 sm:mt-0 mt-8">
                <img src={category_2} alt=""/>
                <p>Software Developer</p>
              </div>
              <div className="sm:w-1/4 sm:mt-0 mt-8">
                <img src={category_10} alt=""/>
                <p>Project Manager</p>
              </div>
              <div className="sm:w-1/4 sm:mt-0 mt-8">
                <img src={category_6} alt=""/>
                <p>Software Tester</p>
              </div>
              <div className="sm:w-1/4 sm:mt-0 mt-8">
                <img src={category_3} alt=""/>
                <p>Scrum Master</p>
              </div>
              <div className="sm:w-1/4 sm:mt-0 mt-8">
                <img src={category_4} alt=""/>
                <p>Project Manager</p>
              </div>
              <div className="sm:w-1/4 sm:mt-0 mt-8">
                <img src={category_7} alt=""/>
                <p>Software Tester</p>
              </div>
              <div className="sm:w-1/4 sm:mt-0 mt-8">
                <img src={category_16} alt=""/>
                <p>Software Development Manager</p>
              </div>
              <div className="sm:w-1/4 sm:mt-0 mt-8">
                <img src={category_9} alt=""/>
                <p>Team Leader</p>
              </div>
              <div className="sm:w-1/4 sm:mt-0 mt-8">
                <img src={category_13} alt=""/>
                <p>UI/UX Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
