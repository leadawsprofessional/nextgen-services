import { goldman, spaceGrotesk } from "@/config/font";
import React from "react";
import { FaLinkedin } from "react-icons/fa"; // Import LinkedIn icon
import Link from "next/link";

const Footer = ({ about }) => {
  return (
    <div className="bg-[#363537] rounded-t-[4rem] p-8 flex flex-col justify-center items-center">
      <div
        className="flex w-full justify-between items-center text-white relative"
        role="navigation"
      >
        <a href="/" className={goldman.className + " lg:text-2xl ml-3"}>
          NEXGEN SERVICES
        </a>

        {!about ? (
          // If Home Page
          <div
            className={spaceGrotesk.className + " pr-6 md:block hidden md:text-xl"}
          >
            <Link href="/about-us" className="p-3">
              About Us
            </Link>
            <Link href="/#services" className="p-3">
              Services
            </Link>
            <Link href="/#packages" className="p-3">
              Packages
            </Link>
            <Link href="/#faq" className="p-3">
              FAQs
            </Link>
          </div>
        ) : (
          // Any other page
          <div
            className={spaceGrotesk.className + " pr-6 md:block hidden md:text-xl"}
          >
            <Link href="/" className="p-3">
              Home
            </Link>
          </div>
        )}
      </div>

      <div className="grid lg:grid-cols-2 border-b-2 w-full pb-4 mt-4">
        <div className="flex flex-col py-4 space-y-2">
          <div className="bg-[#B9FF66] p-px rounded-lg w-36 px-5">Contact Us:</div>
          <div className="text-white">Email: info@targetgreencard.com</div>
          <a
            href="https://www.linkedin.com/company/eb1-next-level-a-nexgen-services-initiative/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white flex items-center space-x-2 pt-2"
          >
            <FaLinkedin size={28} />
            <span>LinkedIn</span>
          </a>
        </div>
        <div className="pt-4"></div>
      </div>

      <div className="pt-4 w-full text-center">
        <span className="text-white">© 2024 NEXGEN Services. All Rights Reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
