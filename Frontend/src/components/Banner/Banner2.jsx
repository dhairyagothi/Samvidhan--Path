import React from "react";
import BannerPng from "../../assets/banner.png";
import { motion } from "framer-motion";

const Banner2 = () => {
  // Framer Motion Variants for Animations
  const textAnimation = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const imageAnimation = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
    hover: { scale: 1.05, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const buttonAnimation = {
    hover: {
      scale: 1.1,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section>
      <div className="container grid grid-cols-1 gap-8 m-0 space-y-6 place-items-center py-14 md:m-10 md:py-24 md:grid-cols-2 md:space-y-0">
        {/* Banner Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textAnimation}
          className="flex flex-col justify-center"
        >
          <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
            <motion.h1 className="text-4xl font-bold !leading-snug">
              Understand Your Rights and Responsibilities
            </motion.h1>
            <motion.p className="text-dark2">
              Explore the core principles of our Constitution, including
              Fundamental Rights, Duties, Directive Principles of State Policy
              (DPSP), key Amendments, and Schedules. Empower yourself with
              knowledge to build a stronger democracy.
            </motion.p>
            <motion.a
              href="/citizen"
              className="primary-btn !mt-8"
              variants={buttonAnimation}
              whileHover="hover"
            >
              Learn More
            </motion.a>
          </div>
        </motion.div>
        {/* Banner Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageAnimation}
          whileHover="hover"
          className="flex items-start justify-center"
        >
          <motion.img
            src={BannerPng}
            alt="Banner"
            className="w-[350px] md:max-w-[450px] object-cover h-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner2;
