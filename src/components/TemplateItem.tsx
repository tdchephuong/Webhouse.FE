import React from "react";
import { Link } from "react-router-dom";

import { TTemplateItem } from "./TemplateItem.type";

export const TemplateItem: React.FC<TTemplateItem> = (props: TTemplateItem) => {
  const { img_url, name, classNameImg, detailLink } = props;
  return (
    <Link to={detailLink}>
      <img className={`w-auto h-60 object-cover ${classNameImg}`} src={img_url} alt="" />
      <p className="text-black mt-3">{name}</p>
    </Link>
  );
};
