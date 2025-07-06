// // src/components/ThemeToggle.jsx
// import { useEffect, useState } from "react";

// const ThemeToggle = () => {
//   const [isDark, setIsDark] = useState(() =>
//     document.documentElement.classList.contains("dark")
//   );

//   useEffect(() => {
//     if (isDark) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [isDark]);

//   return (
//     <button
//       onClick={() => setIsDark(!isDark)}
//       className="p-2 hover:scale-110 transition"
//       aria-label="Toggle Theme"
//     >
//       {isDark ? "🌞" : "🌙"}
//     </button>
//   );
// };

// export default ThemeToggle;
