import React from "react";
import AnimatedContent from "./AnimatedContent";
import { useTheme } from "./ThemeContext";

const educationHistory = [
  {
    degree: "Bachelor of Technology in Electronics and Communication Engineering",
    institution: "SASTRA University",
    period: "2020 – 2024",
    //details: "Focused on software engineering, web development, and data structures.",
  },
  {
    degree: "Higher Secondary School",
    institution: "Kamala Niketan",
    period: "2017 – 2019",
    //details: "Studied Computer Science with Mathematics stream.",
  }
];

const Education = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const background = isDark ? "#111" : "#f5f5f5";
  const textColor = isDark ? "#fff" : "#111";
  const subText = isDark ? "#ccc" : "#444";
  const description = isDark ? "#aaa" : "#555";
  const timelineBorder = isDark ? "#333" : "#bbb";
  const timelineDotBorder = isDark ? "#111" : "#f5f5f5";

  return (
    <section
      id="education"
      style={{
        minHeight: "80vh",
        paddingTop: "40px",
        padding: "2rem",
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
        Education
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
        {educationHistory.map((edu, index) => (
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
                  backgroundColor: "#00ffcc",
                  borderRadius: "50%",
                  border: `2px solid ${timelineDotBorder}`,
                  boxShadow: "0 0 10px #00ffcc",
                }}
              ></span>

              {/* Education Content */}
              <h3 style={{ fontSize: "1.5rem", marginBottom: "0.3rem" }}>{edu.degree}</h3>
              <h4
                style={{
                  fontSize: "1rem",
                  fontWeight: "normal",
                  color: subText,
                  marginBottom: "0.8rem",
                }}
              >
                {edu.institution} • <span style={{ fontStyle: "italic" }}>{edu.period}</span>
              </h4>
              <p style={{ lineHeight: "1.6", color: description }}>{edu.details}</p>
            </div>
          </AnimatedContent>
        ))}
      </div>
    </section>
  );
};

export default Education;
