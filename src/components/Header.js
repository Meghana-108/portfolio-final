import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check the saved theme in localStorage or default to light mode
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <header className="bg-custom text-ohogreen p-4 dark:bg-gray-900 dark:text-teal-400 fixed top-0 left-0 w-full z-10" style={{ fontFamily: "Roboto, sans-serif" }}>

      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">ッ</h1>
        <nav className="space-x-9 text-xm flex items-center space-x-4 md:space-x-9">
    
          <a
            href="#about"
            className="relative before:absolute before:left-1/2 before:bottom-[-5px] before:w-0 before:h-1 before:bg-yellow-400 dark:before:bg-gray-400 hover:before:w-full hover:before:left-0 transition-all duration-1500 ease-out"
          >
            About
          </a>
          <a
            href="#projects"
            className="relative before:absolute before:left-1/2 before:bottom-[-5px] before:w-0 before:h-1 before:bg-yellow-400 dark:before:bg-gray-400 hover:before:w-full hover:before:left-0 transition-all duration-1500 ease-out"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="relative before:absolute before:left-1/2 before:bottom-[-5px] before:w-0 before:h-1 before:bg-yellow-400 dark:before:bg-gray-400 hover:before:w-full hover:before:left-0 transition-all duration-1500 ease-out"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="relative before:absolute before:left-1/2 before:bottom-[-5px] before:w-0 before:h-1 before:bg-yellow-400 dark:before:bg-gray-400 hover:before:w-full hover:before:left-0 transition-all duration-1500 ease-out"
          >
            Contact
          </a>
        </nav>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
        >
          {isDarkMode ? (
            <FaSun className="text-yellow-400" />
          ) : (
            <FaMoon className="text-sky-500" />
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
