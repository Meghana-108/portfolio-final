import React from "react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="transition-colors duration-300 bg-custom dark:bg-gray-900 py-10 pt-16" // Increased pt-16 for more space at the top
      style={{ fontFamily: "Roboto, sans-serif" }}
    >
      {/* Section Title */}
      <h2 className="animate-bounce w-30 h-10 text-center text-4xl text-ohogreen font-bold dark:text-teal-400">
        Skills
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 p-10 justify-items-center">
        {/* HTML Skill */}
        <div className="flex flex-col items-center group relative">
          <div className="w-24 h-24 flex justify-center items-center border-4 border-transparent rounded-full group-hover:animate-hoverGlow">
            <i className="devicon-html5-plain text-orange-500 text-5xl"></i>
          </div>
          <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            HTML
          </span>
        </div>

        {/* CSS Skill */}
        <div className="flex flex-col items-center group relative">
          <div className="w-24 h-24 flex justify-center items-center border-4 border-transparent rounded-full group-hover:animate-hoverGlow">
            <i className="devicon-css3-plain text-blue-500 text-5xl"></i>
          </div>
          <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            CSS
          </span>
        </div>

        {/* JavaScript Skill */}
        <div className="flex flex-col items-center group relative">
          <div className="w-24 h-24 flex justify-center items-center border-4 border-transparent rounded-full group-hover:animate-hoverGlow">
            <i className="devicon-javascript-plain text-yellow-500 text-5xl"></i>
          </div>
          <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            JavaScript
          </span>
        </div>

        <div className="flex flex-col items-center group relative">
          <div className="w-24 h-24 flex justify-center items-center border-4 border-transparent rounded-full group-hover:animate-hoverGlow">
            <i className="devicon-react-plain text-teal-400 text-5xl"></i>
          </div>
          <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
         React
          </span>
        </div>

          {/* Tailwind CSS Skill */}
          <div className="flex flex-col items-center group relative">
          <div className="w-24 h-24 flex justify-center items-center border-4 border-transparent rounded-full group-hover:animate-hoverGlow">
            <i className="devicon-tailwindcss-plain text-teal-400 text-5xl"></i>
          </div>
          <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Tailwind CSS
          </span>
        </div>

        <div className="flex flex-col items-center group relative">
          <div className="w-24 h-24 flex justify-center items-center border-4 border-transparent rounded-full group-hover:animate-hoverGlow">
            <i className="devicon-mysql-plain text-teal-400 text-5xl"></i>
          </div>
          <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          Mysql
          </span>
        </div>
        
        {/* C Skill */}
        <div className=" flex flex-col items-center group relative">
          <div className="w-24 h-24 flex justify-center items-center border-4 border-transparent rounded-full group-hover:animate-hoverGlow">
            <i className="devicon-c-plain text-green-500 text-5xl"></i>
          </div>
          <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            C
          </span>
        </div>
        
        {/* C++ Skill */}
        <div className="flex flex-col items-center group relative">
          <div className="w-24 h-24 flex justify-center items-center border-4 border-transparent rounded-full group-hover:animate-hoverGlow">
            <i className="devicon-cplusplus-plain text-yellow-500 text-5xl"></i>
          </div>
          <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            C++
          </span>
        </div>

      
     
     
      </div>
    </section>
  );
};

export default Skills;
