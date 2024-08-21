"use client";
import Companies from "@/components/Companies";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Features from "@/components/Features";
import Packages from "@/components/Packages";
import Slider from "@/components/Slider";
import FAQS from "@/components/FAQS";
import Footer from "@/components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import LoadingAnimation from "@/components/LoadingAnimation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormButton from "@/components/FormButton";
import Features1 from "@/components/Featurescopy";
import Why from "@/components/Why";

export default function Home() {
  const [openNav, setOpenNav] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    Aos.init({
      duration: 600,
      once: true,
      easing: "ease-in-sine",
    });

    // Simulate a loading process
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4150);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <>
          <SpeedInsights />
          <ToastContainer/>
          <Navbar openNav={openNav} setOpenNav={setOpenNav} about={false}/>
          <Hero />
          {/* <Companies /> */}
          <Why/>
          <Features />
          <Features1/> 
          <Packages />
          <Slider />
          
          <FAQS />
          <Footer about={false}/>
          <FormButton/>
          
          <Sidebar openNav={openNav} setOpenNav={setOpenNav} about={false}/>
        </>
      )}
    </>
  );
}
