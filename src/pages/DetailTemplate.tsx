import React from "react";

import part_1 from 'assets/img/detail-template/img-page_part_1.jpg'
import part_2 from 'assets/img/detail-template/img-page_part_2.jpg'
import part_3 from 'assets/img/detail-template/img-page_part_1.jpg'
import part_4 from 'assets/img/detail-template/img-page_part_4.jpg'

export const DetailTemplate: React.FC = () => {
  return <>
    <img src={part_1} alt="" className="w-full h-auto"/>
    <img src={part_2} alt="" className="w-full h-auto"/>
    <img src={part_3} alt="" className="w-full h-auto"/>
    <img src={part_4} alt="" className="w-full h-auto"/>
  </>;
};
