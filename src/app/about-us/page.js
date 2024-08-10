"use client"
import AboutHero from "@/components/AboutHero";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import FormButton from "@/components/FormButton";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Team from "@/components/Team";
import Touch from "@/components/Touch";
import WhyUs from "@/components/WhyUs";
import { SpeedInsights } from "@vercel/speed-insights/next";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <>
      <SpeedInsights />
      <ToastContainer />
      <Navbar openNav={openNav} setOpenNav={setOpenNav} about={true} />
      <AboutHero />
      <AboutUs />
      <Touch />
      <WhyUs />
      {/* <Team /> */}
      <Footer />
      <FormButton />
      <Sidebar openNav={openNav} setOpenNav={setOpenNav} about={true}/>
    </>
  );
};

export default Page;
