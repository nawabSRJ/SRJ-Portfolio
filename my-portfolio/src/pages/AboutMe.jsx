import React from "react";
import Navbar from "./../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";


const AboutMe = () => {
  return (
    <>
      <div className="text-center text-xl bg-white dark:bg-transparent text-black dark:text-white w-full min-h-screen flex flex-col justify-center items-center">
        <Navbar />
        <br />
        <AnimatePresence>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }} 
            className="info-container w-[60%] h-fit px-4 py-2 text-left">
            <h1 className="text-center text-black dark:text-white font-extrabold text-3xl my-5">
              My Journey
            </h1>
            <ul className="space-y-7">
              <li>
                📌In 2025, I graduated from my college with a degree in Computer
                Science (BCA)
              </li>
              <li>
                📌Took my first flight✈️ to Bangalore for in-office internship
                as a Data Analyst & SDE
              </li>
              <li>
                📌Got recommended by my first startup internship founders to
                another startup
              </li>
              <li>
                📌End of 2024 : Started working with a startup as a MERN Stack
                Developer
              </li>
              <li>
                📌Summer of 2024 : Started my MERN Stack Journey after making a
                lot of simple projects in HTML, CSS & JS
              </li>
              <li>
                📌2024 Starting : Started my development journey with HTML, CSS
                & JS
              </li>
              <li>
                📌2022-2023 : Got into college and started focusing on my
                college studies. Learned programming languages like C++, Python
                and also started my DSA journey.
              </li>
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default AboutMe;
