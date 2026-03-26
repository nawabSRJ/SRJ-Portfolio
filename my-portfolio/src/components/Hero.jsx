import { motion } from "framer-motion";
import myPic from "../assets/my-pfp-ghibli.png";
import ContactModal from "./ContactModal";
import { useState } from "react";

const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="w-full flex justify-center py-10 pt-[140px] dark:bg-black">
      <div className="w-full max-w-3xl flex flex-col items-center text-center px-4">

        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="relative group"
        >
          {/* Glow ring */}
          <div className="absolute inset-0 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition"
            style={{
              background:
                "radial-gradient(circle, rgba(16,185,129,0.35), transparent 70%)",
            }}
          />

          <img
            src={myPic}
            alt="Profile"
            className="relative w-40 h-40 rounded-full object-cover shadow-xl border-4 border-white dark:border-neutral-900"
          />
        </motion.div>

        {/* Name */}
        <h1 className="text-4xl md:text-5xl font-extrabold mt-8 tracking-tight">
          Hi, I'm <span className="text-green-500">Srajan Saxena</span>
        </h1>

        {/* Subtitle / Bio */}
        <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl leading-relaxed text-base md:text-lg">
          21, I love to build products, learn new tech, and try to make my code
          provide value to others. I enjoy talking about startups, cricket,
          cinema and stories. I truly believe we all are debuggers here, debugging our own
          issues. If you're looking for a dedicated computer science
          professional, you've just landed on the right page.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex gap-4 flex-wrap justify-center">
          <a href="/my-resume.pdf" download="Srajan_Resume.pdf">
            <button
              className="px-6 py-3 rounded-full text-sm font-medium
                         bg-black text-white dark:bg-white dark:text-black
                         shadow-md hover:shadow-xl transition-all cursor-pointer"
            >
              Download Resume
            </button>
          </a>

          <button
            onClick={() => setModalOpen(true)}
            className="px-6 py-3 rounded-full text-sm font-medium
                       border border-gray-300 dark:border-neutral-700
                       hover:bg-gray-100 dark:hover:bg-neutral-800
                       transition-all cursor-pointer"
          >
            Contact Me
          </button>
        </div>

        {/* Modal */}
        <ContactModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      </div>
    </section>
  );
};

export default Hero;