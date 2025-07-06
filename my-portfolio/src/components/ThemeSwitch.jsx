import { useState, useEffect } from "react";

const ThemeSwitch = ({ onThemeChange }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme) {
      setTheme(savedTheme);
      onThemeChange(savedTheme); // Initial sync
    } else if (systemPrefersDark) {
      setTheme("dark");
      onThemeChange("dark");
    } else {
      onThemeChange("light");
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    onThemeChange(theme); // Notify parent on change
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return null; // We will use the toggleTheme function in Navbar instead
};

export default ThemeSwitch;
