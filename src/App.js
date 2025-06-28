import React, { useEffect, useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

// ✅ Moved outside the component to avoid unnecessary re-creation
const sectionIds = ["home", "experience", "education", "projects", "skills", "contact"];

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    });

    // ✅ Observe all sections
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // ✅ Clean up on unmount
    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []); // ✅ No dependencies needed because sectionIds is static outside

  return (
    <>
      <Header activeSection={activeSection} />
      <main>
        <Home />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
