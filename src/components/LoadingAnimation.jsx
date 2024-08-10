"use client";
import React, { useEffect, useState } from "react";
import circle from "@/assets/Group 1.png";
import side from "@/assets/side.png";
import side1 from "@/assets/side1.png";
import logo from "@/assets/FinalLogo1.png";
import { delay, motion } from "framer-motion";
import Image from "next/image";
import { goldman, montserrat, mulish } from "@/config/font";

const LoadingAnimation = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  let easeing = [0.6, -0.05, 0.01, 0.99];
  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };
  const circleRight = {
    initial: {
      x: 10,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: easeing,
      },
    },
    animate: {
      x: screenWidth,
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: 0,
        ease: easeing,
      },
    },
  };
  const imageVariants = {
    initial: {
      x: -2,
      y: 200,
      width: "200px", // Start with the image larger
      height: "250px",
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: easeing,
      },
    },
    animate: {
      x: 0,
      y: 0,
      width: "50px", // Start with the image larger
      height: "50px",
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: 0.2,
        ease: easeing,
      },
    },
  };
  const imageVariantsPc = {
    initial: {
      x: 0,
      y: 0,
      width: "450px", // Start with the image larger
      height: "450px",
      opacity: 1,
      rotate: -180,
      transition: {
        duration: 0.7,
        ease: easeing,
      },
    },
    animate: {
      x: 0,
      y: 0,
      width: "120px", // Start with the image larger
      height: "120px",
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.7,
        delay: 0.1,
        ease: easeing,
      },
    },
  };
  const textRight = {
    initial: {
      x: -400,
      opacity: 1,
      rotate: -90,
      transition: {
        duration: 0.7,
        delay: 1,
        ease: easeing,
      },
    },
    animate: {
      x: -100,
      opacity: 1,
      rotate: -90,
      transition: {
        duration: 0.5,
        delay: 1,
        ease: easeing,
      },
    },
  };
  const rotateRight = {
    initial: {
      y: 0,
      opacity: 1,
      // rotate: -90,
      transition: {
        duration: 1,
        delay: 1.8,
        ease: easeing,
      },
    },
    animate: {
      y: 100,
      opacity: 1,
      rotate: 90,
      scale: 1,
      transition: {
        duration: 1,
        delay: 1.8,
        ease: easeing,
      },
    },
  };
  const textRightPc = {
    initial: {
      y: -500,
      x: -700,
      opacity: 0,
      rotate: -90,
      transition: {
        duration: 0.8,
        ease: easeing,
      },
    },
    animate: {
      x: 0,
      y: -10,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        delay: 0.7,
        ease: easeing,
      },
    },
  };

  const scrollLeft = {
    initial: {
      x: 750,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: easeing,
      },
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
        delay: 1.1,
        ease: easeing,
      },
    },
  };
  const scrollRight = {
    initial: {
      x: -1150,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: easeing,
      },
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
        delay: 1.1,
        ease: easeing,
      },
    },
  };
  const scrollUp = {
    initial: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: easeing,
      },
    },
    animate: {
      x: 25,
      y: -250,
      opacity: 1,
      transition: {
        duration: 2,
        delay: 1.1,
        ease: easeing,
      },
    },
  };

  useEffect(() => {
    // Calculate screen width on initial render and when the window is resized
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth - 75);
    };

    updateScreenWidth(); // Set initial screen width
    window.addEventListener("resize", updateScreenWidth);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);
  return (
    <motion.div className="h-screen">
      {/* For Mobile */}
      <div className="bg-[#B9FF66]/20 relative w-full h-full lg:hidden p-5 flex justify-center items-center overflow-hidden">
        <motion.div
          initial="initial"
          animate="animate"
          variants={circleRight}
          className="absolute w-12 aspect-square left-3 top-6"
        >
          <Image src={circle} alt="circle" width={59} height={59} />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={imageVariants}
          className="absolute top-6 left-6"
        >
          <Image src={logo} alt="circle" width={185} height={282} />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={textRight}
          className="w-full"
        >
          <motion.div
            initial="initial"
            animate="animate"
            variants={rotateRight}
            className=""
          >
            <motion.h1
              className={
                montserrat.className +
                " text-xl font-semibold text-center text-[#1E1E1E]"
              }
            >
              A NexGen Services Initiative
            </motion.h1>
            <motion.h1
              className={
                montserrat.className +
                " text-6xl uppercase text-center font-extrabold text-[#1E1E1E]"
              }
            >
              EB1 Next Level
            </motion.h1>
            <motion.h1
              className={
                montserrat.className +
                " text-xl font-semibold text-center text-[#1E1E1E]"
              }
            >
              Unlock your American Dream
            </motion.h1>
          </motion.div>
        </motion.div>
      </div>
      {/* For Desktop */}
      <div className="hidden relative w-full h-full p-5 lg:flex flex-row justify-left items-center bg-[#B9FF66]/25 overflow-hidden">
        <motion.div
          initial="initial"
          animate="animate"
          variants={circleRight}
          className="absolute w-12 aspect-square left-3 top-6"
        >
          <Image src={circle} alt="circle" width={59} height={59} />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={scrollUp}
          className="top-6 left-6"
        >
          <motion.div
            initial="initial"
            animate="animate"
            variants={imageVariantsPc}
            className="top-10 left-6"
          >
            <Image
              src={logo}
              alt="circle"
              width={782}
              height={779}
              className="w-full h-full"
            />
          </motion.div>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={textRightPc}
          className="ml-12"
        >
          {/* <motion.div
            initial="initial"
            animate="animate"
            variants={rotateRight}
            className=""
          > */}
          <motion.h1
            initial="initial"
            animate="animate"
            variants={scrollLeft}
            className={
              montserrat.className +
              " text-xl font-semibold text-left text-[#1E1E1E]"
            }
          >
            A NexGen Services Initiative
          </motion.h1>
          <motion.h1
            className={
              montserrat.className +
              " text-8xl uppercase text-center font-extrabold text-[#1E1E1E]"
            }
          >
            EB1 Next Level{" "}
          </motion.h1>
          <motion.h1
            initial="initial"
            animate="animate"
            variants={scrollRight}
            className={
              montserrat.className +
              " text-xl font-semibold text-right text-[#1E1E1E]"
            }
          >
            Unlock your American Dream
          </motion.h1>
          {/* </motion.div> */}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingAnimation;
