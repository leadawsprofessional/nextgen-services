"use client";
import { goldman, mulish } from "@/config/font";
import React, { useEffect, useState } from "react";
import { Menu, NorthEast } from "@mui/icons-material";
import ContactModal from "./ContactModal";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/FinalLogo1.png";

const Navbar = ({ openNav, setOpenNav, about }) => {
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [isHovering1, setIsHovering1] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const threshold = 100; // Adjust this value based on when you want the color change to occur

      if (scrolled > threshold) {
        setIsNavbarTransparent(true);
      } else {
        setIsNavbarTransparent(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial state based on scroll position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="fixed w-full z-50 ">
        <nav
          className={`flex justify-between items-center h-20 relative shadow-sm py-5 ${
            isNavbarTransparent
              ? "hidden bg-[#363537] shadow-xl shadow-black/70 backdrop-blur-lg text-white "
              : about
              ? "bg-transparent text-white"
              : "bg-white text-black"
          } transition-all duration-300`}
          role="navigation"
        >
          <div className="flex flex-row justify-center items-center gap-2">
            <Link href="/" className={goldman.className + " lg:text-2xl ml-5"}>
              <Image
                src={logo}
                alt="circle"
                width={782}
                height={779}
                className="w-16 aspect-square"
              />
            </Link>
            <div
              className={
                mulish.className + " flex flex-col justify-center "
              }
            >
              <span className="text-sm">A NexGen Services Initiative</span>
              <span className="text-lg font-semibold">EB1 Next Level</span>
              <span className="text-sm">Unlock your American Dream</span>
            </div>
          </div>
          <div
            className="p-3 cursor-pointer md:hidden right-6 top-4 absolute bg-gray-300 rounded-full"
            onClick={() => setOpenNav(!openNav)}
          >
            <Menu />
          </div>
          <div
            className={
              mulish.className + " pr-8 md:block hidden md:text-xl"
            }
          >
            {about ? (
              <Link href="/" className="p-4">
                Home
              </Link>
            ) : (
              <>
                <Link href="/about-us" className="p-4">
                  About Us
                </Link>
                <Link href="/#services" scroll={true} className="p-4">
                  Services
                </Link>
                <Link href="/#packages" scroll={true} className="p-4">
                  Packages
                </Link>
                <Link href="/#test" scroll={true} className="p-4">
                  Testimonials
                </Link>
                <Link href="/#faq" scroll={true} className="p-4">
                  FAQs
                </Link>
              </>
            )}

            <button
              onClick={handleOpen}
              className={`${
                isNavbarTransparent
                  ? "border-white bg-white text-black"
                  : about
                  ? "border-white hover:border-[#77ad36]"
                  : " hover:border-[#77ad36] border-black bg-black text-white"
              } shadow-black/80 shadow-lg ml-4 border-2 px-3 py-1 rounded-full hover:bg-[#77ad36] hover:translate-x-2 hover:-translate-y-1 transition-all duration-300`}
            >
              Get Started
            </button>
          </div>
        </nav>
      </div>
      {isNavbarTransparent && (
        <div className="fixed w-full z-50 border-b-[1px]" data-aos="fade-left">
          <div
            className="p-3 cursor-pointer right-6 top-4 lg:right-8  absolute bg-gray-300 rounded-full shadow-lg shadow-black/70"
            onClick={() => setOpenNav(!openNav)}
          >
            <Menu />
          </div>
        </div>
      )}
      {open ? (
        <ContactModal open1={true} onClose={() => setOpen(false)} />
      ) : null}
    </>
  );
};

export default Navbar;
