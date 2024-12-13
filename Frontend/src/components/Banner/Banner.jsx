import React from "react";
import BannerPng from "../../assets/education.png"; // Use an image relevant to the Constitution
import { FaBalanceScale } from "react-icons/fa";
import { BsFillAwardFill } from "react-icons/bs";
import { MdPolicy } from "react-icons/md";
import { RiExchangeFill } from "react-icons/ri";
import { MdSchedule } from "react-icons/md";
import { FadeUp } from "../Hero/Hero";
import { motion } from "framer-motion";

const Banner = () => {
  const sections = [
    {
      id: 1,
      title: "Fundamental Rights",
      icon: <FaBalanceScale className="text-2xl" />,
      link: "/citizen/rights", // Replace with actual route
    },
    {
      id: 2,
      title: "Fundamental Duties",
      icon: <BsFillAwardFill className="text-2xl" />,
      link: "/citizen/duties", // Replace with actual route
    },
    {
      id: 3,
      title: "Directive Principles",
      icon: <MdPolicy className="text-2xl" />,
      link: "/citizen/dpsp", // Replace with actual route
    },
    {
      id: 4,
      title: "Amendments",
      icon: <RiExchangeFill className="text-2xl" />,
      link: "/citizen/amendments", // Replace with actual route
    },
    {
      id: 5,
      title: "Schedules",
      icon: <MdSchedule  className="text-2xl" />,
      link: "/citizen/schedules", // Replace with actual route
    },
  ];

  return (
    <section>
      <div className="grid grid-cols-1 gap-8 space-y-6 text-black bg-white py-14 md:py-24 md:grid-cols-2 md:space-y-0 dark:bg-gray-800 dark:text-white">
        {/* Banner Image */}
        <div className="flex items-center justify-center">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            src={BannerPng}
            alt="Constitution Illustration"
            className="w-[350px] md:max-w-[450px] object-cover drop-shadow-lg shadow-2xl"
          />
        </div>
        {/* Banner Text */}
        <div className="container flex flex-col justify-center">
          <div className="space-y-12 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-gray-800 !leading-snug "
            >
              Your Gateway to Rights, Duties, and the Constitution's Core!
            </motion.h1>
            <div className="flex flex-col gap-6">
              {sections.map((section, index) => (
                <motion.a
                  key={section.id}
                  href={section.link}
                  variants={FadeUp(0.2 + index * 0.2)}
                  initial="initial"
                  whileInView={"animate"}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-yellow-500 hover:text-white duration-300 hover:shadow-2xl cursor-pointer"
                >
                  {section.icon}
                  <p className="text-lg">{section.title}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
