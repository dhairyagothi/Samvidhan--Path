import React from "react";
import { motion } from "framer-motion";
import book1png from "../../assets/book1.png";
import book2png from "../../assets/book2.png";
import book3png from "../../assets/book3.png";
import book4png from "../../assets/book4.png";
import book5png from "../../assets/book5.png";
import book6png from "../../assets/book6.png";
const EBooks = () => {
  const books = [
    {
      title: "Introduction to the Constitution of India",
      author: "DD Basu",
      image: book1png,
    },
    {
      title: "Outlines of Indian Legal and Constitutional History",
      author: "MP Jain",
      image: book2png,
    },
    {
      title: "The Indian Constitution: Cornerstone of a Nation",
      author: "Granville Austin",
      image: book3png,
    },
    {
      title: "The Indian Constitution: A Case Study of Backward Classes",
      author: "Granville Austin",
      image: book4png,
    },
    {
      title: "Bharat Ka Samvidhan (Hindi)",
      author: "HP Gupta",
      image:book5png,
    },
    {
      title: "Fundamental Rights and Their Enforcement",
      author: "Uday Raj Rai",
      image: book6png,
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
              className="object-cover w-[150px] items-center mx-20 h-40"
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
