import classNames from 'classnames'
import React, { useCallback, useEffect, useState } from "react";
import { NavLink } from 'react-router-dom'

import { TemplateItem } from 'components/TemplateItem'

import category_11 from 'assets/img/category_11.png'
import category_20 from 'assets/img/category_20.png'
import category_19 from 'assets/img/category_19.png'
import category_2 from 'assets/img/category_2.png'
import category_10 from 'assets/img/category_10.png'
import category_6 from 'assets/img/category_6.png'
import category_3 from 'assets/img/category_3.png'
import category_4 from 'assets/img/category_4.png'
import category_7 from 'assets/img/category_7.png'
import category_16 from 'assets/img/category_16.png'
import category_9 from 'assets/img/category_9.png'
import category_13 from 'assets/img/category_13.png'
import image_22 from 'assets/img/image_22.jpg'
import imgIntroduction from "assets/img/img-introduction.png";
import btnScrollUp from "assets/img/icon-scroll_up.png";
import logo from "assets/img/logo.svg";

import "./Home.css";

export const Home: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false)
  const buttonScrollUpClass = classNames('fixed top-1/3 right-7 cursor-pointer', {
    hidden: !showScroll
  })
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const checkScrollTop = useCallback(() => {
    setShowScroll(false)
    if (window.pageYOffset > 400){
      setShowScroll(true)
    }
  }, [setShowScroll])

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop)
    return () => window.removeEventListener('scroll', checkScrollTop)
  }, [checkScrollTop])

  return (
    <div className="bg-default">
      <div className="container mx-auto pt-24">
        <div className="sm:flex">
          <div className="sm:w-1/2 sm:mt-0 mt-8">
            <span className="text-xl">Welcome to</span>{" "}
            <img
              className="w-24 h-4 inline-block align-baseline"
              src={logo}
              alt=""
            />
            <div className="max-w-md text-5xl text-black txt-introduction font-medium mt-4">
              Freedom to Create the Websites You Want
            </div>
            <div className="text-lg mt-1 max-w-xs">
              You'd Never Imagine That Powerful Websites Could Be Made That Easy
            </div>
          </div>
          <div className="sm:w-1/2 sm:mt-0 mt-8">
            <img className="w-full h-auto" src={imgIntroduction} alt="" />
          </div>
        </div>
      </div>
      <div className="container mx-auto pt-14">
        <div className="text-5xl text-black font-medium">Stunning Templates</div>
        <div className="text-2xl mt-1">Start with free HTML website templates and bring your vision to life.</div>
        <div className="mt-12 pb-16">
          <div className="grid gap-x-7 gap-y-9 grid-cols-4">
            <div>
              <TemplateItem img_url={category_11} name={'Ethical Hacker'} />
            </div>
            <div>
              <TemplateItem img_url={category_20} name={'Project Manager'} />
            </div>
            <div>
              <TemplateItem img_url={category_19} name={'Scrum Master'} />
            </div>
            <div>
              <TemplateItem img_url={category_2} name={'Software Developer'} />
            </div>
            <div>
              <TemplateItem img_url={category_10} name={'Project Manager'} />
            </div>
            <div>
              <TemplateItem img_url={category_6} name={'Software Tester'} />
            </div>
            <div>
              <TemplateItem img_url={category_3} name={'Scrum Maste'} />
            </div>
            <div>
              <TemplateItem img_url={category_4} name={'Project Manager'} />
            </div>
            <div>
              <TemplateItem img_url={category_7} name={'Software Tester'} />
            </div>
            <div>
              <TemplateItem img_url={category_16} name={'Software Development Manager'} />
            </div>
            <div>
              <TemplateItem img_url={category_9} name={'Team Leader'} />
            </div>
            <div>
              <TemplateItem img_url={category_13} name={'UI/UX Designer'} />
            </div>
          </div>
          <div className="mt-12 text-center">
            <NavLink
              to="/templates"
              className="inline-block border border-blue-500 text-blue-500 rounded-full px-10 pt-5 pb-3.5 transition duration-500 ease select-none hover:border-blue-800 hover:text-blue-800 text-base md:text-2xl"
            >
              Explore All Templates
            </NavLink>
          </div>
        </div>
      </div>
      <div className="py-24 bg-white">
        <div className="container mx-auto">
          <div className="sm:flex">
            <div className="sm:w-1/2 sm:mt-0 mt-8">
              <div className="w-10/12 text-5xl text-black txt-introduction font-medium mt-4">About Us</div>
              <div className="text-lg mt-3 max-w-md font-light">
                <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus enim velit tristique mi euismod quis suspendisse odio. Aliquam felis eu eu massa lobortis.</p>
                <p className="mb-3">Faucibus fringilla amet duis eget imperdiet. Id gravida sed id mauris suspendisse diam quam sit. Eu cras pellentesque massa, habitasse neque, sed maecenas enim. Neque enim mi porta aenean. Integer nibh justo id pretium.
                </p>
              </div>
              <div className="mt-9">
                <NavLink
                  to="/about-us"
                  className="inline-block border border-blue-500 text-blue-500 rounded-full px-6 pt-3.5 pb-2.5 transition duration-500 ease select-none hover:border-blue-800 hover:text-blue-800 text-base md:text-lg"
                >
                  Read more
                </NavLink>
              </div>
            </div>
            <div className="sm:w-1/2 sm:mt-0 mt-8">
              <img className="w-full h-auto" src={image_22} alt="" />
            </div>
          </div>
        </div>
      </div>
      <img className={buttonScrollUpClass} src={btnScrollUp} alt="" onClick={scrollToTop}/>
    </div>
  );
};
