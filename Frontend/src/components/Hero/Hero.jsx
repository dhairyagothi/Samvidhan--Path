import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import Blob from "../../assets/blob.svg";
import HeroPng from "../../assets/hero.png";
import Banner from "../Banner/Banner";
import Banner2 from "../Banner/Banner2";
import Services from "../Services/Services";
import Subscribe from "../Subscribe/Subscribe";
import { useNavigate } from "react-router-dom";

export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};


     
const Hero = () => {

  const navigate = useNavigate();


const ServiceClick = () => {
  navigate("/services");
}

  return (
    <>
      <section className="relative overflow-hidden text-black bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 dark:text-white">
        {/* Animated Background Gradient */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 opacity-20 dark:opacity-10"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />

        {/* Floating Elements */}
        <motion.div
          className="absolute w-24 h-24 bg-pink-400 rounded-full opacity-50 top-20 left-10 dark:opacity-30"
          animate={{
            y: [0, 20, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bg-yellow-400 rounded-full opacity-50 bottom-16 right-12 w-36 h-36 dark:opacity-30"
          animate={{
            x: [0, 20, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative z-10">
          {/* Brand Info */}
          <div className="relative flex flex-col justify-center py-14 md:py-0">
            <div className="text-center md:text-left space-y-10 lg:max-w-[400px]">
              <motion.h1
                variants={FadeUp(0.6)}
                initial="initial"
                animate="animate"
                className="text-3xl lg:text-5xl font-bold !leading-snug"
              >
                Let's Learn{" "}
                <span className="text-secondary">Constitution</span> in an
                easier manner
              </motion.h1>
              <motion.div
                variants={FadeUp(0.8)}
                initial="initial"
                animate="animate"
                className="flex justify-center md:justify-start"
              >
                <button className="flex items-center gap-2 primary-btn group" onClick={ServiceClick} >
                  Get Started
                  <IoIosArrowRoundForward className="text-xl duration-300 group-hover:translate-x-2 group-hover:-rotate-45" />
                </button>
              </motion.div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex items-center justify-center">
            <motion.img
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
              src={HeroPng}
              alt="Hero Illustration"
              className="w-[400px] xl:w-[600px] relative z-10 drop-shadow-2xl"
            />
            <motion.img
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
              src={Blob}
              alt="Background Blob"
              className="absolute -bottom-32 w-[800px] md:w-[1500px] z-[1] hidden md:block"
            />
          </div>
        </div>
      </section>
      <Services />
      <Banner />
      <Subscribe />
      <Banner2 />
    </>
  );
};

export default Hero;
