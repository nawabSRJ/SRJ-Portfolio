import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import clgLogo from "../assets/npgcLogo.jpg";

const Education = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="py-20 px-4 text-center max-w-3xl mx-auto" id="education">
      <motion.h2
        className="text-3xl font-bold mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Education
      </motion.h2>

      <motion.div
        className="relative group overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 shadow-md hover:shadow-lg transition-all duration-300 bg-white dark:bg-neutral-900"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Spotlight Hover Effect */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 rounded-xl z-0"
          style={{
            background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(16, 185, 129, 0.15), transparent 80%)`,
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-4">
          <img src={clgLogo} alt="NPGC" className="w-16 h-16 rounded-full" />
          <h3 className="text-lg font-semibold">
            Bachelors of Computer Application
          </h3>
          <p className="text-gray-600 dark:text-gray-400 hover:underline cursor-pointer">
            <a href="https://www.npgc.in/" target="_blank">National Post Graduate College</a>
          </p>
          <p className="text-sm text-gray-500">May 2025</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
