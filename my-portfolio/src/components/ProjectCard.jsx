import { useState, useEffect } from "react";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";
import projects from "./../data/projects";

const ProjectCard = ({ project }) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const images = import.meta.glob("../assets/*", {
    eager: true,
    import: "default",
  });

  useEffect(() => {
    // console.log(projects[0].icon) giving false
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative group overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 shadow-sm hover:shadow-lg transition-all duration-300 bg-white dark:bg-neutral-900 h-full flex flex-col justify-between">

      {/* Torch effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 rounded-xl z-0"
        style={{
          background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(16, 185, 129, 0.15), transparent 80%)`,
        }}
      />

      <div className="relative z-10">
        {/* Optional icon placeholder */}
        <div className="w-12 h-12 mb-3 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black text-lg">
          {project.icon && images[`../assets/${project.icon}`] ? (
            <img
              src={images[`../assets/${project.icon}`]}
              alt="project icon"
              className="w-12 h-12 object-cover rounded-full"
            />
          ) : (
            <FaCode />
          )}
        </div>

        <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-200 dark:bg-gray-700 text-sm px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
            >
              <FaExternalLinkAlt />
              Website
            </a>
          )}
          {project.source && (
            <a
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
            >
              <FaCode />
              Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
