import { useState } from "react";
import { FaEnvelope, FaPaperPlane } from "react-icons/fa";
import axios from "axios";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/send-email`,
        formData
      );
      alert("Message sent successfully!");
      setFormData({ email: "", message: "" });
    } catch (error) {
      console.error("Email send error", error);
      alert("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 max-w-4xl mx-auto text-center"
    >
      {/* Heading */}
      <motion.div
        className="mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-4xl font-extrabold tracking-tight">
          Get in Touch
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm">
          Have a question or want to work together? Let’s talk.
        </p>
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative group max-w-lg mx-auto rounded-2xl 
                   border border-neutral-200 dark:border-neutral-800 
                   bg-white dark:bg-neutral-900 
                   p-8 shadow-sm hover:shadow-xl transition-all"
      >
        {/* Subtle Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl"
          style={{
            background:
              "radial-gradient(circle at center, rgba(16,185,129,0.12), transparent 70%)",
          }}
        />

        <form
          onSubmit={handleSubmit}
          className="relative z-10 space-y-5"
        >
          {/* Email */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your email"
            className="w-full px-4 py-3 rounded-lg 
                       bg-gray-100 dark:bg-neutral-800 
                       border border-gray-200 dark:border-neutral-700
                       text-black dark:text-white text-sm
                       focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Message */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your message"
            rows="5"
            className="w-full px-4 py-3 rounded-lg 
                       bg-gray-100 dark:bg-neutral-800 
                       border border-gray-200 dark:border-neutral-700
                       text-black dark:text-white text-sm
                       focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Send Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 
                       bg-black dark:bg-white 
                       text-white dark:text-black 
                       px-4 py-3 rounded-lg text-sm font-medium
                       hover:opacity-90 transition disabled:opacity-60"
          >
            <FaPaperPlane className="text-xs" />
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <div className="flex-1 h-px bg-gray-200 dark:bg-neutral-700" />
            OR
            <div className="flex-1 h-px bg-gray-200 dark:bg-neutral-700" />
          </div>

          {/* Gmail Button */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=srajan.saxena7@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 
                       bg-red-600 hover:bg-red-700 
                       dark:bg-red-500 dark:hover:bg-red-400 
                       text-white px-4 py-3 rounded-lg text-sm font-medium
                       transition"
          >
            <FaEnvelope />
            Compose in Gmail
          </a>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;