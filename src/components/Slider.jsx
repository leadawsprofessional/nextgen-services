"use client";
import { mulish } from "@/config/font";
import React, { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";

const data = [
  {
    id: 1,
    title: "Shanmugam K",
    name: "EB1 Next Level is an exceptional resource for individuals pursuing the EB1-A visa, offering a comprehensive and streamlined approach to the complex application process. The team provides in-depth guidance, clear explanations, and practical tips that demystify the criteria and requirements of the EB1-A category.",
  },

  {
    id: 2,
    title: "Amol P",
    name: "This is an outstanding company specializing in assisting clients with the EB1-A visa process. With their comprehensive knowledge and strategic approach, they helped me secure my green card within a year. The team's dedication, responsiveness, and attention to detail were instrumental in my success. I highly recommend EB1 Next Level for anyone pursuing an EB1-A visa—they truly elevate the immigration experience to the next level.",
  },

  {
    id: 3,
    title: "Sonali",
    name: "Highly recommended for anyone seeking a successful EB1-A visa application. EB1 Next Level played a crucial role in helping me build a strong profile for my EB1-A application with their outstanding services. Their team's dedication, attention to detail, and personalized approach made a significant difference. A big thank you to the entire EB1 Next Level team for their tremendous efforts and unwavering support. Now I am green card holder and happily leading a dream life on this wonderful country.",
  },

  {
    id: 4,
    title: "Jaivelu",
    name: "My journey with EB1 Next Level has been wonderful. Thanks to their excellent team of quality professionals, I achieved my goal and obtained permanent residency in the USA. They are always ready to go the extra mile to ensure satisfaction, providing professional and comprehensive support throughout the process. I highly recommend EB1 Next Level for anyone seeking assistance with their EB1-A visa application. ",
  },

  {
    id: 5,
    title: "Manjunath J",
    name: "EB1 Next Level is a one-stop platform for fulfilling all your EB1-A visa requirements. Their simple approach, transparent process, and highly efficient team make the entire green card journey easy and successful.",
  },

  {
    id: 6,
    title: "Venkat",
    name: "I got my permanent residence application approved and finally I don’t have to worry about H1B renewals. A big thank you to EB1 Next Level team. This team's dedication, attention to detail, and exceptional service made a significant difference.",
  },
  {
    id: 7,
    title: "Keerthy G",
    name: "I couldn't even think of having green card without the help of this team. EB1 Next Level knows the ins and outs of the entire EB1-A process and they are highly efficient. To all the viewers: Put your trust on this team and you won't regret your decision.",
  },

  {
    id: 8,
    title: "Bhupinder",
    name: "EB1 Next Level stands out for two key reasons: quality and affordable services, and timely completion. By taking one step and placing your faith in them, you'll find they won't let you down. I was truly impressed with how they handled all my demands, ensuring a smooth and successful process. My entire family and I are immensely grateful to this team for fulfilling our dream of obtaining a green card.",
  },
  {
    id: 9,
    title: "Sofia",
    name: "I was really fed up and stressed out for years with my H1B renewals. Then, a friend recommended and I am incredibly grateful for the brilliant effort they put into securing my permanent residency. Their expertise and dedication transformed a stressful situation into a successful outcome. Thank you, EB1 Next Level, for making my dream a reality.",
  },

];

const Slider = () => {
  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);
  const gap = 20;

  useEffect(() => {
    setWidth(carouselRef.current.offsetWidth);
  }, []);

  const handleNext = () => {
    carouselRef.current.scrollBy(width + gap, 0);
    console.log(carouselRef.current.scrollWidth);
  };

  const handlePrev = () => {
    carouselRef.current.scrollBy(-width, 0);
  };
  return (
    <div className="py-24 flex flex-col justify-center items-center"  data-aos="fade-up" id="test">
      <h1 className={mulish.className + " text-4xl lg:text-5xl font-bold"}>
        TESTIMONIALS
      </h1>
      <div
        className={`w-full max-w-[calc((100vw - 0px))] relative pt-6 flex justify-center items-center`}
      >
        {/* <button
          className="flex justify-center items-center bg-gray-900 border-2 border-gray-800 p-[1.5px] rounded-full cursor-pointer absolute right-16 top-8 hover:scale-125 hover:transition-transform duration-300"
          onClick={handlePrev}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0V0z" />
            <path
              fill="#B9FF66"
              d="M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z"
            />
          </svg>
        </button>
        <button
          className="flex justify-center items-center bg-gray-900 border-2 border-gray-800 p-[1.5px] rounded-full cursor-pointer absolute right-5 top-8 hover:scale-125 hover:transition-transform duration-300 "
          onClick={handleNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0V0z" />
            <path
              fill="#B9FF66"
              d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z"
            />
          </svg>
        </button> */}
        <div
          className={`overflow-auto scroll-smooth lg:overflow-hidden`}
          ref={carouselRef}
        >
          {/* <div className="grid gap-5 grid-flow-col"> */}
          <Marquee
              gradient={true}
              // gradientColor="white"
              speed={70}
              pauseOnHover={true}
              pauseOnClick={true}
              delay={0}
              play={true}
              direction="left"
            >
            {data.map((item) => (
              <div className="flex mx-3 md:m-7 hover:scale-105 transition-transform duration-300 ease-in-out" key={item.id}>
                <div className="bg-gradient-to-tr from-gray-800 via-transparent to-gray-800 w-80 lg:w-[31.5rem] lg:aspect-video rounded-xl shadow-lg p-px flex justify-center items-center shadow-black/60">
                  <div className="rounded-[calc(0.75rem-1px)] w-[calc(100%-2px)] h-[calc(100%-2px)] bg-white p-5">
                    <span className="text-[#98d151] text-xl font-bold">{item.title}</span>
                    <br/>
                    <p className="font-semibold">{item.name}</p>
                  </div>
                </div>
              </div>
            ))}
            </Marquee>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Slider;
