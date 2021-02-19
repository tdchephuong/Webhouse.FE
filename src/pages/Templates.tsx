import classNames from "classnames";
import React, { useState } from "react";

import { TemplateItem } from "components/TemplateItem";

import iconSearch from "assets/img/icon-search.svg";
import iconRightArrow from "assets/img/icon-right-arrow.svg";
import iconDoubleArrowRight from "assets/img/icon-double-arrow-right.svg";
import iconRightArrowActive from "assets/img/icon-right-arrow-active.svg";
import iconDoubleArrowRightActive from "assets/img/icon-double-arrow-right-active.svg";
import template_11 from "assets/img/template/template_11.jpg";
import template_14 from "assets/img/template/template_14.jpg";
import template_6 from "assets/img/template/template_6.jpg";
import template_13 from "assets/img/template/template_13.jpg";
import template_10 from "assets/img/template/template_10.jpg";
import template_2 from "assets/img/template/template_2.jpg";
import template_3 from "assets/img/template/template_3.jpg";
import template_4 from "assets/img/template/template_4.jpg";
import template_5 from "assets/img/template/template_5.jpg";
import template_12 from "assets/img/template/template_12.jpg";
import template_8 from "assets/img/template/template_8.jpg";
import template_20 from "assets/img/template/template_20.jpg";
import template_15 from "assets/img/template/template_15.jpg";
import template_17 from "assets/img/template/template_17.jpg";
import template_18 from "assets/img/template/template_18.jpg";
import template_21 from "assets/img/template/template_21.jpg";

import "./Templates.css";

export const Templates: React.FC = () => {
  const [activeTemplateType, setActiveTemplateType] = useState(0);
  const firstTemplateTypeClassName = (value: number) =>
    classNames("flex-initial cursor-pointer mr-3 py-3", {
      "text-blue-500 border-b-2 border-blue-500": activeTemplateType === value
    });
  const middleTemplateTypeClassName = (value: number) =>
    classNames("flex-initial cursor-pointer mx-3 py-3", {
      "text-blue-500 border-b-2 border-blue-500": activeTemplateType === value
    });
  const updateTemplateType = (value: number) => {
    setActiveTemplateType(value);
  };

  return (
    <>
      <div className="bg-white pt-16 pb-9">
        <div className="container mx-auto px-1.5 lg:px-0">
          <div className="text-4xl text-black template-title">
            Pick the Website Template You Love
          </div>
        </div>
      </div>
      <div className="bg-white sticky top-0">
        <div className="container mx-auto">
          <div className="sm:flex items-center">
            <div className="sm:w-3/4 md:pb-0 pb-8 flex">
              <div
                className={firstTemplateTypeClassName(0)}
                onClick={() => updateTemplateType(0)}
              >
                All
              </div>
              <div
                className={middleTemplateTypeClassName(1)}
                onClick={() => updateTemplateType(1)}
              >
                Business
              </div>
              <div
                className={middleTemplateTypeClassName(2)}
                onClick={() => updateTemplateType(2)}
              >
                Services
              </div>
              <div
                className={middleTemplateTypeClassName(3)}
                onClick={() => updateTemplateType(3)}
              >
                Health
              </div>
              <div
                className={middleTemplateTypeClassName(4)}
                onClick={() => updateTemplateType(4)}
              >
                Beauty
              </div>
              <div
                className={middleTemplateTypeClassName(5)}
                onClick={() => updateTemplateType(5)}
              >
                Fashion
              </div>
              <div
                className={middleTemplateTypeClassName(6)}
                onClick={() => updateTemplateType(6)}
              >
                Landing Pages
              </div>
              <div
                className={middleTemplateTypeClassName(7)}
                onClick={() => updateTemplateType(7)}
              >
                Landing Pages
              </div>
              <div className="flex-initial cursor-pointer ml-3 py-3">...</div>
            </div>
            <div className="sm:w-1/4">
              <div className="relative">
                <img
                  className="inline-block align-middle w-6 h-6 absolute top-1/2 -mt-3 left-1 pointer-events-none"
                  src={iconSearch}
                  alt=""
                />{" "}
                <input
                  type="search"
                  className="border-0 pl-9 py-3 w-full"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-default" />
      <div className="container mx-auto px-1.5 lg:px-0">
        <div className="grid gap-x-7 gap-y-12 grid-cols-2 lg:grid-cols-4 pt-12">
          <div>
            <TemplateItem img_url={template_11} name={"Create 01 name"} />
          </div>
          <div>
            <TemplateItem img_url={template_14} name={"Create 01 name"} />
          </div>
          <div>
            <TemplateItem img_url={template_6} name={"Create 01 name"} />
          </div>
          <div>
            <TemplateItem img_url={template_13} name={"Create 01 name"} />
          </div>
          <div>
            <TemplateItem img_url={template_10} name={"Create 01 name"} />
          </div>
          <div>
            <TemplateItem img_url={template_2} name={"Create 01 name"} />
          </div>
          <div>
            <TemplateItem img_url={template_3} name={"Create 01 name"} />
          </div>
          <div>
            <TemplateItem img_url={template_4} name={"Create 01 name"} />
          </div>
          <div>
            <TemplateItem img_url={template_5} name={"Create 01 name"} />
          </div>
          <div>
            <TemplateItem img_url={template_12} name={"Create 01 name"} />
          </div>
          <div>
            <TemplateItem img_url={template_8} name={"Create 01 name"} />
          </div>
          <div>
            <TemplateItem img_url={template_20} name={"Create 01 name"} />
          </div>
          <div>
            <TemplateItem img_url={template_15} name={"Create 01 name"} />
          </div>
          <div>
            <TemplateItem img_url={template_17} name={"Create 01 name"} />
          </div>
          <div>
            <TemplateItem img_url={template_18} name={"Create 01 name"} />
          </div>
          <div>
            <TemplateItem img_url={template_21} name={"Create 01 name"} />
          </div>
        </div>
        <div className="flex flex-col items-center mt-16 pb-24">
          <div className="flex text-gray-700">
            <div className=" mr-1 flex justify-center items-center cursor-pointer">
              <img
                className="transform rotate-180 w-6 h-6"
                src={iconDoubleArrowRightActive}
                alt=""
              />
            </div>
            <div className=" mr-1 flex justify-center items-center cursor-pointer">
              <img
                className="transform rotate-180 w-6 h-6"
                src={iconRightArrowActive}
                alt=""
              />
            </div>
            <div className="flex text-2xl">
              <div className="px-3 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in text-active-default">
                1
              </div>
              <div className="px-3 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in">
                2
              </div>
              <div className="px-3 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in">
                3
              </div>
              <div className="px-3 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in">
                4
              </div>
              <div className="px-3 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in">
                5
              </div>
              <div className="px-3 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in">
                ...
              </div>
              <div className="px-3 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in">
                12
              </div>
            </div>
            <div className="ml-1 cursor-pointer">
              <img className="w-6 h-6" src={iconRightArrow} alt="" />
            </div>
            <div className="ml-1 cursor-pointer">
              <img className="w-6 h-6" src={iconDoubleArrowRight} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
