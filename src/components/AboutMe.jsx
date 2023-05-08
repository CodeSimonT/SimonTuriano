import React from "react";
import { aboutResponsive, layout, headingResposive } from "../styles.js";
import { AboutLinks } from "../constants/index.js";
import { arrow, profile } from "../assets/index.js";
const AboutMe = () => {
  return (
    <section id="about">
      <div
        className={`text-textcolor flex flex-col ssm:flex-row items-center ${aboutResponsive.paddingY}`}
      >
        <div className="w-full ssm:w-[55%] mb-[30px] ssm:mb-0">
          <div className={`flex ${aboutResponsive.titlePY}`}>
            <h1 className={`${headingResposive.title} text-tertiary min-w-fit`}>
              <span
                className={`text-secondary pr-3 ${headingResposive.titleSpan}`}
              >
                01.
              </span>
              About Me
            </h1>
            <div className="flex justify-center items-center w-full px-3">
              <div className=" w-[100%] h-[0.5px] border-b-[.1px] border-textcolor" />
            </div>
          </div>
          <div className={`${aboutResponsive.text}`}>
            <p className="pb-[20px]">
              Hello! My name is Simon Turiano, I enjoy building things that live
              on the internet. My interest in web development started back in
              april 2022 when I decided study HTML & CSS
            </p>
            <p className="pb-[20px]">
              Fast-forward to today, I have a knowledge to build a {""}
              <span className="text-secondary">FullStack website</span>, my main
              focus these day is to build more side projects to gain more
              information on building a fullstack application.
            </p>
            <p className="pb-[20px]">
              Here are a few technologies i've been working for recently:
            </p>
            <div className="flex flex-1">
              {AboutLinks.map((item, index) => (
                <div key={index} className=" pr-[20px]">
                  {item.title.map((value, index) => (
                    <div key={index} className="flex items-center">
                      <img
                        src={arrow}
                        className="w-[10px] h-[10px] content-fit mr-[10px] "
                        alt=""
                      />
                      <h1>{value.item}</h1>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full ssm:w-[45%] flex justify-center items-center">
          <div className="relative z-0">
            <img
              src={profile}
              className={`z-[5] rounded-[3px] ${aboutResponsive.imgSize}`}
              alt=""
            />
            <div className={`${layout.imgOverlay}`} />
            <div className="absolute w-full h-full left-[15px] rounded-[3px] top-[15px] border-secondary border-[3px] z-[-1] hover:overlay" />
          </div>
          {/* aboutShadow */}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
