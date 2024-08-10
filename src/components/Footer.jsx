import { goldman, spaceGrotesk } from "@/config/font";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#363537] rounded-t-[4rem] p-8 flex flex-col justify-center items-center">
      <div
        className="flex w-full justify-between items-center text-white relative"
        role="navigation"
      >
        <a href="/" className={goldman.className + " lg:text-2xl ml-3"}>
          NEXGEN SERVICES
        </a>
        <div className={spaceGrotesk.className + " pr-6 md:block hidden md:text-xl"}>
          <a href="/about-us" className="p-3">
            About Us
          </a>
          <a href="/#services" className="p-3">
            Services
          </a>
          <a href="/#packages" className="p-3">
            Packages
          </a>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 border-b-2 w-full pb-4 mt-4">
        <div className="flex flex-col py-4 space-y-2">
          <div className="bg-[#B9FF66] p-px rounded-lg w-36 px-5">
            Contact Us:
          </div>
          <div className="text-white">Email: info@targetgreencard.com</div>
        </div>
        <div className="pt-4"></div>
      </div>

      <div className="pt-4 w-full text-center">
        <span className="text-white">© 2023 Positivus. All Rights Reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
