"use client";
import { Mail } from "@mui/icons-material";
import axios from "axios";
import React, { useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";

const Form = (props) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    query: "",
  });
  const [loading, setLoading] = useState(false);
  const [captcha, setCaptcha] = useState();
  const recaptchaRef = React.useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setValues({ ...values, name: "", email: "", phone: "", query: "" });
    // const token = await recaptchaRef.current.executeAsync();
    // setCaptcha(token);
    try {
      // if (token) {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api",
        {
          name: values.name,
          email: values.email,
          phone: values.phone,
          message:
            "https://calendly.com/buildeb1profile-ulry/initial-meet",
          query: values.query,
        },
        config
      );

      if (data.success) {
        // gtag('event', 'conversion', {'send_to': 'AW-10861096848/Og-TCLn93KgDEJDf_Loo'});
        toast.info(
          "Your query has been submitted successfully, our team will reach out to you shortly.",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          }
        );
      } else {
        toast.error(data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
      // } else {
      //   toast.error("ReCaptcha Required", {
      //     position: "top-right",
      //     autoClose: 5000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     theme: "dark",
      //   });
      // }
    } catch (error) {
      // console.log(error);
      toast.error("Please fill up the form & try again", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    setLoading(false);
  };

  return (
    <div className="  md:pb-[1.7rem] backdrop-blur-[2px] relative overflow-hidden rounded-lg shadow-xl shadow-black bg-white/70">
      <h1 className="text-2xl py-1 text-center font-semibold pb-2.5 text-[#a8f34d] bg-[#363537]">Drop us a Query</h1>
      <div className="contact-details text-[#363537] md:px-[4rem] my-5 w-full border-l-2 border-[#77ad36 flex items-center">
        {/* <img src="/phone-icon.png" alt="phone" /> */}
        <Mail fontSize="large" color="#363537"/>
        <div className="ml-2.5 space-y-1 text-[#363537]">
        <p className=" text-xl">info@targetgreencard.com</p>
        <p className="">Available 24x7 for your queries</p></div>
      </div>
      <form className="flex flex-col justify-center md:px-[4rem] " onSubmit={handleSubmit}>
        <textarea
          type="text"
          value={values.query}
          placeholder="Enter Your Query Here* ..."
          className="border-2 border-[#77ad36] py-1 px-2 my-1 rounded-xl bg-white/50 focus:bg-blue/20 focus:outline-none text-slate-950"
          onChange={(e) => setValues({ ...values, query: e.target.value })}
          required
        />
        <label htmlFor="email" className="font-medium">
          Name*
        </label>
        <input
          type="text"
          value={values.name}
          placeholder="Name"
          className="border-2 border-[#77ad36] py-1 px-2 my-1 rounded-xl bg-white/50 focus:bg-blue/20 focus:outline-none text-slate-950"
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          required
        />
        <label htmlFor="email" className="font-medium">
          Email Id*
        </label>
        <input
          type="email"
          placeholder="Email"
          value={values.email}
          className="border-2 border-[#77ad36] py-1 px-2 my-1 rounded-xl bg-white/50 focus:bg-blue/20 focus:outline-none text-slate-950"
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          required
        />
        <label htmlFor="email" className="font-medium">
          Phone No.*
        </label>
        <input
          type="text"
          value={values.phone}
          placeholder="Phone No."
          className="border-2 border-[#77ad36] py-1 px-2 my-1 rounded-xl bg-white/50 focus:bg-blue/20 focus:outline-none text-slate-950"
          onChange={(e) => setValues({ ...values, phone: e.target.value })}
          required
        />

        {/* <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          className="absolute right-0"
          // onChange={setCaptcha}
        /> */}
        {loading ? (
          <button
            disabled
            className="bg-[#363537] rounded-xl shadow-xl py-2 mt-5 cursor-not-allowed flex justify-center items-center  border-2 border-[#363537]"
          >
            <div className="w-8 h-8 animate-spin rounded-full border-t-2 border-b-2 border-white" />
          </button>
        ) : (
          <button
            type="submit"
            className="bg-[#363537] text-[#a8f34d] hover:text-[#363537] hover:bg-[#a8f34d] transition-colors duration-300 rounded-xl shadow-xl  font-semibold text-xl py-2 mt-5 border-2 border-[#363537] "
          >
            Submit Query
          </button>
        )}
      </form>
    </div>
  );
};

export default Form;
