import React from "react";
import { Box, Modal, Typography } from "@mui/material";
import Image from "next/image";
import Form from "./Form";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
};

const ServicesModal = (props) => {
  return (
    <Modal
      open={props.open1}
      onClose={props.onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} className="w-[90%] md:w-[55%] ">
        <button
          className="absolute -top-10 right-0 mb-5 z-10"
          onClick={props.onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <g clip-path="url(#clip0_1_2969)">
              <path
                d="M13.9999 2.33331C7.54825 2.33331 2.33325 7.54831 2.33325 14C2.33325 20.4516 7.54825 25.6666 13.9999 25.6666C20.4516 25.6666 25.6666 20.4516 25.6666 14C25.6666 7.54831 20.4516 2.33331 13.9999 2.33331ZM19.8333 18.1883L18.1883 19.8333L13.9999 15.645L9.81159 19.8333L8.16659 18.1883L12.3549 14L8.16659 9.81164L9.81159 8.16665L13.9999 12.355L18.1883 8.16665L19.8333 9.81164L15.6449 14L19.8333 18.1883Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_2969">
                <rect width="28" height="28" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <div className="p-5 flex justify-center items-center font-semibold lg:text-2xl">{props.head}</div>
        <div className="relative max-h-[70vh] px-10 pb-10 overflow-y-scroll" dangerouslySetInnerHTML={{ __html: props.text}}></div>
      </Box>
    </Modal>
  );
};

export default ServicesModal;
