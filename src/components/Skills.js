import React from "react";
import GlassIcons from "./GlassIcons";
import { FaChartBar } from "react-icons/fa"; // fallback for Power BI

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaCuttlefish, // used for C/C++
} from "react-icons/fa";
import {
  SiMysql,
} from "react-icons/si";
import { BiBrain } from "react-icons/bi"; // For AI
import { useTheme } from "./ThemeContext";
import { FaCode } from "react-icons/fa"; // good fallback for API
import { FaAws } from "react-icons/fa";


const skills = [
  { icon: <FaCuttlefish />, label: "C", color: "#00599C" },
  { icon: <FaCuttlefish />, label: "C++", color: "#004482" },
  { icon: <FaPython />, label: "Python", color: "#3572A5" },
  { icon: <BiBrain />, label: "AI", color: "#9c27b0" },
  { icon: <FaChartBar />, label: "Power BI", color: "#f2c811" },
  { icon: <FaHtml5 />, label: "HTML", color: "orange" },
  { icon: <FaCss3Alt />, label: "CSS", color: "blue" },
  { icon: <FaReact />, label: "React", color: "cyan" },
  { icon: <SiMysql />, label: "MySQL", color: "#00758f" },
  { icon: <FaCode />, label: "API", color: "#ff9800" },
  { icon: <FaJs />, label: "JavaScript", color: "yellow" },
  { icon: <FaAws />, label: "AWS", color: "#ff9900" },
];

const Skills = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="skills"
      style={{
        minHeight: "100vh",
        paddingTop: "80px",
        padding: "2rem",
        backgroundColor: isDark ? "#111" : "#f9f9f9",
        color: isDark ? "#fff" : "#111",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem", color: isDark ? "#00ffe0" : "#007a6f" }}>
        Skills
      </h2>

      <GlassIcons items={skills} className="glass-icon-grid" />
    </section>
  );
};

export default Skills;
