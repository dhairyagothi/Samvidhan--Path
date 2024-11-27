import React from "react";
import { RiBookLine, RiGamepadLine, } from "react-icons/ri";
import { CiMobile3 } from "react-icons/ci";
import { LiaBalanceScaleRightSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import { IoLibraryOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const ServicesData = [
  {
    id: 1,
    title: " Constitution Pdfs",
    link: "/constitution",
    icon: <RiBookLine />,
    tooltip: "Dive into the Indian Constitution with ease.",
    delay: 0.2,
  },
  {
    id: 2,
    title: "Case Studies",
    link: "/casestudies",
    icon: <CiMobile3 />,
    tooltip: "Learn from real-world examples and cases.",
    delay: 0.3,
  },
  {
    id: 3,
    title: "Interactive Games",
    link: "/games",
    icon: <RiGamepadLine />,
    tooltip: "Engage in fun and educational games.",
    delay: 0.4,
  },
  {
    id: 4,
    title: "Constitution For Citizens",
    link: "/citizen",
    icon: <LiaBalanceScaleRightSolid />,
    tooltip: "Understand your fundamental rights and duties.",
    delay: 0.5,
  },
  {
    id: 5,
    title: "E-Books & Resources",
    link: "/ebooks",
    icon: <IoLibraryOutline />,
    tooltip: "Access e-books, study materials, and guides.",
    delay: 0.6,
  },
  {
    id: 6,
    title: "Support & Queries",
    link: "/contact",
    icon: <BiSupport />,
    tooltip: "Reach out to us for assistance and feedback.",
    delay: 0.7,
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

const Services = () => {
  return (
    <section className="bg-white">
      <div className="container pt-16 pb-14">
        <h1 className="pb-10 text-4xl font-bold text-left text-gray-800">
        Discover the Path to Knowledge
        </h1>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6">
          {ServicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className="relative bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl"
            >
              <a href={service.link} className="flex flex-col items-center w-full text-yellow-500 text-cente hover:text-yellow-600">
                <div className="mb-4 text-4xl text-center " > {service.icon}</div>
                <h1 className="px-3 text-lg font-semibold text-center ">
                  {service.title}
                </h1>
              </a>
              <div className="absolute hidden px-4 py-2 text-sm text-white bg-gray-800 rounded bottom-[-2.5rem] group-hover:block">
                {service.tooltip}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
