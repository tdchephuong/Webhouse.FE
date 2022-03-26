import classNames from "classnames";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { Card } from "components/Card";
// import themeApi from 'api/theme'
import TTheme from 'api/theme.type'
// import {Modal} from "components/Modal"
import {themesData} from 'api/mock-theme-api';
import Pagination from 'components/Pagination';

import iconSearch from "assets/img/icon-search.svg";

import "./Templates.css";

export const Templates: React.FC = () => {
  const [activeTemplateType, setActiveTemplateType] = useState(0);
  const [themes, setThemes] = useState<Array<TTheme>>([]);
  const [currentPage, setCurrentPage] = useState(0);
  // const [previewTheme, setPreviewThemes] = useState<TTheme>();
  // const [previewModalOpen, setPreviewModalOpen] = useState(false);
  const { t } = useTranslation();

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
  const itemPerPage = 9

  useEffect(() => {
    // themeApi().getTheme().then(docs => {
    //   setThemes(docs.data.data.matches);
    // })
    const data = Object.assign(new Array<TTheme>(), themesData) 
    setThemes(data);
  }, [])

  // const onPreviewTheme = (theme:TTheme) => {
  //   setPreviewThemes(theme)
  //   setPreviewModalOpen(true)
  // }

  return (
    <>
      <div className="bg-white pt-16 pb-9">
        <div className="container mx-auto px-1.5 lg:px-0">
          <div className="text-4xl text-black template-title">
            {t('templatePage.title')}
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
                {t('templatePage.category.all')}
              </div>
              <div
                className={middleTemplateTypeClassName(1)}
                onClick={() => updateTemplateType(1)}
              >
                {t('templatePage.category.business')}
              </div>
              <div
                className={middleTemplateTypeClassName(2)}
                onClick={() => updateTemplateType(2)}
              >
                {t('templatePage.category.services')}
              </div>
              <div
                className={middleTemplateTypeClassName(3)}
                onClick={() => updateTemplateType(3)}
              >
                {t('templatePage.category.health')}
              </div>
              <div
                className={middleTemplateTypeClassName(4)}
                onClick={() => updateTemplateType(4)}
              >
                {t('templatePage.category.beauty')}
              </div>
              <div
                className={middleTemplateTypeClassName(5)}
                onClick={() => updateTemplateType(5)}
              >
                {t('templatePage.category.fashion')}
              </div>
              <div
                className={middleTemplateTypeClassName(6)}
                onClick={() => updateTemplateType(6)}
              >
                {t('templatePage.category.landingPages')}
              </div>
              <div
                className={middleTemplateTypeClassName(7)}
                onClick={() => updateTemplateType(7)}
              >
                {t('templatePage.category.landingPages')}
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
                  placeholder={t('templatePage.search')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-default" />
      <div className="container mx-auto px-1.5 lg:px-0">
        <div className="grid gap-x-7 gap-y-12 grid-cols-2 lg:grid-cols-3 pt-12">
        {
          themes?themes.map((theme, index) => (
            (index>=(itemPerPage*currentPage)&&
            index<(itemPerPage*currentPage)+itemPerPage)&&
            <Card
              key={theme.id}
              detailLink={theme.previews?.live_site?.url}
              img_url={theme.previews?.landscape_preview?.landscape_url}
              name={theme.name}
              rating={theme.rating?.rating}
              number_of_sales={theme.number_of_sales}
              price_cents={theme.price_cents}
            />
          )):(<div className="text-center text-lg">No template found</div>)
        }
        </div>
        <Pagination
          currentPage={currentPage}
          totalItem={themes.length}
          itemPerPage={itemPerPage}
          onPage={(value) => setCurrentPage(value)}/>
        {/* {
          previewTheme&&<Modal
            modalShowed={previewModalOpen} 
            toggleModal={()=>setPreviewModalOpen(false)}
            title="Preview">{previewTheme.previews.live_site.url}</Modal>
        } */}
      </div>
    </>
  );
};
