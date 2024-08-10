import { mulish } from "@/config/font";
import React from "react";

const AboutUs = () => {
  return (
    <div className="px-5 py-20 lg:px-32">
      <div className="">
        <h2
          className={
            mulish.className +
            " text-[#363537] text-3xl lg:text-6xl text-center font-semibold"
          }
        >
          We are <span className="text-[#b9ff66]">EB1 Next Level</span>
        </h2>
      </div>
      <br />
      <div className="lg:mt-5">
        <p className={mulish.className + " lg:text-xl text-center"}>
          Our committed team at <b>EB1 Next Level</b> is focused on sculpting a
          formidable case for your EB1-A application. With our expertise, we
          assist you in highlighting your achievements and contributions,
          ensuring you meet the stringent requirements for the EB1-A visa. From
          securing positions on editorial boards to boosting your recognition
          with significant awards and press coverage, we manage every facet
          essential for a robust application.<br/><br/> Trust <b>EB1 Next Level</b> to
          guide you through every step of the process, ensuring your journey to
          permanent residency is smooth and successful.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
