import React, { useState, useEffect } from "react";
import { Navlinks } from "../constants";
import { logo } from "../assets";
import { layout, heroResponsive, navResposive } from "../styles";
import { close, open } from "../assets";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import Fade from "react-reveal/Fade";

const Nav = () => {
  const [scroll, setScroll] = useState(true);
  const [toggle, setToggle] = useState(true);

  toggle ? enableBodyScroll(document) : disableBodyScroll(document);

  const controlNavbar = () => {
    if (window.scrollY > 0) {
      // console.log(scrolling);
      setScroll(false);
    } else {
      setScroll(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
  }, []);

  return (
    <nav
      className={`${scroll ? "navbarshow" : "navbarhide"} ${
        navResposive.navPadding
      } flex w-full fixed justify-between items-center bg-primary text-tertiary text-[13px] bg-opacity-[.6] z-[1] `}
    >
      <div className="logoS navAnimation">
        <img
          src={logo}
          alt=""
          className={`${navResposive.navLogo} w-[40px] h-[40px] object-fit z-[1000000]`}
        />
      </div>
      <div className="sm:hidden flex z-[-1] navMenuAnimation logoMenu">
        <img
          src={toggle ? open : close}
          alt=""
          className={`${navResposive.navMenu}`}
          onClick={() => setToggle(false)}
        />
      </div>
      {/* nav overlay */}

      <div
        className={`${
          toggle ? "hidden" : "flex"
        } absolute  top-0 right-0 w-full h-[100vh] z-[-1]`}
      >
        <Fade when={!toggle}>
          <div className="w-[30%] backdrop-blur h-[100%] z-[10]" />
          <div className="w-[70%] bg-aboutBg h-[100vh] z-[100]">
            <div
              className={`sm:hidden flex z-[-1] justify-end ${navResposive.navMobileIconP}`}
            >
              <img
                src={toggle ? open : close}
                alt=""
                className={`${navResposive.navMenu}`}
                onClick={() => setToggle(true)}
              />
            </div>
            <ul className="list-none flex flex-col pt-[30px]">
              {Navlinks.map((item, index) => (
                <li
                  key={item.id}
                  className={`cursor-pointer flex items-center px-4 py-2 font-roboto hover:text-secondary justify-center pb-[25px] xs:text-[15px]`}
                  onClick={() => setToggle(true)}
                >
                  <a href={item.link}>
                    <span className="text-secondary mr-1 font-roboto">
                      {item.number}
                    </span>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex justify-center">
              <button
                className={`${layout.buttonstyle} ${heroResponsive.heroButton} xs:text-[15px]`}
                onClick={() => setToggle(true)}
              >
                <a href="#contact">Get In Touch</a>
              </button>
            </div>
          </div>
        </Fade>
      </div>
      {/* end nav overlay */}
      <div className="sm:flex hidden">
        <ul className="list-none flex">
          {Navlinks.map((item, index) => (
            <li
              key={item.id}
              className={`cursor-pointer flex items-center px-4 py-2 font-roboto hover:text-secondary navAnimation ${
                index == [0] ? "link1" : ""
              } ${index == 1 ? "link2" : ""} ${index == [2] ? "link3" : ""} `}
            >
              <a href={item.link}>
                <span className="text-secondary mr-1 font-roboto">
                  {item.number}
                </span>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center">
          <button
            className="ml-4 flex items-center cursor-pointer py-[9px] text-secondary px-[15px] border-[1px] border-secondary font-roboto
          rounded-[3px] hover:bg-secondary hover:text-primary transist button1 navAnimation"
          >
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
