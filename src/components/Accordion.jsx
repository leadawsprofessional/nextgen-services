import Image from "next/image";
import React, { useEffect, useRef } from "react";

const Accordion = ({ question, answer, turn, setTurn, idx, faq }) => {
  const contentRef = useRef(null);
  const zeroBasedIdx = idx - 1; // Convert id to zero-based index

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = turn[zeroBasedIdx]
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
  }, [contentRef, turn, zeroBasedIdx]);

  const toggleAccordion = () => {
    let newTurn = turn.map((item, index) =>
      index === zeroBasedIdx ? !item : false
    );
    setTurn(newTurn);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full px-2 text-lg pt-4 lg:text-base">
      <button
        onClick={toggleAccordion}
        className={` ${
          faq ? "bg-gray-00" : "bg-transparent"
        } px-5 shadow-lg shadow-black/30 cursor-pointer w-full h-full border-l-4 border-[#B9FF66] ${
          turn[idx]
        }`}
      >
        <div className="py-3">
          <div className="flex items-center justify-between h-14 text-left">
            <span className="ml-2 font-semibold text-sm md:text-lg">
              {question}
            </span>
            <div
              className={
                "relative transition-all ease-in-out duration-200 bg-blue"
              }
            >
              <button className="flex justify-center items-center bg-gray-900 border-2 border-gray-800 p-[1.5px] rounded-full cursor-pointer hover:scale-125 hover:transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className={
                    "transition-all ease-in-out duration-200 " +
                    (turn[idx] ? "rotate-90" : "-rotate-90")
                  }
                >
                  <path fill="none" d="M0 0h24v24H0V0z" />
                  <path
                    fill="#B9FF66"
                    d="M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z"
                  />
                </svg>
              </button>
            </div>
            {/* <div>
              {turn[idx] ? (
                <Image src="/minus.svg" alt="" width={20} height={20} />
              ) : (
                <Image src="/plus.svg" alt="" width={20} height={20} />
              )}
            </div> */}
          </div>
          <div
            ref={contentRef}
            className="mx-4 overflow-hidden text-left transition-all duration-500 h-full"
          >
            <p className="py-1 font-normal leading-normal text-justify whitespace-pre-line text-xs lg:text-lg">
              {answer}
            </p>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Accordion;
