import React from "react";
import { FooterLinks } from "../constants";

const Footer = () => {
  return (
    <section className="fixed sm:block hidden bottom-0 right-0 w-full footerOpacity footer1">
      <div className="flex justify-center items-center rotate-90 fixed lg:left-[-38px] sm:left-[-48px] bottom-[220px] ">
        {FooterLinks.map(({ id, image }, index) => (
          <div
            key={id}
            className={`w-fit rotate-[-90deg] ${
              index !== FooterLinks.length - 1 ? "mr-5" : "mr-0"
            }`}
          >
            <img
              src={image}
              alt=""
              className="w-[23px] h-[23px] object-contain cursor-pointer"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center rotate-90 fixed text-textcolor text-[13px] lg:right-[-35px] sm:right-[-45px] font-roboto bottom-[220px] hover:text-secondary transist cursor-pointer">
        simonturiano60@gmail.com
      </div>
      <div className="fixed bottom-0 rotate-90 lg:right-[-40px] sm:right-[-50px] w-[200px] h-[2px] rounded-[3px] bg-textcolor border-[1.5px] border-textcolor" />
      <div className="fixed bottom-0 rotate-90 lg:left-[-40px] sm:left-[-50px] w-[200px] h-[2px] rounded-[3px] bg-textcolor border-[1.5px] border-textcolor" />
    </section>
  );
};

export default Footer;
