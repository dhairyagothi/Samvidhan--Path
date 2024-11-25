import React from "react";
import { motion } from "framer-motion";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { HiOutlineBookOpen } from "react-icons/hi";
import constitutionnpng from "../../assets/education.png";
const sections = [
  {
    id: "preamble",
    title: "Preamble & Constitution PDFs",
    description:
      "Read the preamble and access the full Constitution of India in PDF format. Empower yourself with the knowledge of our guiding principles.",
    icon: <BsFillFileEarmarkPdfFill />,
    link: "/constitution/preamble",
    delay: 0.2,
  },
  {
    id: "history",
    title: "History of the Constitution",
    description:
      "Dive into the fascinating journey of how the Indian Constitution was drafted and the visionaries who shaped it.",
    icon: <HiOutlineBookOpen />,
    link: "/constitution/history",
    delay: 0.3,
  },
];

const SlideUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Constitution = () => {
  return (
    <section className="bg-gray-100">
      {/* Hero Section */}
      <div className="px-8 py-16 text-white bg-gradient-to-r from-blue-300 to-sky-700">
        <div className="container mx-auto text-center">
          <h1 className="mb-6 text-4xl font-bold">
            Explore the Constitution of India
          </h1>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed">
            Discover the foundation of India’s democracy. Learn about the vision,
            principles, and history that define our nation's governance and rights.
          </p>
        </div>
      </div>
      <div className="mt-8">
            <img
              src={constitutionnpng}
              alt="Constitutional Values"
              className="mx-auto rounded-lg shadow-2xl h-96"
            />
          </div>
      {/* Main Sections */}
      <div className="container py-16">
        <h2 className="mb-12 text-3xl font-bold text-center">
          Key Sections of the Constitution
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {sections.map((section) => (
            <motion.div
              key={section.id}
              variants={SlideUp(section.delay)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className="flex flex-col items-center p-8 text-center duration-300 bg-white shadow-lg rounded-xl hover:scale-105 hover:shadow-2xl"
            >
              <div className="mb-4 text-5xl text-sky-500">{section.icon}</div>
              <h3 className="mb-4 text-xl font-semibold">{section.title}</h3>
              <p className="text-gray-600">{section.description}</p>
              <a
                href={section.link}
                className="inline-block mt-6 font-semibold underline text-sky-600 hover:text-sky-700"
              >
                Learn More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Constitution;
