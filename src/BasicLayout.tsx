import React from 'react'

import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { TBasicLayout } from './BasicLayout.type'

export const BasicLayout: React.FC<TBasicLayout> = (props: TBasicLayout) => {
  const { child: Child } = props
  return (
    <>
      <Navbar/>
      <Child />
      <Footer/>
    </>
  )
}