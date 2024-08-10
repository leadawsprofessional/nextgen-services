import { mulish } from "@/config/font";
import React from "react";

const Touch = () => {
  return (
    <div className="py-20 bg-black px-5 lg:px-20">
      <div className="">
        <p className={mulish.className + " text-[#B9FF66] text-2xl text-center"}>
          Get in Touch :
        </p>
      </div>
      <br/>
      <div className="">
        <p className={mulish.className + " text-white lg:text-xl text-center"}>
          Elevate your career and secure your U.S. green card with EB1 Next
          Level. Contact us today for a personalized consultation and learn how
          we can assist you in achieving your American Dream.
        </p>
      </div>
    </div>
  );
};

export default Touch;
