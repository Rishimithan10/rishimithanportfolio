// src/components/ThemeContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
  document.body.classList.toggle("dark", theme === "dark");
}, [theme]);

  useEffect(() => {
    document.body.style.backgroundColor = theme === "dark" ? "#111" : "#f5f5f5";
    document.body.style.color = theme === "dark" ? "#fff" : "#111";
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// ✅ This hook must be exported
export const useTheme = () => useContext(ThemeContext);
