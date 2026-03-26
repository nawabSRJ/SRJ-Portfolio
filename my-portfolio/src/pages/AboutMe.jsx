import React from "react";
import Navbar from "./../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";

const AboutMe = () => {
  const journey = [
    "As of 2026, i have appeared in CUET-PG Computer Science paper on 11th March 2026 and am currently waiting for results.",
    "In 2025, I graduated from my college with a degree in Computer Science (BCA)",
    "Took my first flight✈️ to Bangalore for in-office internship as a Data Analyst & SDE",
    "Got recommended by my first startup internship founders to another startup",
    "End of 2024 : Started working with a startup as a MERN Stack Developer",
    "Summer of 2024 : Started my MERN Stack Journey after making a lot of simple projects in HTML, CSS & JS",
    "2024 Starting : Started my development journey with HTML, CSS & JS",
    "2022-2023 : Got into college and started focusing on my college studies. Learned programming languages like C++, Python and also started my DSA journey.",
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-transparent text-black dark:text-white">
      <Navbar />

      <div className="flex flex-col items-center px-4 pt-24 pb-16">
        <AnimatePresence>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="w-full max-w-3xl"
          >
            {/* Heading */}
            <h1 className="text-4xl font-extrabold text-center mb-3 tracking-tight">
              My Journey
            </h1>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-10 text-sm">
              A quick timeline of how things unfolded
            </p>

            {/* Timeline */}
            <div className="relative border-l-2 border-gray-200 dark:border-neutral-700 pl-6 space-y-8">
              {journey.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Dot */}
                  <div className="absolute -left-[11px] top-1 w-5 h-5 bg-green-500 rounded-full border-4 border-white dark:border-neutral-900 shadow" />

                  {/* Card */}
                  <div className="bg-gray-100 dark:bg-neutral-800 p-4 rounded-xl shadow-sm hover:shadow-md transition">
                    <p className="text-sm leading-relaxed">{item}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AboutMe;