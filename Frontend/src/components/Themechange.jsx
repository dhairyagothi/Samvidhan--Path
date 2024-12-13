
import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import the icons

const ThemeChange = () => {
  // State to determine whether the dark mode is enabled
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme') === 'dark' ? true : false
  );

  useEffect(() => {
    // Apply the dark or light class to the body element
    if (isDarkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const handleThemeChange = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="flex items-center space-x-4">
      <button onClick={handleThemeChange} className="text-2xl">
        {isDarkMode ? (
          <FaSun className="text-yellow-500" />
        ) : (
          <FaMoon className="text-blue-500" />
        )}
      </button>
    </div>
  );
};

export default ThemeChange;
