import React from "react";
import Fade from "react-reveal/Fade";
import { FeaturedProjects } from "../constants";
import { layout, projectResposive, headingResposive } from "../styles";
const Projects = () => {
  return (
    <section
      id="project"
      className={`${projectResposive.paddingY} text-textcolor`}
    >
      <Fade bottom distance="5%">
        {/* pb-[50px] mb-[50px] */}
        <div className={`${projectResposive.titleP} flex w-full mb-[50px]`}>
          <h1 className={`${headingResposive.title} min-w-fit text-tertiary`}>
            <span className={`${headingResposive.titleSpan} text-secondary`}>
              02.
            </span>{" "}
            Some Things I’ve Built
          </h1>
          <div className="flex justify-center items-center w-full px-3">
            <div className=" w-[100%] h-[0.5px] border-b-[.1px] border-textcolor" />
          </div>
        </div>
      </Fade>
      <div className={`w-full flex flex-col lg:items-center`}>
        <Fade bottom distance="5%">
          {FeaturedProjects.map((item, index) => (
            <div
              key={item.id}
              className={`relative ${
                // default mb-[200px]
                index !== FeaturedProjects.length - 1
                  ? "mb-[30px] sm:mb-[60px] ssm:mb-[150px]"
                  : "mb-0"
              }  lg:max-w-[900px] lg:min-w-[900px]`}
            >
              {/* content web view*/}
              <div
                className={`z-[4] ${index == [1] ? "items-baseline" : ""}
                ssm:flex hidden flex-col w-full justify-center items-end font-roboto `}
              >
                <h5 className="text-secondary text-[14px] pb-[5px] z-[5]">
                  Featured Project
                </h5>
                <h1
                  className={`${projectResposive.proTitle} pb-5 text-tertiary z-[5]`}
                >
                  {item.title}
                </h1>
                <p
                  className={`${
                    index == [1] ? "text-left" : "text-right"
                  } max-w-[450px] p-[25px] bg-aboutBg rounded-[5px] text-[17px] mb-[20px] z-[5] font-kanit`}
                >
                  {item.text}
                </p>
                <ul className="flex justify-end z-[5] bg-transparent pb-3">
                  {item.tech.map((value, index) => (
                    <li
                      key={index}
                      className={`${
                        index !== item.tech.length - 1 ? "mr-3" : "mr-0"
                      } text-[15px] font-kanit`}
                    >
                      {value.item}
                    </li>
                  ))}
                </ul>
                <div className="flex z-[5]">
                  {item.link.map((itemlink, index) => (
                    <div key={index}>
                      <img
                        src={itemlink.item}
                        alt=""
                        className={`${
                          index !== item.link.length - 1 ? "mr-2" : ""
                        } w-[30px]`}
                      />
                    </div>
                  ))}
                </div>
              </div>
              {/* end content */}

              {/* image web view*/}
              <div
                className={`absolute top-[0] left-0 z-[1] w-full h-full ssm:flex hidden justify-start items-center ${
                  index == [1] ? "justify-end left-0" : ""
                } `}
              >
                <div className="relative z-0 top">
                  <img
                    src={item.img}
                    className="w-[580px] z-[0] rounded-[3px]"
                    alt=""
                  />
                  <div className={`${layout.imgOverlay}`} />
                </div>
              </div>
              {/* end image */}

              {/* content mobile view */}
              <div
                className={`${index == [0] ? "bg-img0" : ""} ${
                  index == [1] ? "bg-img1" : ""
                } ${index == [2] ? "bg-img2" : ""} 
                ${projectResposive.valueMobileView} 
                relative bg-cover bg-center bg-no-repeat z-[4] ssm:hidden flex
                flex-col w-full justify-center items-start font-roboto min-w-[300px] valueShadow`}
                // px-[40px] py-[50px] usual padding
              >
                <h5
                  className={`${projectResposive.headingSize} text-secondary pb-[5px] z-[5]`}
                >
                  Featured Project
                </h5>
                <h1
                  className={`${projectResposive.proTitle} pb-5 text-tertiary z-[5]`}
                >
                  {item.title}{" "}
                </h1>
                <p className={`p-[25px]text-[17px] mb-[20px] z-[5] font-kanit`}>
                  {item.text}
                </p>
                <ul className="flex flex-wrap justify-start z-[5] bg-transparent mb-5">
                  {item.tech.map((value, index) => (
                    <li
                      key={index}
                      className={`${
                        index !== item.tech.length - 1 ? "mr-3" : "mr-0"
                      } text-[15px] font-kanit`}
                    >
                      {value.item}
                    </li>
                  ))}
                </ul>
                <div className="flex z-[5]">
                  {item.link.map((itemlink, index) => (
                    <div key={index}>
                      <img
                        src={itemlink.item}
                        alt=""
                        className={`${
                          index !== item.link.length - 1 ? "mr-2" : ""
                        } w-[30px]`}
                      />
                    </div>
                  ))}
                </div>
                <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-[.8]" />
              </div>
              {/* end content mobile view */}
            </div>
          ))}
        </Fade>
      </div>
    </section>
  );
};

export default Projects;
