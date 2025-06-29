import React from "react";
import AnimatedContent from "./AnimatedContent";
import { useTheme } from "./ThemeContext"; // ✅ Import

const experiences = [
  {
    title: "Graduate Engineering Trainee",
    company: "Psiog Digital (P) Ltd",
    period: "Aug 2024 – Feb 2025",
    description: "Worked as a Full-Stack Developer Trainee, gaining hands-on experience in frontend development using HTML, CSS, and React, and backend development with C#. Worked on integrating and managing databases like MySQL. Contributed to deploying and maintaining applications on Azure and AWS, including basic CI/CD and serverless implementations. Created interactive dashboards using Power BI and custom chart components in React. Focused on learning and delivering scalable, responsive, and data-driven web solutions.",
  }
];

const Experience = () => {
  const { theme } = useTheme(); // ✅ Theme context
  const isDark = theme === "dark";

  const background = isDark ? "#111" : "#f5f5f5";
  const textColor = isDark ? "#fff" : "#111";
  const subText = isDark ? "#ccc" : "#444";
  const description = isDark ? "#aaa" : "#555";
  const timelineBorder = isDark ? "#333" : "#bbb";
  const timelineDotBorder = isDark ? "#111" : "#f5f5f5";

  return (
    <section
      id="experience"
      style={{
        minHeight: "80vh",
        paddingTop: "80px",
        padding: "2rem 2rem 1rem", 
        backgroundColor: background,
        color: textColor,
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "3rem",
          textAlign: "center",
          color: isDark ? "#00ffe0" : "#007a6f",
        }}
      >
        Experience
      </h2>

      <div
        style={{
          position: "relative",
          margin: "0 auto",
          maxWidth: "800px",
          paddingLeft: "2rem",
          borderLeft: `2px solid ${timelineBorder}`,
        }}
      >
        {experiences.map((exp, index) => (
          <AnimatedContent
            key={index}
            direction="vertical"
            distance={50}
            delay={index * 0.2}
          >
            <div
              style={{
                position: "relative",
                marginBottom: "3rem",
                paddingLeft: "2rem",
              }}
            >
              {/* Timeline Dot */}
              <span
                style={{
                  position: "absolute",
                  left: "-1.1rem",
                  top: "0.4rem",
                  width: "16px",
                  height: "16px",
                  backgroundColor: "#00ffff",
                  borderRadius: "50%",
                  border: `2px solid ${timelineDotBorder}`,
                  boxShadow: "0 0 10px #00ffff",
                }}
              ></span>

              {/* Experience Content */}
              <h3 style={{ fontSize: "1.5rem", margin: "0 0 0.3rem" }}>{exp.title}</h3>
              <h4
                style={{
                  fontSize: "1rem",
                  fontWeight: "normal",
                  margin: "0 0 0.8rem",
                  color: subText,
                }}
              >
                {exp.company} • <span style={{ fontStyle: "italic" }}>{exp.period}</span>
              </h4>
              <p style={{ lineHeight: "1.6", color: description }}>{exp.description}</p>
            </div>
          </AnimatedContent>
        ))}
      </div>
    </section>
  );
};

export default Experience;
