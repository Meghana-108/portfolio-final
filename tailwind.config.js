const { keyframes } = require('framer-motion');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        custom: "#f7fee7",
        dark: "#1f2937",
        ohogreen: "#396f66",
        yelleee: "#fde047",
        orag: "#f97316",
      },
      animation: {
        shootingStar: "shootingStar 2s ease-in-out", // Shooting star animation
        scaleIn: "scaleIn 0.5s ease-out", // Animation for scale in effect
        hoverGlow: "hoverGlow 1s ease-in-out infinite", // Glowing effect for hover
        rotate: "rotate 2s linear infinite", // Smooth rotation
      },
      keyframes: {
        shootingStar: {
          "0%": { transform: "translate(0, 0) scale(1)", opacity: 1 },
          "100%": {
            transform: "translate(200px, -300px) scale(0)",
            opacity: 0,
          },
        },
        
        scaleIn: {
          "0%": { transform: "scale(0.8)" },
          "100%": { transform: "scale(1)" },
        },
        hoverGlow: {
          "0%": { boxShadow: "0 0 10px #fde047" },
          "50%": { boxShadow: "0 0 20px #fde047" },
          "100%": { boxShadow: "0 0 10px #fde047" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
       
      },
    },
  },
  plugins: [],
};
