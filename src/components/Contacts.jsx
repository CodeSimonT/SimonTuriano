import React from "react";
import { contectResponsive, layout } from "../styles";

const Contacts = () => {
  return (
    <section id="contact">
      <div className="flex flex-col justify-between items-center h-[100vh] text-textcolor pt-[80px] pb-[25px]">
        <div className="text-center font-kanit flex flex-col items-center ">
          <h4 className="font-roboto text-secondary text-[16px] pb-[5px]">
            <span className="text-[14px] mr-[10px]">04.</span>What’s Next?
          </h4>
          <h1
            className={` ${contectResponsive.contactTitle} font-bold pb-[20px] text-tertiary`}
          >
            Get In Touch
          </h1>
          <p className="max-w-[600px] text-[18px] pb-[50px]">
            Although I’m not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </p>
          <button
            className={`${contectResponsive.contactButton} ${layout.buttonstyle}`}
          >
            Say Hello
          </button>
        </div>
        <h1 className="font-roboto ">Built by Simon Turiano</h1>
      </div>
    </section>
  );
};

export default Contacts;
