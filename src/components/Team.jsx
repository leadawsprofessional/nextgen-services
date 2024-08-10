import { mulish } from "@/config/font";
import Image from "next/image";
import React from "react";
import Photo from "@/assets/Photo.jpg";

const Team = () => {
  return (
    <div className="py-20 bg-black flex flex-col justify-center items-center mb-24 overflow-hidden">
      <h1
        className={mulish.className + " text-[#B2EC6D] text-6xl font-semibold"}
      >
        Our Team
      </h1>
      <p className="w-96 text-sm text-white text-center pt-1">
        Building an enterprise level site doesn&#39;t need nightmare or cost
        your thousands. Felix is purpose built for{" "}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 pt-10 gap-8">
        <div className="w-72 relative">
          <div className="z-40 w-full relative flex flex-col">
            <Image
              src={Photo}
              alt="Profile"
              width={322}
              height={374}
              className="z-40 rounded-2xl"
            />
            <h2 className="text-center text-white text-xl mt-3">Amir Khan</h2>
            <h3 className="text-center text-white text-sm">Co-Founder</h3>
          </div>
          <div className="absolute bg-[#1B16FF] w-72 h-60 -rotate-[33deg] blur-xl -left-10 z-10 opacity-25 bottom-0" />
          <div className="absolute bg-[#DB14F1] w-72 h-64 -rotate-[58deg] blur-xl rounded-full -right-10 z-10 opacity-25 bottom-0" />
        </div>
        <div className="w-72 relative">
          <div className="z-40 w-full relative flex flex-col">
            <Image
              src={Photo}
              alt="Profile"
              width={322}
              height={374}
              className="z-40 rounded-2xl"
            />
            <h2 className="text-center text-white text-xl mt-3">Amir Khan</h2>
            <h3 className="text-center text-white text-sm">Co-Founder</h3>
          </div>
          <div className="absolute bg-[#1B16FF] w-60 h-60 -rotate-[33deg] blur-xl -left-10 z-10 opacity-25 bottom-0" />
          <div className="absolute bg-[#DB14F1] w-72 h-64 -rotate-[58deg] blur-xl rounded-full -right-10 z-10 opacity-25 bottom-0" />
        </div>
        <div className="w-72 relative">
          <div className="z-40 w-full relative flex flex-col">
            <Image
              src={Photo}
              alt="Profile"
              width={322}
              height={374}
              className="z-40 rounded-2xl"
            />
            <h2 className="text-center text-white text-xl mt-3">Amir Khan</h2>
            <h3 className="text-center text-white text-sm">Co-Founder</h3>
          </div>
          <div className="absolute bg-[#1B16FF] w-60 h-60 -rotate-[33deg] blur-xl -left-10 z-10 opacity-25 bottom-0" />
          <div className="absolute bg-[#DB14F1] w-72 h-64 -rotate-[58deg] blur-xl rounded-full -right-10 z-10 opacity-25 bottom-0" />
        </div>
        
      </div>
    </div>
  );
};

export default Team;
