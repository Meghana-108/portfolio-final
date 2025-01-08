import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Importing LinkedIn and GitHub icons

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // Updates the corresponding key in formData
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data to EmailJS
    emailjs
      .sendForm(
        "service_om0f9yi", // Replace with your EmailJS Service ID
        "template_ndtn11m", // Replace with your EmailJS Template ID
        e.target,
        "fUtefd5Poc8DOv3B_" // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          setStatus("Oops! Something went wrong.");
        }
      );
  };

  return (
    <section id="contact" className="py-16 bg-custom dark:bg-gray-900" style={{ fontFamily: "Roboto, sans-serif" }}>
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-center text-[#f7fee7] mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="animate-bounce w-30 h-10 text-center text-4xl text-ohogreen font-bold  dark:text-teal-400">
            Get in Touch
          </h2>
        </motion.h2>

        {/* Contact Form */}
        <motion.div
          className="max-w-lg mx-auto bg-[#2d3748] p-8 rounded-lg shadow-lg border-2 border-[#2d3748] hover:border-[#fde047] transition-all duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label
                htmlFor="name"
                className="block text-lg font-medium text-[#f7fee7]"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 mt-2 bg-[#4a5568] text-white border border-[#2d3748] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fde047]"
                required
              />
            </motion.div>

            {/* Email Field */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label
                htmlFor="email"
                className="block text-lg font-medium text-[#f7fee7]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 mt-2 bg-[#4a5568] text-white border border-[#2d3748] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fde047]"
                required
              />
            </motion.div>

            {/* Message Field */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <label
                htmlFor="message"
                className="block text-lg font-medium text-[#f7fee7]"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full p-4 mt-2 bg-[#4a5568] text-white border border-[#2d3748] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fde047]"
                required
              ></textarea>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full py-3 bg-[#fde047] text-white font-semibold text-lg rounded-lg hover:bg-[#f97316] transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Send Message
            </motion.button>
          </form>

          {status && <p className="mt-4 text-center text-[#fde047]">{status}</p>}
        </motion.div>

        {/* LinkedIn and GitHub Links */}
        <div className="mt-8 text-center " style={{ fontFamily: "Roboto, sans-serif" }}>
          <a
            href="https://www.linkedin.com/in/meghana-417301262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-lg font-medium text-ohogreen hover:text-teal-400 transition duration-300 mx-4 dark:text-teal-400 hover:text-teal-900"
          >
            <FaLinkedin className="inline-block mr-2 text-xl" />
            LinkedIn
          </a>
          <a
            href="https://github.com/Meghana-108" // Replace with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-lg font-medium text-ohogreen hover:text-teal-400 transition duration-300 mx-4 dark:text-teal-400 hover:text-teal-900"
          >
            <FaGithub className="inline-block mr-2 text-xl" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
