import { syne } from "@/config/font";
import Image from "next/image";
import React from "react";
import Vector from "@/assets/Vector.png";
import Line from "@/assets/Line.png";
import airbnb from "@/assets/Airbnb.png";
import etsy from "@/assets/Etsy.png";
import nasa from "@/assets/Nasa.png";
import uber from "@/assets/Uber.png";
import nyt from "@/assets/NYT.png";


const Companies = () => {
  return (
    <div className="relative bg-[#B9FF66] flex flex-col justify-center items-center py-16">
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className={`relative block w-full h-[127px]`}
        >
          <path d="M1100 110L0 1 0 0 1200 0 1200 120z" fill="#FFFFFF"></path>
        </svg>
      </div>
      <div className="relative flex flex-col justify-center items-center mt-20 gap-1"  data-aos="fade-up">
        <Image src={Vector} alt="Vector" width={50} height={50} className=" absolute -top-6 left-12 lg:-left-7 animate-wiggle animate-infinite animate-duration-[1500ms] animate-ease-linear animate-normal"/>
        <Image src={Line} alt="Vector" width={100} height={50} className=" absolute -bottom-3 lg:right-0  animate-shake animate-infinite animate-duration-[4000ms] animate-ease-linear animate-normal"/>
        <h1 className={syne.className+" text-center font-bold text-3xl"}>TRUSTED BY COMPANIES</h1>
        <h1 className={syne.className+" text-center font-extrabold text-3xl"}>ALL OVER THE WORLD</h1>
      </div>
      <div className="relative"  data-aos="fade-up">
        <div className="flex justify-center items-center gap-10 mt-20 flex-wrap">
          <Image src={airbnb} alt="Vector" width={74} height={74} className=""/>
          <Image src={etsy} alt="Vector" width={74} height={74} className=""/>
          <Image src={nasa} alt="Vector" width={74} height={74} className=""/>
          <Image src={uber} alt="Vector" width={74} height={74} className=""/>
          <Image src={nyt} alt="Vector" width={74} height={74} className=""/>
        </div>
      </div>
    </div>
  );
};

export default Companies;
