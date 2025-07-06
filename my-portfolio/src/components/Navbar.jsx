import { useState, useEffect } from "react";
import {
  FaHome,
  FaCode,
  FaUser,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdSunny, IoMdMoon } from "react-icons/io";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (saved) {
      setTheme(saved);
    } else if (systemPrefersDark) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const iconColor = theme === "dark" ? "#ffffff" : "#000000";

  const navItems = [
    { icon: <FaHome />, label: "Home", href: "/" },
    { icon: <FaCode />, label: "Projects", href: "/projects" },
    { icon: <FaUser />, label: "About", href: "/about-me" },
    { icon: <FaGithub />, label: "GitHub", href: "https://github.com/nawabSRJ" },
    { icon: <FaXTwitter />, label: "Twitter", href: "https://x.com/nawabSRJ" },
    { icon: <FaLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/srajan-saxena-a6509a248/" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full flex justify-center fixed top-0 z-50"
      >
        <div className="rounded-full px-10 py-2 backdrop-blur-lg bg-white/10 dark:bg-white/10 border border-gray-300 dark:border-white/20 shadow dark:shadow-none flex items-center gap-7 mt-5">
          {navItems.map((item, idx) => {
            const isExternal = item.href.startsWith("http");

            const content = (
              <span
                className="text-[18px] transition-colors duration-300"
                style={{ color: iconColor }}
              >
                {item.icon}
              </span>
            );

            return (
              <div
                key={idx}
                className="hover:px-3 py-2 transition-all duration-300 rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-[#262626]"
                title={item.label}
              >
                {isExternal ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {content}
                  </a>
                ) : (
                  <Link to={item.href}>{content}</Link>
                )}
              </div>
            );
          })}

          <div
            className="hover:px-3 py-2 transition-all duration-300 rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-[#262626]"
            onClick={toggleTheme}
            title="Toggle Theme"
          >
            {theme === "dark" ? (
              <IoMdSunny style={{ color: "#facc15" }} className="text-[18px]" />
            ) : (
              <IoMdMoon style={{ color: "#4b5563" }} className="text-[18px]" />
            )}
          </div>
        </div>
      </motion.nav>

      {/* Hidden ThemeSwitch to keep syncing system preferences */}
      <ThemeSwitch onThemeChange={setTheme} />
    </>
  );
};

export default Navbar;
