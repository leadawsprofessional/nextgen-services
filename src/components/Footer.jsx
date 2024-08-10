import { goldman, spaceGrotesk } from "@/config/font";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#363537] rounded-t-[4rem] p-12 flex flex-col justify-center items-center">
        <div
        className="flex w-full justify-between items-center text-white relative"
        role="navigation"
      >
        <a href="/" className={goldman.className+" lg:text-2xl ml-5"}>
          NEXGEN SERVICES
        </a>
        <div className={spaceGrotesk.className+" pr-8 md:block hidden md:text-xl"}>
          <a href="/" className="p-4">
            About Us
          </a>
          <a href="/" className="p-4">
            Services
          </a>
          <a href="/" className="p-4">
            Pricing
          </a>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 border-b-4 w-full pb-6">
        <div className="flex flex-col py-5 space-y-2">
        <div className={" bg-[#B9FF66] p-px rounded-lg w-40 px-5"}>Contact Us : </div>
        <div className="text-white">Email : info@targetgreencard.com</div>
        <div className="text-white">Phone : +91 7995757248</div>
        </div>
        <div className="pt-6"></div>
      </div>

      <div className="pt-6 w-full"><span className="text-white">© 2023 Positivus. All Rights Reserved.</span></div>
    </div>
  );
};

export default Footer;
