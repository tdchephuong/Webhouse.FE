import classNames from "classnames";
import React, { useState, useEffect } from "react";

import { Card } from "components/Card";
// import themeApi from 'api/theme'
import TTheme from 'api/theme.type'
import {Modal as Modal} from "components/Modal"
import {themesData} from 'api/mock-theme-api';

import iconSearch from "assets/img/icon-search.svg";
import iconRightArrow from "assets/img/icon-right-arrow.svg";
import iconDoubleArrowRight from "assets/img/icon-double-arrow-right.svg";
import iconRightArrowActive from "assets/img/icon-right-arrow-active.svg";
import iconDoubleArrowRightActive from "assets/img/icon-double-arrow-right-active.svg";

import "./Templates.css";

export const Templates: React.FC = () => {
  const [activeTemplateType, setActiveTemplateType] = useState(0);
  const [themes, setThemes] = useState<Array<TTheme>>([]);
  const [previewTheme, setPreviewThemes] = useState<TTheme>();
  const [previewModalOpen, setPreviewModalOpen] = useState(false)
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

  useEffect(() => {
    // themeApi().getTheme().then(docs => {
    //   setThemes(docs.data.data.matches);
    // })
    const data = Object.assign(new Array<TTheme>(), themesData) 
    setThemes(data);
  }, [])

  const onPreviewTheme = (theme:TTheme) => {
    setPreviewThemes(theme)
    setPreviewModalOpen(true)
  }

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
        {
          themes?themes.map(theme => (
            <div key={theme.id} className="p-3.5 shadow-md bg-white rounded-md">
              <Card
                classNameImg="home-image-template"
                detailLink={theme.previews?.live_site?.url}
                img_url={theme.previews?.landscape_preview?.landscape_url}
                name={theme.name}
                rating={theme.rating?.rating}
                number_of_sales={theme.number_of_sales}
                price_cents={theme.price_cents}
              />
            </div>
          )):(<div className="text-center text-lg">No template found</div>)
        }
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
        {
          previewTheme&&<Modal
            modalShowed={previewModalOpen} 
            toggleModal={()=>setPreviewModalOpen(false)}
            title="Preview">{previewTheme.previews.live_site.url}</Modal>
        }
      </div>
    </>
  );
};
