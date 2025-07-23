// import React from "react";
// import GlassIcons from "./GlassIcons";
// import { FaChartBar } from "react-icons/fa"; // fallback for Power BI

// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaReact,
//   FaPython,
//   FaCuttlefish, // used for C/C++
// } from "react-icons/fa";
// import {
//   SiMysql,
// } from "react-icons/si";
// import { BiBrain } from "react-icons/bi"; // For AI
// import { useTheme } from "./ThemeContext";
// import { FaCode } from "react-icons/fa"; // good fallback for API
// import { FaAws } from "react-icons/fa";


// const skills = [
//   { icon: <FaCuttlefish />, label: "C", color: "#00599C" },
//   { icon: <FaCuttlefish />, label: "C++", color: "#004482" },
//   { icon: <FaPython />, label: "Python", color: "#3572A5" },
//   { icon: <BiBrain />, label: "AI", color: "#9c27b0" },
//   { icon: <FaChartBar />, label: "Power BI", color: "#f2c811" },
//   { icon: <FaHtml5 />, label: "HTML", color: "orange" },
//   { icon: <FaCss3Alt />, label: "CSS", color: "blue" },
//   { icon: <FaReact />, label: "React", color: "cyan" },
//   { icon: <SiMysql />, label: "MySQL", color: "#00758f" },
//   { icon: <FaCode />, label: "API", color: "#ff9800" },
//   { icon: <FaJs />, label: "JavaScript", color: "yellow" },
//   { icon: <FaAws />, label: "AWS", color: "#ff9900" },
// ];

// const Skills = () => {
//   const { theme } = useTheme();
//   const isDark = theme === "dark";

//   return (
//     <section
//       id="skills"
//       style={{
//         minHeight: "100vh",
//         paddingTop: "80px",
//         padding: "2rem",
//         backgroundColor: isDark ? "#111" : "#f5f5f5",
//         color: isDark ? "#fff" : "#111",
//         textAlign: "center",
//       }}
//     >
//       <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem", color: isDark ? "#00ffe0" : "#007a6f" }}>
//         Skills
//       </h2>

//       <GlassIcons items={skills} className="glass-icon-grid" />
//     </section>
//   );
// };

// export default Skills;


import React from "react";
import { FaChartBar } from "react-icons/fa"; // fallback for Power BI
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaCuttlefish, // used for C/C++
  FaCode,
  FaAws,
} from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { BiBrain } from "react-icons/bi";
import { useTheme } from "./ThemeContext";

const skills = [
  { icon: <FaCuttlefish />, label: "C", color: "#00599C" },
  { icon: <FaCuttlefish />, label: "C++", color: "#004482" },
  { icon: <FaPython />, label: "Python", color: "#3572A5" },
  { icon: <BiBrain />, label: "ML", color: "#9c27b0" },
  { icon: <FaChartBar />, label: "Power BI", color: "#f2c811" },
  { icon: <FaHtml5 />, label: "HTML", color: "orange" },
  { icon: <FaCss3Alt />, label: "CSS", color: "blue" },
  { icon: <FaReact />, label: "React", color: "#007acc" },
  { icon: <SiMysql />, label: "MySQL", color: "#00758f" },
  { icon: <FaCode />, label: "API", color: "#ff9800" },
  { icon: <FaJs />, label: "JavaScript", color: "##f0c419" },
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
        backgroundColor: isDark ? "#111" : "#f5f5f5",
        color: isDark ? "#fff" : "#111",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "2rem",
          color: isDark ? "#00ffe0" : "#007a6f",
        }}
      >
        Skills
      </h2>

      {/* Responsive CSS via a <style> block */}
      <style>
        {`
          @media (min-width: 900px) {
            .skills-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }
          @media (max-width: 899px) {
            .skills-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          }
        `}
      </style>

      <div
        className="skills-grid"
        style={{
          display: "grid",
          gap: "2rem",
          justifyItems: "center",
        }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "15px",
              padding: "1rem",
              textAlign: "center",
              color: skill.color,
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              width: "100px",
            }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{skill.icon}</div>
            <div style={{ fontSize: "1rem", fontWeight: "bold" }}>{skill.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
