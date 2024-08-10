import { goldman, mulish } from "@/config/font";
import { Close, NorthEast } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/FinalLogo1.png";
import ContactModal from "./ContactModal";

const Sidebar = ({ openNav, setOpenNav, about }) => {
  const handleClick = () => {
    setOpenNav(!openNav);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <div
      className={`bg-transparent fixed top-0 h-screen w-full  backdrop-blur-sm transition-all ease-in-out duration-300 flex flex-row ${
        openNav ? "right-0 translate-x-0 z-50" : "translate-x-full z-0"
      }`}
    >
      <div
        className="hidden lg:block lg:w-[calc(100vw-352px)]"
        onClick={handleClick}
      />
      <div className="w-full h-full lg:w-96 bg-gradient-to-bl from-[#363537]/80 to-black/80 lg:absolute lg:right-0 lg:shadow-gray-900 shadow-2xl transition-all ease-in-out duration-300">
        <div className="sticky flex flex-row top-0 h-[3.5rem]  p-3 text-white">
          <div className="w-[1.7rem] h-[1.7rem] absolute right-4">
            <Close onClick={handleClick} />
          </div>
        </div>
        <div className="pt-5 flex justify-center items-center flex-col">
          <div className="flex flex-col justify-center items-center font-bold text-white/80">
            <div
              className={`w-full flex flex-col space-y-8 justify-left items-left p-5 rounded-md `}
            >
              <div className="flex flex-row">
                <Link
                  href="/"
                  className={
                    goldman.className + " lg:text-2xl flex justify-center"
                  }
                >
                  <Image
                    src={logo}
                    alt="circle"
                    width={782}
                    height={779}
                    className="w-24 aspect-square"
                  />
                </Link>
                <div
                  className={
                    mulish.className + " flex flex-col justify-center ml-4 "
                  }
                >
                  <span className="text-sm">A NexGen Services Initiative</span>
                  <span className="text-lg font-semibold">EB1 Next Level</span>
                  <span className="text-sm">Unlock your American Dream</span>
                </div>
              </div>
              <div
                className={
                  mulish.className +
                  " text-xl flex flex-col space-y-4 justify-center items-center"
                }
              >
                {about ? (
                  <Link href="/" className="p-2.5">
                    Home
                  </Link>
                ) : (
                  <>
                    <Link href="/about-us" className="p-2.5">
                      About Us
                    </Link>
                    <Link href="/#services" scroll={true} className="p-2.5">
                      Services
                    </Link>
                    <Link href="/#packages" scroll={true} className="p-2.5">
                      Packages
                    </Link>
                    <Link href="/#test" scroll={true} className="p-2.5">
                      Testimonials
                    </Link>
                    <Link href="/#faq" scroll={true} className="p-2.5">
                      FAQs
                    </Link>
                  </>
                )}
                <br />
                <button
                  onClick={handleOpen}
                  className={`shadow-black/80 shadow-lg border-2 px-3 py-1 rounded-full hover:translate-x-2 hover:-translate-y-1 transition-all duration-300`}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {open ? (
        <ContactModal open1={true} onClose={() => setOpen(false)} />
      ) : null}
    </div>
  );
};

export default Sidebar;
