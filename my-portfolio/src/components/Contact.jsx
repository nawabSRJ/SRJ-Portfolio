import { useState } from "react";
import { FaEnvelope } from "react-icons/fa"; // Gmail icon
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/send-email`, formData);
      alert("Message sent successfully!");
      setFormData({ email: "", message: "" });
    } catch (error) {
      console.error("Email send error", error);
      alert("Failed to send message.");
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
      <p className="mb-6 text-gray-400 dark:text-gray-300">
        Have a Question? Let's Chat!
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Your Email"
          className="w-full px-4 py-2 rounded-md border bg-white dark:bg-black border-gray-300 dark:border-gray-700 text-black dark:text-white"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Your message"
          rows="5"
          className="w-full px-4 py-2 rounded-md border bg-white dark:bg-black border-gray-300 dark:border-gray-700 text-black dark:text-white"
        ></textarea>

        {/* Send Message */}
        <button
          onClick={handleSubmit}
          type="submit"
          className="w-full bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-md hover:opacity-90 transition cursor-pointer"
        >
          Send message
        </button>
        <span className="text-xl font-sans">OR</span>
        {/* Gmail Compose Button */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=srajan.saxena7@gmail.com"
          target="_blank"
          // rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 mt-4 
             bg-red-600 hover:bg-red-700 
             dark:bg-red-500 dark:hover:bg-red-400 
             text-white px-4 py-2 rounded-md transition cursor-pointer"
        >
          <FaEnvelope className="text-white" />
          Compose in Gmail
        </a>
      </form>
    </section>
  );
};

export default Contact;
