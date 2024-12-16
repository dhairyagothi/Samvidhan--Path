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
      url: "",
      image: book1png,
    },
    {
      title: "Outlines of Indian Legal and Constitutional History",
      author: "MP Jain",
      url: "https://ia600704.us.archive.org/21/items/outlinesofindian00mpja/outlinesofindian00mpja.pdf",
      image: book2png,
    },
    {
      title: "The Indian Constitution: Cornerstone of a Nation",
      author: "Granville Austin",
      url: "https://teachmint.storage.googleapis.com/public/8814727863/StudyMaterial/31a38c40-5d1c-4594-8ce6-97b9526f4b98.pdf",
      image: book3png,
    },
    {
      title: "The Indian Constitution: A Case Study of Backward Classes",
      author: "Granville Austin",
      url: "",
      image: book4png,
    },
    {
      title: "Bharat Ka Samvidhan (Hindi)",
      author: "HP Gupta",
      url: "",
      image: book5png,
    },
    {
      title: "Fundamental Rights and Their Enforcement",
      author: "Uday Raj Rai",
      url: "",
      image: book6png,
    },
  ];

  return (
    <div className="container min-h-screen p-8 bg-gray-100 dark:bg-gray-900">
      <h1 className="mb-8 text-4xl font-bold text-center text-yellow-500 dark:text-yellow-400">E-Books</h1>
      <div className="container grid w-11/12 grid-cols-1 gap-14 md:grid-cols-3">
        {books.map((book, index) => (
          <motion.div
            key={index}
            className="overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={book.image}
              alt={book.title}
              className="object-cover w-[150px] items-center mx-20 h-40"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">{book.title}</h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">by {book.author}</p>
              <div className="flex items-center justify-between mt-4">
                <a
                  href={book.url}
                  className="font-semibold text-secondary hover:text-yellow-500 "
                >
                  Read
                </a>
                <a
                  href={book.url}
                  className="px-4 py-2 text-white transition bg-yellow-500 rounded shadow hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700"
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
