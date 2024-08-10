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
        // data-aos="fade-left"
        className="fixed w-16 rounded-full aspect-square bottom-16 flex justify-center items-center right-12 shadow-inner shadow-black z-10 cursor-pointer bg-[#77ad36] hover:animate-shake transition-transform duration-300"
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
        <>
          <div
            className="hidden h-24 rounded-2xl text-sm w-64 px-2 py-5 fixed lg:flex flex-col justify-center items-center bottom-40 right-7 text-white bg-[#363537] "
            data-aos="zoom-up"
          >
            <button className="fixed right-0 -top-7 text-[#363537]" onClick={()=>setVisible(false)}>
              <Close />
            </button>
            <span className="text-center">
              Need help on your permanent Residency! We are one click away.
            </span>{" "}
            <span className=" w-full text-right"> - Team EB1 Next Level</span>
            <div className="fixed -bottom-2.5 right-9 rotate-45 w-5 aspect-square bg-[#363537] ease-in-out" />
          </div>
        </>
      )}

      {open ? (
        <ContactModal open1={true} onClose={() => setOpen(false)} />
      ) : null}
    </>
  );
};

export default FormButton;
