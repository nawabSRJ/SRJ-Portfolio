import { useState } from "react";
import { motion } from "framer-motion";
import clgLogo from "../assets/npgcLogo.jpg";

const Education = () => {
  return (
    <section
      className="py-20 px-4 max-w-3xl mx-auto text-center"
      id="education"
    >
      {/* Heading */}
      <motion.div
        className="mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-extrabold tracking-tight">
          Education
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm">
          My academic background
        </p>
      </motion.div>

      <EducationCard />
    </section>
  );
};

const EducationCard = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="relative group overflow-hidden rounded-2xl 
                 border border-neutral-200 dark:border-neutral-800 
                 bg-white dark:bg-neutral-900 
                 p-8 shadow-sm hover:shadow-xl 
                 transition-all duration-300"
    >
      {/* Cursor Glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: `radial-gradient(250px circle at ${pos.x}px ${pos.y}px, rgba(16,185,129,0.18), transparent 70%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-4">
        {/* Logo */}
        <div className="p-2 rounded-full bg-gray-100 dark:bg-neutral-800 shadow">
          <img
            src={clgLogo}
            alt="NPGC"
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>

        {/* Degree */}
        <h3 className="text-lg font-semibold tracking-tight">
          Bachelors of Computer Application
        </h3>

        {/* College */}
        <a
          href="https://www.npgc.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 text-sm 
                     hover:text-green-500 transition"
        >
          National Post Graduate College
        </a>

        {/* Date Badge */}
        <span
          className="text-xs px-3 py-1 rounded-full 
                     bg-gray-100 dark:bg-neutral-800 
                     text-gray-600 dark:text-gray-300"
        >
          May 2025
        </span>
      </div>
    </motion.div>
  );
};

export default Education;