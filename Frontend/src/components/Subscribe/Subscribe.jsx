import React from "react";
import { MdArrowOutward } from "react-icons/md";
import BgImage from "../../assets/bg.png";
import { motion } from "framer-motion";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Subscribe = () => {
  return (
    <section className="relative text-black bg-white dark:bg-gray-800 dark:text-white">
      {/* Background Image with Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={bgStyle}
        className="relative py-24 md:py-48"
      >
        <div className="absolute inset-0 bg-black/40 dark:bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="relative z-10 flex flex-col justify-center"
        >
          <div className="text-center space-y-4 lg:max-w-[430px] mx-auto">
            <h1 className="text-4xl font-bold !leading-snug text-gray-800 dark:text-gray-200">
              Learn the Constitution, shape the future.
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              The Constitution is the backbone of our democracy, ensuring
              justice, equality, and freedom for all.
            </p>
            <a
              href="#"
              className="primary-btn !mt-8 inline-flex items-center gap-4 group bg-yellow-500 text-white hover:bg-yellow-600 dark:bg-yellow-400 dark:hover:bg-yellow-500 px-6 py-3 rounded-md shadow-md transition duration-300"
            >
              Get Started Now
              <MdArrowOutward className="duration-200 group-hover:animate-bounce group-hover:text-lg" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Subscribe;
