import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext"; // Adjust the path if needed
import "./Header.css";

const Header = ({ activeSection }) => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [menuOpen]);

  const sectionColors = {
    home: "#00ffff",
    experience: "#ffa500",
    education: "#00ff00",
    projects: "#00FFFF",
    skills: "#FFA500",
    contact: "#1e90ff",
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header
      className="header"
      style={{
        backgroundColor: theme === "dark" ? "#111" : "#fff",
        boxShadow: theme === "light" ? "0 2px 5px rgba(0,0,0,0.1)" : "none",
      }}
    >
      <div className="header-container">
        {/* Hamburger menu icon (only when menu is closed) */}
        {!menuOpen && (
          <button
            className="menu-icon"
            onClick={toggleMenu}
            style={{ color: theme === "dark" ? "#fff" : "#111" }}
          >
            ☰
          </button>
        )}

        {/* Overlay behind modal */}
        {menuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}

        {/* Sliding Drawer Menu */}
        <nav
          className={`nav-links ${menuOpen ? "open" : ""} ${
            theme === "dark" ? "dark" : "light"
          }`}
        >
          {Object.keys(sectionColors).map((section) => {
            const isActive = activeSection === section;
            return (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => setMenuOpen(false)}
                className={`nav-link ${isActive ? "active" : ""} ${
                  theme === "dark" ? "dark" : "light"
                }`}
                style={{ "--active-color": sectionColors[section] }}
              >
                {section}
              </a>
            );
          })}

          {/* Theme Toggle Button */}
          <button
            onClick={() => {
              toggleTheme();
              setMenuOpen(false);
            }}
            className="theme-toggle-btn"
            style={{
              backgroundColor: theme === "dark" ? "#fff" : "#111",
              color: theme === "dark" ? "#111" : "#fff",
            }}
          >
            {theme === "dark" ? "☀ Light" : "🌙 Dark"}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
