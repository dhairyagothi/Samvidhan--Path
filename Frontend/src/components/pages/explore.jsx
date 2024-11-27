import React from "react";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";

const exploreData = [
  {
    id: 1,
    title: "Case Studies",
    description: "Explore real-world examples of the Indian Constitution in action. Understand the impact of key articles on governance.",
    link: "/casestudies",
    delay: 0.2,
  },
  {
    id: 2,
    title: "Games",
    description: "Test your knowledge of the Indian Constitution with fun and interactive games. Learn while you play!",
    link: "/games",
    delay: 0.3,
  },
  {
    id: 3,
    title: "Constitution Simplified",
    description: "Discover how constitution is divided , its importance and how it is structured.",
    link: "/constitution",
    delay: 0.4,
  },

];

const SlideRight = (delay) => {
  return {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5, delay, ease: "easeInOut" } },
  };
};

const Explore = () => {
  return (
    <section className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="px-8 py-16 text-white bg-gradient-to-r from-green-500 to-teal-600">
        <div className="container mx-auto text-center">
          <h1 className="mb-6 text-4xl font-bold">Explore the Constitution</h1>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed">
            Dive deeper into the structure of the Indian Constitution and its impact on governance and daily life.
          </p>
        </div>
      </div>

      {/* Explore Topics */}
      <div className="container py-16">
        <h2 className="mb-12 text-3xl font-bold text-center">Explore Features</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {exploreData.map((topic) => (
            <motion.div
              key={topic.id}
              variants={SlideRight(topic.delay)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className="flex flex-col justify-between p-6 duration-300 bg-white shadow-lg rounded-xl hover:shadow-2xl hover:scale-105"
            >
              <div>
                <h3 className="mb-4 text-xl font-semibold">{topic.title}</h3>
                <p className="text-gray-600">{topic.description}</p>
              </div>
              <a
                href={topic.link}
                className="flex items-center justify-end mt-6 font-semibold text-teal-600 hover:underline animate-bounce"
              >
                Learn More <AiOutlineArrowRight className="ml-2" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
