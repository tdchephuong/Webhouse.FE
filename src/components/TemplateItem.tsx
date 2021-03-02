import React from "react";
import { Link } from "react-router-dom";

import { TTemplateItem } from "./TemplateItem.type";

export const TemplateItem: React.FC<TTemplateItem> = (props: TTemplateItem) => {
  const { img_url, name, classNameImg, detailLink } = props;
  return (
    <Link to={detailLink}>
      <img className={`w-auto h-60 object-cover ${classNameImg}`} src={img_url} alt="" />
      <p className="text-black mt-3">{name}</p>
      <div className="flex">
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
      </div>
    </Link>
  );
};
