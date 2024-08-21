import {
  ArrowUpwardTwoTone,
  Close,
  ContactSupportTwoTone,
  QuestionAnswerTwoTone,
} from "@mui/icons-material";
import { Menu } from "@mui/material";
import React, { useEffect, useState } from "react";
import ContactModal from "./ContactModal";

const FormButton = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleOpen = () => setOpen(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 300); // 5000 milliseconds = 5 seconds

    // Cleanup the interval on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className={`fixed rounded-full w-16 h-16 bottom-8 flex justify-center items-center right-4 shadow-inner shadow-black z-10 cursor-pointer bg-[#77ad36] hover:animate-shake transition-transform duration-300`}
      >
        <button className="" onClick={handleOpen}>
          <QuestionAnswerTwoTone
            style={{
              zIndex: 70,
              width: "35px",
              height: "35px",
              color: "whitesmoke",
            }}
          />
        </button>
      </div>
      {visible && (
        <div
          className={`fixed rounded-2xl text-base w-80 px-4 py-5 bottom-28 right-6 shadow-inner shadow-black text-white bg-[#363537] lg:flex hidden`}
          data-aos="zoom-up"
        >
          <button
            className="absolute right-2 -top-7 text-[#363537]"
            onClick={() => setVisible(false)}
          >
            <Close />
          </button>
          <div className="text-center">
            <span className="text-justify">Need help on your permanent Residency!</span>
            <span className="text-lg"> We are one click away.</span>
            <span className="block mt-2 text-right">- Team EB1 Next Level</span>
          </div>
          <div className="absolute -bottom-2 right-4 rotate-45 w-5 aspect-square bg-[#363537] ease-in-out" />
        </div>
      )}

      {open ? (
        <ContactModal open1={true} onClose={() => setOpen(false)} />
      ) : null}
    </>
  );
};

export default FormButton;