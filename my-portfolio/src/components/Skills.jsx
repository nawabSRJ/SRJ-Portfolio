import { motion } from "framer-motion";

const skills = [
  "HTML", "CSS", "JavaScript", "React",
  "Node.js", "Express.js", "MongoDB",
  "PostgreSQL", "MySQL", "Tailwind CSS",
  "Git", "C++", "Python"
];

const Skills = () => {
  return (
    <section
      className="py-20 px-4 max-w-5xl mx-auto text-center"
      id="skills"
    >
      {/* Heading */}
      <motion.div
        className="mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-extrabold tracking-tight">
          Skills
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm">
          Technologies I work with
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <SkillPill key={index} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
};

const SkillPill = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      whileHover={{ y: -3, scale: 1.05 }}
      className="relative group"
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(16,185,129,0.18), transparent 70%)",
        }}
      />

      {/* Pill */}
      <div
        className="relative z-10 px-5 py-2.5 rounded-full text-sm font-medium
                   bg-gray-100 dark:bg-neutral-800 
                   text-gray-800 dark:text-gray-200
                   border border-gray-200 dark:border-neutral-700
                   shadow-sm group-hover:shadow-md
                   transition-all duration-300"
      >
        {skill}
      </div>
    </motion.div>
  );
};

export default Skills;