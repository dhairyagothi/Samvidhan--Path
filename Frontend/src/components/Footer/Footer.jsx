import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // React Router Link
import logo from "../../assets/samvidhanpath.png"; // Path to logo image

const Footer = () => {
  // Scroll to top when a footer link is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="text-gray-500 bg-gray-100 py-28 dark:bg-gray-900 dark:text-gray-400">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="grid items-center grid-cols-1 md:items-start md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-8 md:justify-normal ">
          {/* First Section */}
          <div className="space-y-4 max-w-[400px] flex flex-col items-center md:items-start">
            <h1 className="text-2xl font-bold text-black dark:text-white">Samvidhan Path</h1>
            <img src={logo} alt="logo" className="w-1/4 h-auto" />
            <p>Bringing the Constitution Closer to Every Citizen</p>
          </div>

          {/* Second Section */}
          <div className="grid grid-cols-2 gap-10 px-5 text-center md:px-0 md:text-left">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold text-black dark:text-white">Explore Features</h1>
              <ul className="space-y-2 text-lg ">
                <li>
                  <Link
                    to="/citizen"
                    onClick={scrollToTop}
                    className="duration-200 hover:text-yellow-500"
                  >
                    For Citizen
                  </Link>
                </li>
                <li>
                  <Link
                    to="/constitution/preamble"
                    onClick={scrollToTop}
                    className="duration-200 hover:text-yellow-500"
                  >
                    Constitution PDF
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ebooks"
                    onClick={scrollToTop}
                    className="duration-200 hover:text-yellow-500"
                  >
                    E-books
                  </Link>
                </li>
                <li>
                  <Link
                    to="/games"
                    onClick={scrollToTop}
                    className="duration-200 hover:text-yellow-500"
                  >
                    Games
                  </Link>
                </li>
                <li>
                  <Link
                    to="/engage"
                    onClick={scrollToTop}
                    className="duration-200 hover:text-yellow-500"
                  >
                    Engage
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h1 className="text-2xl font-bold text-black dark:text-white">Links</h1>
              <ul className="space-y-2 text-lg">
                <li>
                  <Link
                    to="/"
                    onClick={scrollToTop}
                    className="duration-200 hover:text-yellow-500"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/aboutus"
                    onClick={scrollToTop}
                    className="duration-200 hover:text-yellow-500"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    onClick={scrollToTop}
                    className="duration-200 hover:text-yellow-500"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    onClick={scrollToTop}
                    className="duration-200 hover:text-yellow-500"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/t&c"
                    onClick={scrollToTop}
                    className="duration-200 hover:text-yellow-500"
                  >
                    Terms And Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Third Section */}
          <div className="space-y-4 max-w-[300px] justify-center">
            <h1 className="text-2xl font-bold text-black dark:text-white text:center md:text-left">Get In Touch</h1>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full p-3 py-4 bg-white dark:bg-gray-800 rounded-s-xl focus:ring-0 focus:outline-none placeholder:text-gray-500 dark:placeholder:text-gray-400"
              />
              <button className="px-6 py-4 font-semibold text-white bg-yellow-500 rounded-e-xl hover:bg-yellow-600 dark:bg-yellow-400 dark:hover:bg-yellow-500">
                Go
              </button>
            </div>
            {/* Social Icons */}
            <div className="flex justify-center py-3 space-x-6 text-black dark:text-white md:justify-start">
              <a
                href="/"
                className="duration-200 hover:text-yellow-500 dark:hover:text-yellow-400 hover:scale-105"
              >
                <FaWhatsapp />
              </a>
              <a
                href="/"
                className="duration-200 hover:text-yellow-500 dark:hover:text-yellow-400 hover:scale-105"
              >
                <FaInstagram />
              </a>
              <a
                href="/"
                className="duration-200 hover:text-yellow-500 dark:hover:text-yellow-400 hover:scale-105"
              >
                <TbWorldWww />
              </a>
              <a
                href="/"
                className="duration-200 hover:text-yellow-500 dark:hover:text-yellow-400 hover:scale-105"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
