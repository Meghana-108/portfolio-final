import lettergen from "../Assets/Images/lettergen.png";
import milletconnect from "../Assets/Images/milletconnect.png";

function Project() {
  return (
    <section
      id="projects"
      className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20" style={{ fontFamily: "Roboto, sans-serif" }}>
        <h2 className="animate-bounce w-30 h-10 text-center text-4xl text-ohogreen font-bold dark:text-teal-400">
          Projects
        </h2>

        {/* Project 1: Letter Generator */}
        <div className="group flex flex-col md:flex-row items-center mb-12 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-ohogreen min-h-[350px]">
          {/* Left Side: Project Info */}
          <div className="w-full md:w-1/2 md:pr-8 mb-6 md:mb-0">
            <h3 className="text-3xl font-semibold text-dark dark:text-white mb-4">
              Letter Generator
            </h3>
            <p className="text-dark dark:text-gray-300 mb-4">
              A tool to automatically generate personalized letters for various purposes.
              Users can input details, and the app generates tailored letters instantly.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="px-4 py-2 bg-ohogreen text-white text-sm font-medium rounded-full shadow-md transform transition-all duration-200 hover:bg-teal-900 hover:scale-105">
                HTML
              </span>
              <span className="px-4 py-2 bg-ohogreen text-white text-sm font-medium rounded-full shadow-md transform transition-all duration-200 hover:bg-teal-900 hover:scale-105">
                CSS
              </span>
              <span className="px-4 py-2 bg-ohogreen text-white text-sm font-medium rounded-full shadow-md transform transition-all duration-200 hover:bg-teal-900 hover:scale-105">
                JavaScript
              </span>
              <span className="px-4 py-2 bg-ohogreen text-white text-sm font-medium rounded-full shadow-md transform transition-all duration-200 hover:bg-teal-900 hover:scale-105">
                Node.js
              </span>
              <span className="px-4 py-2 bg-ohogreen text-white text-sm font-medium rounded-full shadow-md transform transition-all duration-200 hover:bg-teal-900 hover:scale-105">
                SQL
              </span>
            </div>

            <a
              href="https://github.com/Kshamas123/Letter_generator.git"
              className="text-ohogreen font-medium hover:underline"
            >
              View Project →
            </a>
          </div>

          {/* Right Side: Project Image */}
          <div className="w-full md:w-1/2">
            <img
              src={lettergen}
              alt="Letter Generator Project Screenshot"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Project 2: Millet Connect */}
        <div className="group flex flex-col md:flex-row-reverse items-center bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-yellow-400 min-h-[350px]">
          {/* Left Side: Project Info */}
          <div className="w-full md:w-1/2 md:pl-8 mb-6 md:mb-0">
            <h3 className="text-3xl font-semibold text-dark dark:text-white mb-4">
              Millet Connect
            </h3>
            <p className="text-dark dark:text-gray-300 mb-4">
              MilletConnect: A Comprehensive Platform for Millet Awareness, Nutrition, and Health Tracking
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="px-4 py-2 bg-yellow-500 text-white text-sm font-medium rounded-full shadow-md transform transition-all duration-200 hover:bg-yellow-400 hover:scale-105">
                React.js
              </span>
              <span className="px-4 py-2 bg-yellow-500 text-white text-sm font-medium rounded-full shadow-md transform transition-all duration-200 hover:bg-yellow-400 hover:scale-105">
                Node.js
              </span>
              <span className="px-4 py-2 bg-yellow-500 text-white text-sm font-medium rounded-full shadow-md transform transition-all duration-200 hover:bg-yellow-400 hover:scale-105">
                tailwindcss
              </span>
              <span className="px-4 py-2 bg-yellow-500 text-white text-sm font-medium rounded-full shadow-md transform transition-all duration-200 hover:bg-yellow-400 hover:scale-105">
                SQL
              </span>
            </div>

            <a
              href="https://github.com/Apeksha-L-Naik/MilletConnect.git"
              className="text-yellow-500 font-medium hover:underline"
            >
              View Project →
            </a>
          </div>

          {/* Right Side: Project Image */}
          <div className="w-full md:w-1/2">
            <img
              src={milletconnect}
              alt="Millet Connect Project Screenshot"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
