import { useState } from "react";
import { motion } from "framer-motion";
import experiences from "../data/experiences";

const Experience = () => {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto" id="experience">
      {/* Heading */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-extrabold tracking-tight">
          Experience
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm">
          Where I’ve worked and what I’ve done
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative border-l-2 border-gray-200 dark:border-neutral-700 pl-6 space-y-10">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} index={index} />
        ))}
      </div>
    </section>
  );
};

const ExperienceCard = ({ exp, index }) => {
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
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      className="relative"
    >
      {/* Timeline Dot */}
      <div className="absolute -left-[11px] top-2 w-5 h-5 bg-green-500 rounded-full border-4 border-white dark:border-neutral-900 shadow z-20" />

      {/* Card */}
      <div
        onMouseMove={handleMouseMove}
        className="relative group bg-white dark:bg-neutral-900 
                   border border-neutral-200 dark:border-neutral-800
                   rounded-2xl p-6 shadow-sm hover:shadow-lg 
                   transition-all duration-300 overflow-hidden"
      >
        {/* Cursor Glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
          style={{
            background: `radial-gradient(250px circle at ${pos.x}px ${pos.y}px, rgba(16,185,129,0.18), transparent 70%)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex items-start gap-4">
          {/* Icon */}
          <div className="w-12 h-12 rounded-xl bg-black dark:bg-white 
                          flex items-center justify-center text-lg 
                          text-white dark:text-black shadow">
            {exp.icon}
          </div>

          {/* Text */}
          <div className="flex-1">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h3 className="text-lg font-semibold tracking-tight">
                {exp.role}
              </h3>
              <span className="text-xs px-3 py-1 rounded-full 
                               bg-gray-100 dark:bg-neutral-800 
                               text-gray-600 dark:text-gray-300">
                {exp.duration}
              </span>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
              {exp.company}
            </p>

            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {exp.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;