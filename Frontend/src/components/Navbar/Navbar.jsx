import React, { useState } from "react";;
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import samvidhanPathLogo from "../../assets/samvidhanpath.png";
import { IoMdMenu, IoMdClose } from "react-icons/io";

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
    id: 4, title: "For Citizen", path: "/citizen",
    submenu: [
      { id: 1, title: "Fundamental Rights", path: "/citizen/rights" },
      { id: 2, title: "Fundamental Duties", path: "/citizen/duties" },
      { id: 3, title: "Directive Principles", path: "/citizen/dpsp" },
      { id: 4, title: "Amendment", path: "/citizen/amendment" },
      { id: 5, title: "Schedules", path: "/citizen/schedules" },
    ],

  },
  {
    id: 5, title: "Engage", path: "/engage",
    submenu: [
      { id: 1, title: "Discussion Forum", path: "/engage/discussionforum" },
      { id: 2, title: "Blog", path: "/engage/blog" },
      { id: 3, title: "Podcast", path: "/engage/podcast" },
      { id: 4, title: "Video", path: "/engage/video" },
    ],
  },
  { id: 6, title: "E-Books", path: "/ebooks" },
  {
    id: 7, title: "Games", path: "/games",
    submenu: [
      { id: 1, title: "Crossword", path: "/games/crossword" },
      { id: 2, title: "Puzzle", path: "/games/puzzle" },
    ],
  },

  { id: 8, title: "Contact Us", path: "/contact" },

];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (path) => {
    navigate(path);
  };

  const toggleSubmenu = (menuId) => {
    setActiveMenu(activeMenu === menuId ? null : menuId);
  };

  const Signinclick = () => {
    navigate("/signin");
  };
  return (
    <nav className="relative z-20 shadow-md">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container flex items-center justify-between py-10"
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
        <div className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {NavbarMenu.map((menu) => (
              <li
                key={menu.id}
                className="relative group"
                onMouseEnter={() => menu.submenu && toggleSubmenu(menu.id)}
                onMouseLeave={() => menu.submenu && toggleSubmenu(null)}
              >
                <button
                  onClick={() => handleMenuClick(menu.path)}
                  className="relative inline-block px-3 py-2 hover:text-secondary"
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
                      className="absolute left-0 w-48 mt-2 bg-white border shadow-lg top-full "
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
                            className="block w-full px-4 py-2 text-left hover:bg-gray-100 hover:text-secondary"
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
            <button className="primary-btn" onClick={Signinclick}>Sign In</button>
          </ul>
        </div>
        {/* Mobile Hamburger menu section */}
        <div className="static">
  {/* Mobile Hamburger Icon */}
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="fixed z-[1000] cursor-pointer lg:hidden top-16 right-6"
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
    className="fixed top-0 right-0 z-50 flex flex-col w-4/5 h-screen gap-6 px-6 py-8 text-white bg-gray-900 shadow-lg"
  >
    <ul className="flex flex-col gap-4 mt-10">
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
                      className="block w-full px-4 py-2 text-left md:hover:bg-gray-100 hover:text-secondary"
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
    <button className="px-4 py-2 bg-yellow-500 rounded-md hover:bg-yellow-600" onClick={Signinclick}>
       Sign In 
    </button>
  </motion.div>
</div>

      </motion.div>
    </nav>
  );
};

export default Navbar;
