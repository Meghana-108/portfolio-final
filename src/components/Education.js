import { FaGraduationCap, FaCertificate, FaAward } from "react-icons/fa";
import { motion } from "framer-motion";

function Education() {
  const education = [
    {
      icon: <FaGraduationCap size={40} className="text-white" />,
      title: "B.E",
      institution: "Sahyadri College of Engineering and Management",
      duration: "2022 - 2026",
      description: "Computer Science and Engineering",
      animatedDot: true, // Flag to control animation for B.E
    },
    {
      icon: <FaCertificate size={40} className="text-white" />,
      title: "PUC",
      institution: "Dandathirtha Pre-University",
      duration: "2020-2022",
      description: "PCMB.",
      bgColor: "bg-yellow-400", // Yellow background for PUC
    },
    {
      icon: <FaAward size={40} className="text-white" />,
      title: "Primary and High school",
      institution: "Danthirtha English Medium School",
      duration: "2008-2020",
      description: "The place where my educational journey began, and where memories still inspire me to grow.",
      bgColor: "bg-orange-600", // Orange background for Primary and High School
    },
  ];

  return (
    <section
      id="education"
      className="py-16 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="container mx-auto px-4 md:px-8 relative" style={{ fontFamily: "Roboto, sans-serif" }}>
        {/* Vertical Line */}
        <div className="absolute left-10 top-10 bottom-8 w-1 bg-gray-300 dark:bg-gray-700 opacity-50"></div>

        {/* Section Title */}
        <motion.h2
          className="text-3xl font-semibold mb-12 text-center text-ohogreen dark:text-teal-400"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h2 className="animate-bounce  text-4xl">
            My Educational Journey
          </h2>
        </motion.h2>

        {/* Education Items */}
        <ul className="space-y-16 pl-16 relative">
          {education.map((edu, index) => (
            <motion.li
              key={index}
              className="flex items-start space-x-6 relative"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.3, ease: "easeOut" }}
            >
              {/* Icon & Dot */}
              <motion.div
                className={`relative flex-shrink-0 p-2 rounded-full shadow-lg ${
                  edu.bgColor || "bg-ohogreen dark:bg-teal-500"
                }`}
                whileHover={{
                  rotate: 15,
                  scale: 1.2,
                  transition: { duration: 0.4, ease: "easeInOut" },
                }}
              >
                {edu.icon}
                {/* Animated Dot for "B.E" */}
                {edu.animatedDot && (
                  <div className="absolute top-0 right-0 w-3 h-3">
                    <motion.span
                      className="relative flex h-3 w-3"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.5, 1],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "easeInOut",
                      }}
                    >
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 dark:bg-teal-300 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500 dark:bg-teal-400"></span>
                    </motion.span>
                  </div>
                )}
              </motion.div>

              {/* Text Content */}
              <div>
                <motion.h3
                  className="text-2xl font-bold text-gray-800 dark:text-gray-100"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
                >
                  {edu.title}
                </motion.h3>
                <motion.p
                  className="text-lg text-gray-600 dark:text-gray-400 mt-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                >
                  {edu.institution} | {edu.duration}
                </motion.p>
                <motion.p
                  className="text-lg text-gray-600 dark:text-gray-400 mt-2"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                >
                  {edu.description}
                </motion.p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Education;
