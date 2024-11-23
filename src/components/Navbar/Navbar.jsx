import React from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import samvidhanPathLogo from "../../assets/samvidhanpath.png";

const NavbarMenu = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Constitution of India", path: "/constitution" },
  { id: 3, title: "Explore", path: "/explore" },
  { id: 4, title: "Learn", path: "/learn" },
  { id: 5, title: "For Citizen", path: "/citizen" },
  { id: 6, title: "Engage", path: "/engage" },
  { id: 7, title: "E-Books", path: "/ebooks" },
  { id: 8, title: "Games", path: "/games" },
];

const Navbar = () => {
  const navigate = useNavigate();

  const handleMenuClick = (path) => {
    navigate(path);
  };

  return (
    <nav className="relative z-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container flex items-center justify-between py-6"
      >
        {/* Logo section */}
        
        
        <div className="flex flex-row gap-3">
      
          <img className="w-auto h-20" src={samvidhanPathLogo} alt="logo" />
           <div className="flex flex-col justify-center items-left">
          <h1 className="text-2xl font-bold">Samvidhan Path </h1>
          <h1 className="text-2xl font-bold">संविधान पथ </h1>
          </div>
        </div>
        {/* Menu section */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <button
                  onClick={() => handleMenuClick(menu.path)}
                  className="relative inline-block px-3 py-2 hover:text-secondary group"
                >
                  <div className="absolute bottom-0 hidden w-2 h-2 mt-4 -translate-x-1/2 rounded-full bg-secondary left-1/2 top-1/2 group-hover:block"></div>
                  {menu.title}
                </button>
              </li>
            ))}
            <button className="primary-btn">Sign In</button>
          </ul>
        </div>
        {/* Mobile Hamburger menu section */}
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl" />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
