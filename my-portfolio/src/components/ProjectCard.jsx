import { useState } from "react";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);

  const images = import.meta.glob("../assets/*", {
    eager: true,
    import: "default",
  });

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -6 }}
      className="relative group rounded-2xl overflow-hidden border 
                 border-neutral-200 dark:border-neutral-800 
                 bg-white dark:bg-neutral-900 
                 shadow-sm hover:shadow-xl transition-all duration-300 
                 h-full flex flex-col justify-between"
    >
      {/* Glow Effect (centered, not cursor-based → cleaner UX) */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
        style={{
          background:
            "radial-gradient(circle at center, rgba(16,185,129,0.12), transparent 70%)",
        }}
      />

      <div className="relative z-10 p-6 flex flex-col h-full">
        {/* Top Section */}
        <div>
          {/* Icon */}
          <div className="w-12 h-12 mb-4 rounded-xl bg-black dark:bg-white 
                          flex items-center justify-center text-white dark:text-black text-lg shadow">
            {project.icon && images[`../assets/${project.icon}`] ? (
              <img
                src={images[`../assets/${project.icon}`]}
                alt="project icon"
                className="w-12 h-12 object-cover rounded-xl"
              />
            ) : (
              <FaCode />
            )}
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold mb-2 tracking-tight">
            {project.name}
          </h3>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="text-xs px-3 py-1 rounded-full 
                           bg-gray-100 dark:bg-neutral-800 
                           text-gray-700 dark:text-gray-300 
                           border border-gray-200 dark:border-neutral-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex gap-3 mt-auto">
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 
                         px-4 py-2.5 rounded-lg text-sm font-medium
                         bg-black text-white hover:bg-gray-800 
                         transition"
            >
              <FaExternalLinkAlt className="text-xs" />
              Live
            </a>
          )}

          {project.source && (
            <a
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 
                         px-4 py-2.5 rounded-lg text-sm font-medium
                         border border-gray-300 dark:border-neutral-700 
                         hover:bg-gray-100 dark:hover:bg-neutral-800 
                         transition"
            >
              <FaCode className="text-xs" />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;