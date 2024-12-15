import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import samvidhanPathLogo from "../../assets/samvidhanpath.png";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { MdAccessibility } from "react-icons/md";
import { FaHighlighter, FaTextHeight } from "react-icons/fa";
import TextToSpeech from "../TexttoSpeach";
import GoogleTranslate from "../Language";
import ThemeChange from "../Themechange";
const NavbarMenu = [
  { id: 1, title: "Home", path: "/" },
  {
    id: 2,
    title: "Constitution of India",
    path: "/constitution",
    submenu: [
      { id: 1, title: "History", path: "/constitution/history" },
      { id: 2, title: "Preamble", path: "/constitution/preamble" },
    ],
  },
  {
    id: 3,
    title: "Explore",
    path: "/explore",
    submenu: [
      { id: 1, title: "Case Studies", path: "/casestudies" },
      { id: 2, title: "Quiz", path: "/quiz" },
    ],
  },
  {
    id: 4,
    title: "For Citizen",
    path: "/citizen",
    submenu: [
      { id: 1, title: "Fundamental Rights", path: "/citizen/rights" },
      { id: 2, title: "Fundamental Duties", path: "/citizen/duties" },
      { id: 3, title: "Directive Principles", path: "/citizen/dpsp" },
      { id: 4, title: "Amendment", path: "/citizen/amendment" },
      { id: 5, title: "Schedules", path: "/citizen/schedules" },
    ],
  },
  {
    id: 5,
    title: "Engage",
    path: "/engage",
    submenu: [
      { id: 1, title: "Discussion Forum", path: "/engage/discussionforum" },
      { id: 2, title: "Blog", path: "/engage/blog" },
      { id: 3, title: "Podcast", path: "/engage/podcast" },
      { id: 4, title: "Video", path: "/engage/video" },
    ],
  },
  { id: 6, title: "E-Books", path: "/ebooks" },
  {
    id: 7,
    title: "Games",
    path: "/games",
    submenu: [
      { id: 1, title: "Crossword", path: "/games/crossword" },
      { id: 2, title: "Quiz", path: "/quiz" },
      { id: 3, title: "Word Search", path: "/games/word-search" },
      { id: 4, title: "Puzzle", path: "/games/puzzle" },
    ],
  },
  { id: 8, title: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTextResizer, setShowTextResizer] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (path) => {
    navigate(path);
  };

  const toggleSubmenu = (menuId) => {
    setActiveMenu(activeMenu === menuId ? null : menuId);
  };

  const Signupclick = () => {
    navigate("/sign-up");
  };

  return (
    <>
      {/* Accessibility Bar */}
      <div className="text-black shadow-lg bg-yellow-50 dark:bg-gray-800 dark:text-white">
        <div className="container flex items-center justify-between px-2 text-black bg-white lg:px-5 dark:bg-gray-800 dark:text-white">
          {/* Accessibility Icons */}
          <div className="flex items-center space-x-4 text-gray-700 bg-white dark:bg-gray-800 dark:text-white" >
            <MdAccessibility size={24} className="cursor-pointer hover:text-black" title="Accessibility Options" />
            <FaHighlighter size={24} className="cursor-pointer hover:text-black" title="Highlight Text" />
            <FaTextHeight
              size={24}
              className="cursor-pointer hover:text-black"
              title="Text Resize"
              onClick={() => setShowTextResizer(true)} // Show the Text Resizer popup
            />
          <TextToSpeech /> 
          <ThemeChange/>
          </div>
          {/* Google Translate */}
          <GoogleTranslate />
        </div>
      </div>

      {/* Text Resizer Popup */}
      {showTextResizer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-sm p-5 bg-white rounded-lg shadow-lg">
            <div className="text-xl font-semibold">Text Resizer</div>
            <div className="flex mt-4 space-x-2">
              <button
                onClick={() => document.documentElement.className = "text-sm"}
                className="px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300"
              >
                Small
              </button>
              <button
                onClick={() => document.documentElement.className = "text-base"}
                className="px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300"
              >
                Medium
              </button>
              <button
                onClick={() => document.documentElement.className = "text-lg"}
                className="px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300"
              >
                Large
              </button>
            </div>
            <button
              onClick={() => setShowTextResizer(false)} // Close the popup
              className="px-4 py-2 mt-4 text-white bg-red-500 rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    <nav className="relative z-20 text-black bg-white shadow-md dark:bg-gray-800 dark:text-white">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container flex items-center justify-between py-4 lg:py-6"
      >
        {/* Logo section */}
        <div className="flex flex-row gap-3">
          <img className="w-auto h-20" src={samvidhanPathLogo} alt="logo" />
          <div className="flex flex-col justify-center items-left">
            <h1 className="text-2xl font-bold">Samvidhan Path</h1>
            <h1 className="text-2xl font-bold">संविधान पथ</h1>
          </div>
        </div>
        {/* Menu section */}
        <div className="hidden text-black bg-white lg:block dark:bg-gray-800 dark:text-white">
          <ul className="flex items-center gap-6 text-black bg-white dark:bg-gray-800 dark:text-white">
            {NavbarMenu.map((menu) => (
              <li
                key={menu.id}
                className="relative text-black bg-white group dark:bg-gray-800 dark:text-white"
                onMouseEnter={() => menu.submenu && toggleSubmenu(menu.id)}
                onMouseLeave={() => menu.submenu && toggleSubmenu(null)}
              >
                <button
                  onClick={() => handleMenuClick(menu.path)}
                  className="relative inline-block px-3 py-2 dark:hover:bg-gray-800 hover:text-secondary"
                >
                  {menu.title}
                </button>
                {/* Dropdown for submenu */}
                <AnimatePresence>
                  {menu.submenu && activeMenu === menu.id && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 w-48 mt-2 text-black bg-white border shadow-lg top-full dark:bg-gray-800 dark:text-white"
                    >
                      {menu.submenu.map((sub, index) => (
                        <motion.li
                          key={sub.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <button
                            onClick={() => handleMenuClick(sub.path)}
                            className="block w-full px-4 py-2 text-left dark:hover:bg-gray-800 hover:bg-gray-100 hover:text-secondary"
                          >
                            {sub.title}
                          </button>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ))}
            <button className="primary-btn" onClick={Signupclick}>Sign Up</button>
          </ul>
        </div>
        {/* Mobile Hamburger menu section */}
        <div className="static">
  {/* Mobile Hamburger Icon */}
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="sticky z-[1000] cursor-pointer lg:hidden top-16 right-6"
    onClick={toggleMenu}
  >
    {isOpen ? (
      <IoMdClose className="z-50 text-4xl text-yellow-500" />
    ) : (
      <IoMdMenu className="text-4xl text-yellow-500" />
    )}
  </motion.div>

  {/* Sliding Hamburger Menu */}
  <motion.div
    initial={{ x: "100%" }}
    animate={{ x: isOpen ? "0%" : "100%" }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className="fixed top-0 right-0 z-50 flex flex-col w-4/5 h-screen gap-6 px-6 py-8 text-white bg-gray-900 shadow-lg "
  >
    <ul className="flex flex-col gap-4 mt-44 ">
      {NavbarMenu.map((menu) => (
        <li
          key={menu.id}
          className="relative group"
          onMouseEnter={() => menu.submenu && toggleSubmenu(menu.id)}
          onMouseLeave={() => menu.submenu && toggleSubmenu(null)}
        >
          <button
            onClick={() => handleMenuClick(menu.path)}
            className="block px-3 py-2 text-lg hover:text-yellow-500"
          >
            {menu.title}
          </button>
          {/* Dropdown for submenu */}
          <AnimatePresence>
            {menu.submenu && activeMenu === menu.id && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="left-0 w-48 mt-2 text-white bg-gray-900 shadow-lg md:bg-white md:absolute top-full"
              >
                {menu.submenu.map((sub, index) => (
                  <motion.li
                    key={sub.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <button
                      onClick={() => handleMenuClick(sub.path)}
                      className="block w-full px-4 py-2 text-left dark:hover:bg-gray-800 md:hover:bg-gray-100 hover:text-secondary"
                    >
                      {sub.title}
                    </button>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </li>
      ))}
    </ul>
    <button className="px-4 py-2 bg-yellow-500 rounded-md hover:bg-yellow-600" onClick={Signupclick}>
       Sign Up
    </button>
  </motion.div>
</div>

      </motion.div>
    </nav>
  </>
  );
};

export default Navbar;
