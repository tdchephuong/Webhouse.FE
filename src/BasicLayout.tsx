import React from "react";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {TGeneralLayout} from "./GeneralLayout.type";

export const BasicLayout: React.FC<TGeneralLayout> = (
  props: TGeneralLayout
) => {
  const { children: Child } = props;
  return (
    <>
      <Navbar />
      <Child />
      <Footer />
    </>
  );
};
