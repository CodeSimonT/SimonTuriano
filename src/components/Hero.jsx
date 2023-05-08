import React from "react";
import { layout } from "../styles";
import { heroResponsive } from "../styles";
const Hero = () => {
  return (
    <section id="hero">
      <div className="text-white h-[100vh] flex flex-col justify-center">
        <h5
          className={`${heroResponsive.heroIntro} text-secondary font-roboto hero1 heroAnimation`}
        >
          Hi, my name is
        </h5>
        <h1
          className={`${heroResponsive.heroName} font-bold font-kanit text-textcolor hero2 heroAnimation`}
        >
          {/* to make the text resposive set the text to vw ex. 10vw */}
          <span className={`${heroResponsive.heroNamespan} text-tertiary `}>
            Simon Turiano.
          </span>{" "}
          <br />
          I'm a Full Stack Web developer.
        </h1>
        <h1 className="text-[70px] font-bold font-kanit text-textcolor"></h1>
        <p
          className={`${heroResponsive.heroP} text-textcolor font-kanit hero3 heroAnimation`}
        >
          I’m a full stack web developer specializing in building (and
          occasionally designing) exceptional digital experiences. Currently,
          I’m focused on building accessible and fast full stack website
        </p>
        <button
          className={`${layout.buttonstyle} ${heroResponsive.heroButton} hero4 heroAnimation`}
        >
          <a href="#contact">Get In Touch</a>
        </button>
      </div>
    </section>
  );
};

export default Hero;
