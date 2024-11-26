import React from "react";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
import casestudy1png from "../../../assets/book1.png"; // Make sure to update the paths

const Casestudies = () => {
  const casestudies = [
    {
      title: "Indra Sawhney vs Union of India (1992)",
      article: "Article 12",
      image: casestudy1png,
      intro: "This landmark case discusses the definition of the term 'State' under Article 12 of the Constitution of India.",
      view: (
        <a href="/docs/fundamental-rights-article-29" className="hover:text-red-600">
          View Documentation 🔗
        </a>
      ),
    },
   
  ];

  return (
    <div className="container min-h-screen p-8 bg-gray-100">
      <h1 className="mb-8 text-4xl font-bold text-center text-yellow-500">
        E-Case Studies
      </h1>
      <div className="grid w-full grid-cols-1 gap-14 md:grid-cols-3">
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
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-900">{casestudy.title}</h2>
              <h3 className="text-xl font-bold text-gray-700">{casestudy.article}</h3>
              <p className="mt-2 text-sm text-gray-600">{casestudy.intro}</p>
              <div className="flex justify-between mt-4">
                
                <a
                  href="#"
                  className="flex flex-row items-center w-auto px-4 py-2 text-white transition bg-yellow-500 rounded-md shadow hover:bg-yellow-600"
                >
                  Read More <MdArrowOutward className="duration-200 group-hover:animate-bounce group-hover:text-lg" />
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
