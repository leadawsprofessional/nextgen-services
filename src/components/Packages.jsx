import { mulish, spaceGrotesk } from "@/config/font";
import Image from "next/image";
import React, { useState } from "react";
import Icon from "@/assets/Icon.png";
import one from "@/assets/1.svg";
import two from "@/assets/2.svg";
import three from "@/assets/3.svg";
import Line from "@/assets/Line 3.png";
import { Check } from "@mui/icons-material";

const Packages = () => {
  const [box, setBox] = useState(0);
  const handleChange = (boxNo) => {
    console.log(boxNo);
    if (boxNo === null) {
      setBox(box);
    } else {
      setBox(boxNo);
    }
  };
  return (
    <div
      id="packages"
      className="flex flex-col justify-center items-center px-7 lg:px-36 lg:py-12"
      data-aos="fade-up"
    >
      <h1
        className={
          mulish.className + " text-5xl font-bold text-black uppercase"
        }
      >
        Packages
      </h1>
      <div className="flex flex-col gap-2 mt-12" data-aos="zoom-in">
        <div className="absolute h-full w-full bg-gradient-to-t blur-3xl from-transparent via-[#B9FF66]/30 to-transparent rounded-full z-20" />
        {/* <div className="lg:grid lg:grid-cols-3 gap-4 lg:pt-6  hidden z-40">
          {data.map((post) => (
            <>
              <div
                key={post.id}
                className="flex flex-col lg:flex-row bg-transparent items-center lg:w-80"
              >
                <div
                  className={`p-2.5 w-10 lg:w-16 aspect-square ${post.color} flex justify-center items-center rounded-full`}
                >
                  <Image
                    src={post.icon}
                    alt="Vector"
                    width={45}
                    height={48}
                    className="lg:w-10 aspect-square "
                  />
                </div>
                <Image
                  src={Line}
                  alt="Vector"
                  width={100}
                  height={100}
                  className="lg:w-full lg:ml-4 rotate-90 lg:rotate-0 hidden lg:block"
                />
              </div>
            </>
          ))}
        </div> */}
        <div className="flex flex-col justify-center items-center space-y-6 z-40">
          <div className=" gap-3 lg:gap-5">
            {data?.map((item) => (
              <button
                key={item.id}
                value={item.id}
                className={
                  mulish.className +
                  ` px-2 md:px-9 py-2 text-purple-4 text-sm md:text-xl font-bold hover:scale-105 rounded-full border-[#B9FF66] border-2 ${
                    box === item.id
                      ? "bg-[#B9FF66]"
                      : ""
                  }`
                }
                onClick={() => handleChange(item.id)}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-5 pt-6 lg:pt-12 z-40">
          {data[box]?.packages?.map((post) => (
            <>
              {/* <div
              key={post.id}
              className="flex flex-col lg:flex-row bg-white items-center lg:w-80 lg:hidden"
            >  <div
                className={`p-2.5 w-10 lg:w-16 aspect-square ${post.color} flex justify-center items-center rounded-full lg:hidden`}
              >
                <Image
                  src={post.icon}
                  alt="Vector"
                  width={45}
                  height={48}
                  className="lg:w-10 aspect-square "
                />
              </div>  <Image
                src={Line}
                alt="Vector"
                width={100}
                height={100}
                className="lg:w-full lg:ml-4 rotate-90 lg:rotate-0 hidden lg:block"
              /> </div> */}

              <div
                key={post.id}
                className={`flex flex-col shadow-xl shadow-black/50 items-left bg-gradient-to-br from-[#6a913a] via-[#8dc14e] to-[#abea5d] lg:w-80 gap-2.5 p-5 rounded-xl relative ${
                  post.id === 2 ? "lg:scale-110 lg:mx-5 " : ""
                }`}
              >
                {post?.sub ? (
                  <div className="absolute -top-3 -right-2 scale-105 bg-[#363537] text-white rounded-full py-1 px-3">
                    {post?.sub}
                  </div>
                ) : (
                  ""
                )}
                <h1
                  className={
                    " text-2xl font-medium lg:min-h-10 text-center text-white"
                  }
                >
                  {post.title}
                </h1>
                <div className="flex flex-col gap-2 list-disc">
                  {post.description.map((descr) => (
                    <div className="flex flex-row  gap-2 " key={descr.title}>
                      <Check className="text-white" />
                      <div className="">
                        <p className="text-white">{descr.title}</p>

                        {descr.desc !== null ? (
                          <>
                            {/* <br /> */}
                            <ol className=" list-disc list-inside pl-4 pt-2">
                              {descr.desc?.map((des) => (
                                <li key={des.title} className="text-white/90">
                                  {des.title}
                                </li>
                              ))}
                            </ol>
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <br/>
                <div className=" text-center  text-white">
                * Connect with us for more details
                  </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;

const data = [
  {
    id: 0,
    name: "Budgeted Packages",
    packages: [
      {
        id: 1,
        icon: one,
        color: "bg-[#77ad36]",
        title: "Basic",
        description: [
          { title: "Profile Review" },
          { title: "Weekly Touch base Connect" },
          {
            title: " Extended Help in Profile Improvement with",
            desc: [
              {
                title: " Scholarly Papers",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        icon: two,
        color: "bg-slate-900",
        title: "Advanced",
        sub: "Best Seller",
        description: [
          { title: "Profile Review" },
          { title: "Weekly Touch base Connect" },
          {
            title: " Extended Help in Profile Improvement with",
            desc: [
              { title: " Scholarly Papers" },
              { title: " Original Contributions" },
              { title: " Professional Website" },
              { title: " Membership" },
            ],
          },
        ],
      },
      {
        id: 3,
        icon: three,
        color: "bg-slate-900",
        title: "Ultimate",
        description: [
          { title: "Profile Review" },
          { title: "Weekly Touch base Connect" },
          {
            title: " Extended Help in Profile Improvement with",
            desc: [
              { title: " Scholarly Papers" },
              { title: " Original Contributions" },
              { title: " Judging" },
              { title: " Membership" },
              { title: " Press Articles" },
              { title: " Professional Website" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 1,
    name: "Premium Packages",
    packages: [
      {
        id: 1,
        title: "Premium Package",
        sub: "Can’t be customized",
        description: [
          { title: "Profile Review" },
          { title: "Weekly Touch base Connect" },
          {
            title: " Extended Help in Profile Improvement with",
            desc: [
              { title: " Scholarly Papers including Scopus and Elsevier" },
              { title: " Original Contributions" },
              { title: " Judging" },
              { title: " Membership" },
              { title: " Press Articles" },
            ],
          },
          { title: "Expert Connect" },
        ],
      },
    ],
  },
];
