import React from "react";
import { useTheme } from "./ThemeContext";

const projectData = [
  {
    title: "Portfolio Website",
    description: "A responsive personal portfolio built with React and GSAP for smooth animations.",
    tech: ["React", "GSAP", "CSS"],
    //link: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Antenna Impedance Matching Circuit using Shallow Learning Model",
    description: `This was a low-complexity shallow learning model for adaptive antenna impedance matching,
implementing a data-driven approach to dynamically adjust impedance, reducing power loss, enhancing wireless
communication performance, optimizing transmission efficiency, ensuring fast/efficient adaptation with minimal
computational overhead`,
    tech: ["Antenna Design", "Machine Learning"],
    //link: "https://github.com/yourusername/task-manager",
  },
  {
    title: "Inverse Estimation of Antenna Array Directivity using Adjoint Neural Network",
    description: `A multi-branch artificial neural network (ANN) model, this project facilitated inverse directivity
estimation, mapping electromagnetic parameters to geometrical or physical parameters; addressing the non-
uniqueness of the inverse problem, monotonicity was utilized by analyzing directional derivatives, while data was
segmented to train parallel ANN branches, ensuring accurate output non reliant on the forward model`,
    tech: ["Artificial Neural Network",'Adjoint Neural Network'],
    //link: "https://github.com/yourusername/weather-dashboard",
  },
];

const Projects = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const styles = {
    background: isDark ? "#111" : "#f9f9f9",
    cardBackground: isDark ? "#1e1e1e" : "#fff",
    textColor: isDark ? "#fff" : "#111",
    borderColor: isDark ? "#333" : "#ddd",
    pillBackground: isDark ? "#222" : "#eee",
    pillText: isDark ? "#fff" : "#111",
  };

  return (
    <section
      id="projects"
      style={{
        minHeight: "100vh",
        paddingTop: "80px",
        backgroundColor: styles.background,
        color: styles.textColor,
        padding: "2rem",
      }}
    >
      <h2 style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "2rem", color: "#ff1493" }}>
        Projects
      </h2>

      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {projectData.map((project, index) => (
          <div
            key={index}
            style={{
              background: styles.cardBackground,
              border: `1px solid ${styles.borderColor}`,
              borderRadius: "10px",
              padding: "1.5rem",
              marginBottom: "2rem",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem", color: "#00ffff" }}>
              {project.title}
            </h3>

            <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>{project.description}</p>

            <div style={{ marginBottom: "1rem", display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  style={{
                    padding: "0.3rem 0.75rem",
                    backgroundColor: styles.pillBackground,
                    color: styles.pillText,
                    fontSize: "0.85rem",
                    borderRadius: "20px",
                    border: `1px solid ${styles.borderColor}`,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#1e90ff",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              View on GitHub →
            </a> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
