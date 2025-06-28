import React from "react";
import { FaDownload } from "react-icons/fa";
import { useTheme } from "./ThemeContext";
import "./download-btn.css"; // Make sure this file contains the updated CSS
import "./Home.css";
const Home = () => {
  const { theme } = useTheme();
  const textColor = theme === "dark" ? "#ffffff" : "#111111";

  return (
<section
  id="home"
  style={{
    minHeight: "100vh",
    paddingTop: "100px", // Enough to clear fixed header
    paddingBottom: "2rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center", // Vertically center if screen has room
    textAlign: "center",
    backgroundColor: theme === "dark" ? "#111" : "#f5f5f5",
    color: textColor,
    boxSizing: "border-box",
  }}
>


      <p style={{ fontSize: "1.5rem", fontWeight: "500", margin: 0 }}>
        Hi I'm
      </p>

      <p
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          margin: "0.5rem 0 2rem",
        }}
      >
        Rishimithan
      </p>

      <p
        style={{
          fontSize: "1.25rem",
          fontWeight: "500",
          maxWidth: "700px",
          lineHeight: "1.8",
        }}
      >
        Full-Stack Developer with experience in frontend, backend, and databases. 
        Skilled in deploying and managing cloud applications using Azure and AWS.
        Proficient in data visualization using Power BI, custom React charts, and dashboards. 
        Focused on delivering scalable, efficient, and data-driven web applications.
      </p>
<a
  href="/Rishimithan_Resume.pdf"
  download
  className="download-btn"
>
  <FaDownload />
  Download CV
</a>


    </section>
  );
};

export default Home;
