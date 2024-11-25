import React from "react";
import { motion } from "framer-motion";


const Casestudies = () => {
  const casestudies = [
    {
      title: "Introduction to the Constitution of India",
      article: "DD Basu",
      image: casestudy1png,
    },
    
  ];

  return (
    <div className="container min-h-screen p-8 bg-gray-100">
      <h1 className="mb-8 text-4xl font-bold text-center text-yellow-500">E-casestudies</h1>
      <div className="container grid w-11/12 grid-cols-1 gap-14 md:grid-cols-3">
        {casestudies.map((casestudy, index) => (
          <motion.div
            key={index}
            className="overflow-hidden bg-white rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={casestudy.image}
              alt={casestudy.title}
              className="object-cover w-[150px] items-center mx-20 h-40"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800">{casestudy.title}</h2>
              <p className="mt-2 text-sm text-gray-600"> {casestudy.article}</p>
              <div className="flex items-center justify-between mt-4">
                <a
                  href="#"
                  className="font-semibold text-secondary hover:text-yellow-500"
                >
                  Read
                </a>
                <a
                  href="#"
                  className="px-4 py-2 text-white transition bg-yellow-500 rounded shadow hover:bg-yellow-600"
                >
                  Download
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Casestudies;
