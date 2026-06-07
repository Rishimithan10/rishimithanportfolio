import React from "react";
import { useTheme } from "./ThemeContext";

const projectData = [
  {
    title: "Rossmann Store Sales – Demand Forecasting",
    github:
      "https://github.com/Rishimithan10/Rossmann-Store-Sales-Demand-Forecasting",
    description: `This project details an end-to-end demand forecasting pipeline built on over 1 million sales records 
    across 1,115 retail stores. Documents are processed through extensive feature engineering — including lag variables, 
    rolling statistics, and calendar features — to capture temporal patterns and seasonal trends. A single global XGBoost 
    model was trained across all stores, achieving 5.91% MAPE and outperforming SARIMA by 30% and Prophet by 26%. 
    SHAP analysis was applied to interpret model predictions and identify top sales drivers including promotional activity 
    and lag features. This setup demonstrates a comprehensive, production-ready time-series forecasting solution.`,
    tech: ["XGBoost", "SARIMA", "Prophet", "SHAP", "Pandas", "Scikit-learn"],
  },

  {
    title: "Fraud Analytics – Azure Lakehouse Pipeline",
    github:
      "https://github.com/Rishimithan10/azure-fraud-detection-pipeline",
    description: `This project details a scalable fraud analytics pipeline built on a 3-layer Medallion Lakehouse 
    architecture — Bronze, Silver, and Gold — hosted on Azure Data Lake Storage Gen2. Raw transaction data is ingested 
    and orchestrated through Azure Data Factory with automated scheduling and error handling. The Silver layer applies 
    data quality transformations using PySpark in Databricks, including null handling, deduplication, and feature 
    normalization. The Gold layer computes fraud-related KPIs such as fraud rate by merchant category and anomaly scores 
    using Delta tables for versioned storage. Self-serve fraud reporting is enabled via Azure Synapse Analytics, reducing 
    ad-hoc query turnaround for business stakeholders. This setup demonstrates a comprehensive, production-ready 
    cloud-native fraud detection and reporting solution.`,
    tech: [
      "Azure Data Factory",
      "Databricks",
      "PySpark",
      "Azure Synapse",
      "Delta Lake",
      "ADLS Gen2",
    ],
  },

  {
    title: "Doc Chat bot using RAG",
    github: "https://github.com/Rishimithan10/RagApplication",
    description: `This project details a full-stack Retrieval-Augmented Generation (RAG) application that securely allows users to upload documents. 
    These documents are processed—chunked and embedded using HuggingFace models—then stored in Pinecone for efficient semantic retrieval. 
    User queries trigger the system to fetch relevant context and generate real-time, accurate responses via GPT-3.5. 
    The application features a Streamlit frontend for an interactive user experience and integrates Firebase Authentication to ensure secure access. 
    This setup demonstrates a comprehensive, production-ready RAG solution.`,
    tech: ["StreamlitUI", "Hugging Face", "Firebase", "Pinecone", "GPT-3.5"],
  },

  {
    title: "File Processing Project using AWS",
    description: `This AWS project leveraged API Gateway, S3 bucket, Lambda, DynamoDB, and SNS for automated file
    processing, storing the data in DynamoDB, and sending processing notifications via SNS for real-time file
    management.`,
    tech: ["API Gateway", "AWS S3", "DynamoDB", "SNS", "Lambda"],
  },
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
    titleColor: isDark ? "#00ffff" : "#2c3e50",
    linkColor: isDark ? "#00ffe0" : "#007a6f",
  };

  return (
    <section
      id="projects"
      style={{
        minHeight: "100vh",
        paddingTop: "80px",
        padding: "2rem",
        backgroundColor: styles.background,
        color: styles.textColor,
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          textAlign: "center",
          marginBottom: "2rem",
          color: styles.linkColor,
        }}
      >
        Projects
      </h2>

      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
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
            {/* Project Title + Link */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  margin: 0,
                  color: styles.titleColor,
                }}
              >
                {project.title}
              </h3>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: styles.linkColor,
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "0.95rem",
                  }}
                >
                  View Project →
                </a>
              )}
            </div>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.6",
                marginBottom: "1rem",
              }}
            >
              {project.description}
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
              }}
            >
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