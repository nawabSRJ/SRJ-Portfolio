import { FaTimes, FaFileDownload, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ContactModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 100, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="relative bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl 
                       text-neutral-900 dark:text-white rounded-3xl p-8 w-full max-w-md 
                       shadow-2xl border border-white/20 dark:border-neutral-700"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 
                         transition text-lg cursor-pointer"
              title="Close"
            >
              <FaTimes />
            </button>

            {/* Content */}
            <div className="text-center space-y-5">
              <h2 className="text-2xl font-semibold tracking-tight">
                Get in Touch
              </h2>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Want my contact details? You can:
              </p>

              {/* Options */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-xl 
                                bg-gray-100 dark:bg-neutral-800 hover:scale-[1.02] 
                                transition">
                  <FaFileDownload className="text-green-500" />
                  <span className="text-sm">
                    Download my resume
                  </span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl 
                                bg-gray-100 dark:bg-neutral-800 hover:scale-[1.02] 
                                transition">
                  <FaEnvelope className="text-blue-500" />
                  <span className="text-sm">
                    Leave a message in the “Get in Touch” section
                  </span>
                </div>
              </div>

              <p className="text-green-500 font-medium text-xl pt-2">
                Thanks for reaching out!
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;