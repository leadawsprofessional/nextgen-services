"use client";
import React from "react";
import { delay, motion } from "framer-motion";
import { goldman, mulish } from "@/config/font";
import Image from "next/image";
import Line1 from "@/assets/Line1.png";

const AboutHero = () => {
  let easeing = [0.6, -0.05, 0.01, 0.99];
  const bounceTransition = {
    type: "spring",
    stiffness: 37,
    damping: 22,
    mass: 7,
  };

  const scrollUp = {
    initial: {
      x: 0,
      y: 1000,
      opacity: 0,
      transition: bounceTransition,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        ...bounceTransition,
        delay: 0.5,
      },
    },
  };
  return (
    <motion.div className="h-screen bg-black flex flex-col justify-center items-center text-white lg:px-48 gap-5">
      <motion.div
        initial="initial"
        animate="animate"
        variants={scrollUp}
        className="flex flex-col justify-center items-center gap-5"
      >
        <h2 className={mulish.className + " text-2xl lg:text-6xl font-semibold"}>
          About Us
        </h2>
        <h1 href="/" className={goldman.className + " text-3xl lg:text-7xl ml-5"}>
          NEXGEN SERVICES
        </h1>
        <Image
          src={Line1}
          alt="Vector"
          width={100}
          height={50}
          className="animate-shake animate-infinite animate-duration-[4000ms] animate-ease-linear animate-normal"
        />
        <p className="p-5 lg:pt-5 text-center lg:text-lg lg:w-[800px]">
          Welcome to EB1 Next Level (Target Green Card), your premier ally in
          navigating and achieving permanent residency through the EB1-A
          (Extraordinary Ability) visa process. Specializing in critical areas
          like Judging, Authorship of Scholastic Articles, Original
          Contributions, Editorial Memberships, Press Coverage, and Awards,
          we&#39;re here to bolster your application with our tailored
          expertise.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default AboutHero;
