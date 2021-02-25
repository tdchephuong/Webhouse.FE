import React from "react";

import { Navbar } from "./components/Navbar";
import { TGeneralLayout } from "./GeneralLayout.type";

export const OnlyHeaderLayout: React.FC<TGeneralLayout> = (
  props: TGeneralLayout
) => {
  const { children: Child } = props;
  return (
    <>
      <Navbar type="SwitchModeNav"/>
      <Child />
    </>
  );
};
