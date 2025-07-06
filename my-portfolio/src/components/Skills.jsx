// src/components/Skills.jsx
import { motion } from "framer-motion";

const skills = [
  "HTML", "CSS", "JavaScript", "React","Node.js", "Express.js","MongoDB",
  "PostgreSQL","MySQL","Tailwind CSS", "Git", "C++","Python"
];

const Skills = () => {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto text-center" id="skills">
      <motion.h2
        className="text-3xl font-bold mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            className="bg-black dark:bg-gray-200 text-white dark:text-black px-4 py-2 rounded-md text-sm font-medium"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.03 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
