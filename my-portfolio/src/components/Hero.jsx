import { motion } from "framer-motion";
import myPic from "../assets/my-pfp-ghibli.png";
import ContactModal from './ContactModal';
import { useState } from 'react';

const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section className="w-full flex justify-center py-5 pt-[140px] dark:bg-black">
      <div className="w-2/3 max-sm:w-full flex flex-col items-center text-center px-4">
        <motion.img
          src={myPic}
          alt="Profile"
          className="w-40 h-40 rounded-full object-contain shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
        />

        <h1 className="text-4xl md:text-5xl font-bold mt-6 tracking-tight">
          Hi, I'm Srajan Saxena
        </h1>

        <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl leading-6 text-base md:text-lg">
          20, I love to build products, learn new tech, and try to make my code
          provide value to others. I enjoy talking about startups, cricket,
          cinema and stories. I truly believe we all are debuggers here, debugging our own
          issues. If you're looking for a dedicated computer science
          professional, you've just landed on the right page.
        </p>

        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <a href="/my-resume.pdf" download="Srajan_Resume.pdf">
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-md hover:shadow-xl transition cursor-pointer">
              Download Resume
            </button>
          </a>
          <button
          onClick={()=>setModalOpen(true)}
          className="px-5 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold shadow-md hover:shadow-xl transition cursor-pointer">
            Contact Me
          </button>
        </div>
         <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </section>
  );
};

export default Hero;

