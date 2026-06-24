import React from "react";

const AboutPage = () => {
  return (
    <div style={{
      minHeight: "100vh",
      padding: "40px",
      background: "#0f172a",
      color: "white",
      fontFamily: "sans-serif"
    }}>
      <div style={{
        maxWidth: "900px",
        margin: "0 auto"
      }}>
        
        {/* Header */}
        <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
          About Us
        </h1>
        <p style={{ fontSize: "18px", color: "#cbd5e1" }}>
          We build modern, scalable, and intelligent web applications.
        </p>

        {/* Section */}
        <div style={{
          marginTop: "40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px"
        }}>
          
          <div style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "12px"
          }}>
            <h2>🚀 Our Mission</h2>
            <p style={{ color: "#cbd5e1" }}>
              To simplify development by building powerful tools and platforms
              that scale effortlessly.
            </p>
          </div>

          <div style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "12px"
          }}>
            <h2>🧠 What We Do</h2>
            <p style={{ color: "#cbd5e1" }}>
              We create SaaS products, AI-powered systems, and full-stack
              applications using modern tech stacks.
            </p>
          </div>

          <div style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "12px"
          }}>
            <h2>⚡ Why Us</h2>
            <p style={{ color: "#cbd5e1" }}>
              Fast execution, clean architecture, and production-ready code
              built for real-world scale.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          marginTop: "50px",
          paddingTop: "20px",
          borderTop: "1px solid #334155",
          color: "#94a3b8",
          fontSize: "14px"
        }}>
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default AboutPage;