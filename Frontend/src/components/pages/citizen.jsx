import React from "react";
import { MdPolicy } from "react-icons/md";
import { RiExchangeFill } from "react-icons/ri";
import { BsFillAwardFill } from "react-icons/bs";
import { MdSchedule } from "react-icons/md";
import { LiaBalanceScaleRightSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import citizenpng from "../../assets/citizens.png";
const CitizenData = [
  {
    id: 1,
    title: "Fundamental Rights",
    link: "/citizen/rights",
    icon: <LiaBalanceScaleRightSolid />,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Fundamental Duties",
    link: "/citizen/duties",
    icon: <BsFillAwardFill />,
    delay: 0.3,
  },
  {
    id: 3,
    title: "Directive Principle Of State Policies",
    link: "/citizen/dpsp",
    icon: <MdPolicy />,
    delay: 0.4,
  },
  {
    id: 4,
    title: "Amendments",
    link: "/citizen/amendment",
    icon: <RiExchangeFill />,
    delay: 0.5,
  },
  {
    id: 5,
    title: "Schedules",
    link: "/citizen/schedules",
    icon: <MdSchedule />,
    delay: 0.6,
  },
];

const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Citizen = () => {
  return (
    <section className="bg-white dark:bg-gray-800 dark:text-white">
      {/* Introductory Section */}
      <div className="px-8 py-16 text-white bg-gradient-to-r from-yellow-500 to-amber-700">
        <div className="container mx-auto text-center">
          <h1 className="mb-6 text-4xl font-bold">
            Why Every Citizen Should Learn the Constitution
          </h1>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed">
            The Constitution is the cornerstone of democracy, defining our rights, 
            duties, and the principles that govern our nation. Understanding it empowers 
            citizens to actively participate in nation-building, protect their freedoms, 
            and ensure justice for all. Let’s explore its profound importance together.
          </p>
          <div className="mt-8">
            <img
              src={citizenpng}
              alt="Constitutional Values"
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Citizen Data Section */}
      <div className="container pt-16 pb-14">
        <h1 className="pb-10 text-4xl font-bold text-left">
          Explore Our Constitution Sections
        </h1>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6">
          {CitizenData.map((citizen) => (
            <motion.a
              key={citizen.id}
              href={citizen.link}
              variants={SlideLeft(citizen.delay)}
              initial="initial" 
              whileInView={"animate"}
              viewport={{ once: true }}
              className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 cursor-pointer  shadow-lg  hover:scale-105 hover:shadow-2xl dark:bg-gray-800 dark:text-white dark:shadow-gray-700"
            >
              <div className="mb-4 text-4xl text-yellow-500"> {citizen.icon}</div>
              <h1 className="px-3 text-lg font-semibold text-center ">
                {citizen.title}
              </h1>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Citizen;
