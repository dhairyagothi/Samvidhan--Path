import React from "react";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
import gameImage1 from "../../assets/citizens.png"; // Replace with actual image path


const GamesPage = () => {
  const games = [
    {
      title: "Crossword",
      description: "Test your knowledge of the Indian Constitution with this fun crossword puzzle.",
      image: gameImage1,
      link: "/games/crossword",
    },
    {
      title: "Quiz",
      description: "put your knowledge to the test with our interactive quiz on the Indian Constitution.",
      image: gameImage1,
      link: "/games/quizes",
    },
   
  ];

  return (
<div className="relative min-h-screen p-8 overflow-hidden bg-gradient-to-br from-orange-200 via-yellow-200 to-yellow-300">
  {/* Animated Circular Background Patterns */}
  <div className="absolute top-0 left-0 z-0 w-full h-full pointer-events-none opacity-10">
    <div className="absolute w-40 h-40 bg-orange-200 rounded-full top-10 left-10 animate-pulse-slow"></div>
    <div className="absolute w-64 h-64 bg-orange-200 rounded-full top-1/3 right-20 animate-ping-slow"></div>
    <div className="absolute w-48 h-48 bg-orange-100 rounded-full bottom-20 left-1/4 animate-bounce-slow"></div>
    <div className="absolute w-32 h-32 rounded-full bottom-10 right-10 bg-orange-50 animate-pulse-fast"></div>
  </div>

  <h1 className="relative z-10 mb-8 text-4xl font-bold text-center text-yellow-900 animate-fade-in">
     Games
  </h1>

  <div className="container relative z-10 grid items-center w-full grid-cols-1 mt-16 gap-14 md:grid-cols-3">
    {games.map((game, index) => (
      <motion.div
        key={index}
        className="overflow-hidden transition-transform duration-300 ease-in-out transform bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl animate-slide-up"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img
          src={game.image}
          alt={game.title}
          className="object-cover w-full h-48 transition-all duration-500 transform rounded-t-lg hover:rotate-3"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-900">{game.title}</h2>
          <p className="mt-2 text-sm text-gray-600">{game.description}</p>
          <div className="flex justify-between mt-4">
            <a
              href={game.link}
              className="primary-btn !mt-8 inline-flex items-center gap-4 group text-lg font-semibold "
            >
              Play Now
              <MdArrowOutward className="duration-200 group-hover:animate-bounce group-hover:text-lg" />
            </a>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</div>

  );
};

export default GamesPage;
