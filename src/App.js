import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check local storage for theme preference
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.body.classList.remove("dark");
    }
  }, []);

  // Toggle dark mode on button click
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
    <div>
      {/* Pass toggleTheme and isDarkMode as props to Header */}
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      {/* Increase padding-top here to clear the header */}
      <div className="pt-[60px]">
        <About />
        <Education />
        <Skills />
        <Project />
        <Contact />
      </div>
    </div>
  );
};

export default App;
