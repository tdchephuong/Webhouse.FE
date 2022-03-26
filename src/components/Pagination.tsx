import React from 'react';
import classNames from 'classnames';

import {TPagination} from "./Pagination.type"
import iconRightArrow from "assets/img/icon-right-arrow.svg";
import iconDoubleArrowRight from "assets/img/icon-double-arrow-right.svg";
import iconRightArrowActive from "assets/img/icon-right-arrow-active.svg";
import iconDoubleArrowRightActive from "assets/img/icon-double-arrow-right-active.svg";

const Pagination: React.FC<TPagination> = (props: TPagination) => {
  const {currentPage=0, totalItem=0, itemPerPage=10, onPage} = props;
  const pageLength = Math.floor(totalItem/itemPerPage)+((totalItem%itemPerPage)>0?1:0)

  const pages = Array.from({length:pageLength},(v,i)=>{
    // show page item
    if(i>=(currentPage-2)&&i<(currentPage+3)) {
      return i;
    }

    // show empty ...
    if(
      (currentPage>=3 && i===(currentPage-3) && i) || 
      (currentPage<(pageLength-4) && i===(currentPage+3))
    ) return -1;

    // show first and last page
    if(!i||i===(pageLength-1)) {
      return i;
    }
    return -2;
  }).filter((i) => i!==-2);

  const currentPageClass = (index: number) => classNames({
    'text-active-default': index === currentPage,
    'cursor-pointer': index !== currentPage && index !== -1
  })
  return (
    <div className="flex items-center mt-16 pb-24 text-gray-700 w-2/3 mx-auto">
      <div className=" mr-1 flex justify-center items-center cursor-pointer" onClick={() => currentPage >= 1? onPage(0):undefined}>
        <img
          className="transform rotate-180 w-6 h-6"
          src={currentPage>=1?iconDoubleArrowRight:iconDoubleArrowRightActive}
          alt=""
        />
      </div>
      <div className=" mr-1 flex justify-center items-center cursor-pointer" onClick={() => currentPage >= 1? onPage(currentPage - 1):undefined}>
        <img
          className="transform rotate-180 w-6 h-6"
          src={currentPage>=1?iconRightArrow:iconRightArrowActive}
          alt=""
        />
      </div>
      <div className="flex text-2xl mx-auto">
        {pages.map((page, index) => (
          <div
            className={`px-3 md:flex justify-center items-center hidden leading-5 ${currentPageClass(page)}`}
            key={index}
            onClick={ () =>
              page!==-1?
              onPage(page):
              undefined
            }
            >
            {page!==-1?page+1:'...'}
          </div>
        ))}
      </div>
      <div className="ml-1 cursor-pointer"  onClick={() => currentPage <= pageLength-2? onPage(currentPage+1):undefined}>
        <img className="w-6 h-6" src={currentPage<=pageLength-2?iconRightArrow:iconRightArrowActive} alt="" />
      </div>
      <div className="ml-1 cursor-pointer"  onClick={() => currentPage <= pageLength-2? onPage(pageLength-1):undefined}>
        <img className="w-6 h-6" src={currentPage<=pageLength-2?iconDoubleArrowRight:iconDoubleArrowRightActive} alt="" />
      </div>

    </div>
  )
}

export default Pagination;