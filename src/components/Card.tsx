import React from "react";
// import { Link } from "react-router-dom";

import { TCard } from "./Card.type";
import {Rating} from "components/Rating";

export const Card: React.FC<TCard> = (props: TCard) => {
  const { img_url, name, classNameImg, detailLink, rating=0, number_of_sales, price_cents=0 } = props;
  return (
    <div>
      <a href={detailLink} target="_blank" rel="noreferrer">
        <img className={`w-auto h-60 object-cover ${classNameImg}`} src={img_url} alt="" />
        <p className="text-black mt-3">{name}</p>
      </a>
      {/* <div className="flex">
        <div className="w-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 inline-block align-middle">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
          </svg>
          <span className="pl-4 inline-block align-middle">0</span>
        </div>
        <div className="w-1/2 text-right">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 inline-block align-middle">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
          </svg>
          <span className="pl-4 inline-block align-baseline">0</span>
        </div>
      </div> */}
      <Rating color="#ffab00" count={rating} className="mt-3" />
      <div className="grid grid-cols-2 mt-2 items-end">
        <p>{number_of_sales?.toLocaleString()} Sales</p>
        <p className="justify-self-end font-bold text-xl">${(price_cents/100)?.toLocaleString(undefined,{maximumFractionDigits:2})}</p>
      </div>
      <div className="grid grid-cols-2 mt-4 gap-x-3">
        <button className="border border-gray-500 bg-gray-500 text-white rounded-lg px-4 py-2 transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline text-base md:text-md cursor-pointer block">Detail</button>
        <button className="border border-blue-500 bg-blue-500 text-white rounded-lg px-4 py-2 transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline text-base md:text-md cursor-pointer block">Preview</button>
      </div>
    </div>
  );
};
