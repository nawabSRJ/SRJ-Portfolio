import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ContactModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="relative bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white rounded-2xl p-6 w-full max-w-md shadow-xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition text-xl cursor-pointer"
              title="Close"
            >
              <FaTimes />
            </button>

            {/* Content */}
            <div className="text-center space-y-4 text-[17px]">
              <h2 className="text-2xl font-semibold">For My Contact Info 📬</h2>
              <p>Either:</p>
              <ul className="text-left list-disc list-inside space-y-1">
                <li>📄 Download my resume, OR</li>
                <li>💬 Leave a message in the "Get in Touch" section</li>
              </ul>
              <p className="text-green-500 font-medium">🙏 Thank you!</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
