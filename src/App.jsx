import React from "react";
import Fade from "react-reveal/Fade";
import { Nav, Hero, AboutMe, Footer, Projects, Contacts } from "./components";
import { layout } from "./styles";

const App = () => {
  return (
    <div className="w-full overflow-hidden relative">
      <div>
        <Nav />
      </div>
      <div className="flex justify-center items-center flex-col">
        <div className="max-w-[1300px]">
          <div className={`${layout.sectionPaddingX}`}>
            <Hero />
          </div>
          <div className={layout.sectionPaddingX}>
            <Fade bottom distance="10%">
              <AboutMe />
            </Fade>
            <Projects />
            <Fade bottom distance="5%">
              <Contacts />
            </Fade>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
