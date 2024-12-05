import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";  // Add react-router link for navigation
import logo from "../../assets/samvidhanpath.png";  // Update the path to the logo image
const Footer = () => {
  return (
    <footer className="py-28 bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-2">
          {/* first section */}
         
          <div className="space-y-4 max-w-[400px] flex flex-col">
            <h1 className="text-2xl font-bold">Samvidhan Path</h1>
            <img src={logo} alt="logo" sizes="" srcset="" className="w-1/4 h-auto"/>
            <p className="text-dark2">
            Bringing the Constitution Closer to Every Citizen
            </p>
          </div>
          
          {/* second section */}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Explore Features</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  {/* Update the links to the actual routes */}
                  <li className="duration-200 cursor-pointer hover:text-secondary">
                    <Link to="/citizen">For Citizen</Link>
                  </li>
                  <li className="duration-200 cursor-pointer hover:text-secondary">
                    <Link to="/constitution/preamble">Constitution PDF</Link>
                  </li>
                  <li className="duration-200 cursor-pointer hover:text-secondary">
                    <Link to="/ebooks">E-books</Link>
                  </li>
                  <li className="duration-200 cursor-pointer hover:text-secondary">
                    <Link to="/games">Games</Link>
                  </li>
                  <li className="duration-200 cursor-pointer hover:text-secondary">
                    <Link to="/engage">Engage</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Links</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="duration-200 cursor-pointer hover:text-secondary">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="duration-200 cursor-pointer hover:text-secondary">
                    <Link to="/aboutus">About</Link>
                  </li>
                  <li className="duration-200 cursor-pointer hover:text-secondary">
                    <Link to="/services">Services</Link>
                  </li>
                  <li className="duration-200 cursor-pointer hover:text-secondary">
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li className="duration-200 cursor-pointer hover:text-secondary">
                    <Link to="/t&c">Terms And Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* third section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Get In Touch</h1>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full p-3 py-4 bg-white rounded-s-xl focus:ring-0 focus:outline-none placeholder:text-dark2"
              />
              <button className="px-6 py-4 font-semibold text-white bg-primary rounded-e-xl">
                Go
              </button>
            </div>

            {/* social icons */}
            <div className="flex py-3 space-x-6">
              <a href="/">
                <FaWhatsapp className="duration-200 cursor-pointer hover:text-primary hover:scale-105" />
              </a>
              <a href="/">
                <FaInstagram className="duration-200 cursor-pointer hover:text-primary hover:scale-105" />
              </a>
              <a href="/">
                <TbWorldWww className="duration-200 cursor-pointer hover:text-primary hover:scale-105" />
              </a>
              <a href="/">
                <FaYoutube className="duration-200 cursor-pointer hover:text-primary hover:scale-105" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
