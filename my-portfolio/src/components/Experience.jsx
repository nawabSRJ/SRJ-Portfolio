import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import experiences from '../data/experiences';



const Experience = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto" id="experience">
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-xl p-5 border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xl transition-all duration-300 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Torch light hover effect */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 rounded-xl z-0"
              style={{
                background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(16, 185, 129, 0.15), transparent 80%)`,
              }}
            />

            <div className="flex items-start gap-4 relative z-10">
              <div className="w-12 h-12 rounded-full bg-black dark:bg-white flex items-center justify-center text-lg">
                {exp.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{exp.role}</h3>
                <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{exp.description}</p>
              </div>
              <div className="text-sm text-gray-500">{exp.duration}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
