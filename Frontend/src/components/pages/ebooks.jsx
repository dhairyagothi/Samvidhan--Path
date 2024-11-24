import React from "react";
import { motion } from "framer-motion";

const EBooks = () => {
  const books = [
    {
      title: "Introduction to the Constitution of India",
      author: "DD Basu",
      image: "https://via.placeholder.com/150?text=Book+Cover",
    },
    {
      title: "Outlines of Indian Legal and Constitutional History",
      author: "MP Jain",
      image: "https://via.placeholder.com/150?text=Book+Cover",
    },
    {
      title: "The Indian Constitution: Cornerstone of a Nation",
      author: "Granville Austin",
      image: "https://via.placeholder.com/150?text=Book+Cover",
    },
    {
      title: "The Indian Constitution: A Case Study of Backward Classes",
      author: "Granville Austin",
      image: "https://via.placeholder.com/150?text=Book+Cover",
    },
    {
      title: "Bharat Ka Samvidhan (Hindi)",
      author: "HP Gupta",
      image: "https://via.placeholder.com/150?text=Book+Cover",
    },
    {
      title: "Fundamental Rights and Their Enforcement",
      author: "Uday Raj Rai",
      image: "https://via.placeholder.com/150?text=Book+Cover",
    },
  ];

  return (
    <div className="container min-h-screen p-8 bg-gray-100">
      <h1 className="mb-8 text-4xl font-bold text-center text-yellow-500">E-Books</h1>
      <div className="container grid w-11/12 grid-cols-1 gap-14 md:grid-cols-3">
        {books.map((book, index) => (
          <motion.div
            key={index}
            className="overflow-hidden bg-white rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={book.image}
              alt={book.title}
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800">{book.title}</h2>
              <p className="mt-2 text-sm text-gray-600">by {book.author}</p>
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

export default EBooks;
