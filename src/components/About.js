import { useState } from "react";

function About() {
  const [stars, setStars] = useState([]);

  const handleMouseMove = (e) => {
    const newStar = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
    };

    setStars((prevStars) => [...prevStars, newStar]);

    // Remove the star after the shooting animation completes (2 seconds)
    setTimeout(() => {
      setStars((prevStars) => prevStars.filter((star) => star.id !== newStar.id));
    }, 2000);
  };

  return (
    <section
      id="about"
      className="bg-custom dark:bg-gray-900 py-8 mt-0 relative"
      onMouseMove={handleMouseMove}
    >
      <div className="container mx-auto text-left h-screen">
        <p className="text-6xl text-ohogreen dark:text-teal-400 font-sans pl-8 pt-20 mt-20 animate-bounce font-mono">
          Namaste, I’m Meghana!
        </p>
        <p className="text-2xl text-ohogreen dark:text-teal-400 font-sans pl-8 mt-20" style={{ fontFamily: "Roboto, sans-serif" }}>
          I'm passionate about creating solutions and constantly improving my skills to solve real-world problems. Feel free to explore my portfolio and reach out if you'd like to collaborate or have any questions!
        </p>
      </div>

      {/* Shooting Stars Animation */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute opacity-100 animate-shootingStar"
          style={{
            left: `${star.x}px`,
            top: `${star.y}px`,
            width: "12px",
            height: "12px",
            clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          }}
        >
          {/* White in dark mode, Yellow in light mode */}
          <div className="w-full h-full bg-yellow-500 dark:bg-white" />
        </div>
      ))}
    </section>
  );
}

export default About;
