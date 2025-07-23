import React from "react";
import { useTheme } from "./ThemeContext";

const projectData = [
  {
    title: "Doc Chat bot using RAG",
    description:`This project details a full-stack Retrieval-Augmented Generation (RAG) application that securely allows users to upload documents. 
    These documents are processed—chunked and embedded using HuggingFace models—then stored in Pinecone for efficient semantic retrieval. 
    User queries trigger the system to fetch relevant context and generate real-time, accurate responses via GPT-3.5. 
    The application features a Streamlit frontend for an interactive user experience and integrates Firebase Authentication to ensure secure access. 
    This setup demonstrates a comprehensive, production-ready RAG solution.`,
    tech:["StreamlitUI","Hugging Face","Firebase","Pinecone","gpt-3.5"]
  },
  {
    title: "File Processing Project using AWS",
    description: `This AWS project leveraged API Gateway, S3 bucket, Lambda, DynamoDB, and SNS for automated file
processing, storing the data in DynamoDB, and sending processing notifications via SNS for real-time file
management`,
    tech: ["API Gateway","AWS S3","DynamoDB","SNS","Lambda"]
  },
  {
    title: "Antenna Impedance Matching Circuit using Shallow Learning Model",
    description: `This was a low-complexity shallow learning model for adaptive antenna impedance matching,
implementing a data-driven approach to dynamically adjust impedance, reducing power loss, enhancing wireless
communication performance, optimizing transmission efficiency, ensuring fast/efficient adaptation with minimal
computational overhead`,
    tech: ["Antenna Design", "Machine Learning"],
  },
  {
    title: "Inverse Estimation of Antenna Array Directivity using Adjoint Neural Network",
    description: `A multi-branch artificial neural network (ANN) model, this project facilitated inverse directivity
estimation, mapping electromagnetic parameters to geometrical or physical parameters; addressing the non-
uniqueness of the inverse problem, monotonicity was utilized by analyzing directional derivatives, while data was
segmented to train parallel ANN branches, ensuring accurate output non reliant on the forward model`,
    tech: ["Artificial Neural Network",'Adjoint Neural Network'],
  },
  {
    title: " Chat Application using Socket Programming",
    description: `This was a real-time, multi-client chat application utilizing Python sockets that implemented multi-
threading to manage concurrent connections, user authentication, and message, ensuring efficient and reliable
handling of client connections, facilitating seamless client-server communication`,
    tech: ["Python"],
  }
];

const Projects = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const styles = {
    background: isDark ? "#111" : "#f5f5f5",
    cardBackground: isDark ? "#1e1e1e" : "#fff",
    textColor: isDark ? "#fff" : "#111",
    borderColor: isDark ? "#333" : "#ddd",
    pillBackground: isDark ? "#222" : "#eee",
    pillText: isDark ? "#fff" : "#111",
    titleColor: isDark ? "#00ffff" : "#2c3e50", // <-- Updated here
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
      <h2 style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "2rem", color: isDark ? "#00ffe0" : "#007a6f" }}>
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
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem", color: styles.titleColor }}>
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
