import React, { useState } from "react";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { useTheme } from "./ThemeContext";
import emailjs from "emailjs-com";

const Contact = () => {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            setStatus("Please fill all the fields.");
            return;
        }

        const templateParams = {
            from_email: email,
            to_email: "rishimithan@gmail.com",
            name,
            message,
        };

        emailjs
            .send("service_gw79zu9", "template_0m0r16p", templateParams, "Uj1SoBSaLeLRGWzPz")
            .then(
                (response) => {
                    setStatus("Message sent successfully!");
                    setName("");
                    setEmail("");
                    setMessage("");
                },
                (error) => {
                    setStatus("Failed to send message.");
                }
            );
    };

    return (
        <section
            id="contact"
            style={{
                minHeight: "70vh",
                paddingTop: "80px",
                paddingBottom: "0.5rem",
                paddingInline: "2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                backgroundColor: isDark ? "#111" : "#f5f5f5",
                color: isDark ? "#fff" : "#111",
            }}
        >
            <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: isDark ? "#00ffe0" : "#007a6f" }}>
                Contact Me
            </h2>

            <form onSubmit={sendEmail} style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "500px", width: "100%" }}>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                        padding: "0.8rem",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                        fontSize: "1rem",
                        backgroundColor: isDark ? "#222" : "#fff",
                        color: isDark ? "#fff" : "#111",
                    }}
                />

                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                        padding: "0.8rem",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                        fontSize: "1rem",
                        backgroundColor: isDark ? "#222" : "#fff",
                        color: isDark ? "#fff" : "#111",
                    }}
                />
                <textarea
                    rows="5"
                    placeholder="Your Message / Suggestions"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{
                        padding: "0.8rem",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                        fontSize: "1rem",
                        resize: "vertical",
                        backgroundColor: isDark ? "#222" : "#fff",
                        color: isDark ? "#fff" : "#111",
                    }}
                />
                <button
                    type="submit"
                    style={{
                        backgroundColor: "#00ffff",
                        color: "#111",
                        padding: "0.8rem",
                        border: "none",
                        borderRadius: "5px",
                        fontWeight: "bold",
                        cursor: "pointer",
                    }}
                >
                    Send Message
                </button>
                {status && <p>{status}</p>}
            </form>

<div style={{ marginTop: "3rem", display: "flex", gap: "2rem" }}>
  <a
    href="https://www.linkedin.com/in/rishimithan-k/"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: isDark ? "#00ffff" : "#111",
      fontSize: "2rem",
      transition: "color 0.3s ease",
    }}
  >
    <FaLinkedin />
  </a>
  <a
    href="https://www.facebook.com/rishimithan.kannan"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: isDark ? "#00ffff" : "#111",
      fontSize: "2rem",
      transition: "color 0.3s ease",
    }}
  >
    <FaFacebook />
  </a>
  <a
    href="https://www.instagram.com/_rishi10._/"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: isDark ? "#00ffff" : "#111",
      fontSize: "2rem",
      transition: "color 0.3s ease",
    }}
  >
    <FaInstagram />
  </a>
</div>

        </section>
    );
};

export default Contact;
