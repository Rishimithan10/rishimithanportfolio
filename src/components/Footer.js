import React from "react";
import { useTheme } from "./ThemeContext";

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer
      style={{
        textAlign: "center",
        backgroundColor: isDark ? "#111" : "#f5f5f5",
        color: isDark ? "#ccc" : "#333",
        fontSize: "0.9rem",
      }}
    >
      Designed by Rishimithan © {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
