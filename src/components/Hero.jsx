import { mulish } from "@/config/font";
import React from "react";
import Typewriter from "./Typewriter";
import ContactModal from "./ContactModal";

const Hero = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <div className={`h-[calc(100vh-0px)] pt-20 lg:pt-12`}>
      <div
        className="grid grid-cols-1 justify-center items-center h-full px-5 lg:px-20"
        data-aos="zoom-in"
      >
        <div className="px-2 flex flex-col justify-center items-center">
        <h1
            className={
              mulish.className +
              " text-center text-lg lg:text-2xl leading-snug"
            }
          >
            A wide range of services all under one roof.
          </h1>
          <h1
            className={
              mulish.className +
              " text-center text-3xl lg:text-6xl font-bold leading-snug lg:leading-normal"
            }
          >
             Why struggle with <br className="block" />
            <Typewriter />
          </h1>
          <h1
            className={
              mulish.className +
              " text-center text-3xl lg:text-6xl font-bold leading-snug lg:leading-normal"
            }
          >
            Join us and <span className="text-[#96ce52]">Unlock your American 
            dream</span> in just a year with EB-1A!
          </h1>

          <button
            onClick={handleOpen}
            className="bg-black text-white border-2 text-sm font-normal lg:text-lg lg:font-medium border-black px-6 py-2.5 rounded-full mt-5 lg:mg-12 hover:bg-white hover:text-black hover:translate-x-2 hover:-translate-y-2 transition-all duration-300 shadow-black/80 shadow-xl"
          >
            Get Started
          </button>
        </div>
        {/* <div className=""></div> */}
      </div>
      {open ? (
        <ContactModal open1={true} onClose={() => setOpen(false)} />
      ) : null}
    </div>
  );
};

export default Hero;
