import React from "react";

const Footer = () => {
  return (
    <footer
      className="mt-5"
      style={{
        background: "#0d1117",
        color: "#fff",
        padding: "30px 0"
      }}
    >
      <div className="container text-center">

        <h5 className="mb-2">📝 Blogify</h5>

        <p style={{ fontSize: "14px", color: "#aaa" }}>
          Share your ideas with the world. Create, edit, and explore blogs easily.
        </p>

        {/* Links */}
        <div className="d-flex justify-content-center gap-3 mb-3">
          <a href="#" className="text-light text-decoration-none">Home</a>
          <a href="#" className="text-light text-decoration-none">About</a>
          <a href="#" className="text-light text-decoration-none">Contact</a>
        </div>

        {/* Social */}
        <div className="mb-3">
          <span className="me-2">🌐</span>
          <span className="me-2">📘</span>
          <span className="me-2">📸</span>
          <span>🐦</span>
        </div>

        <p style={{ fontSize: "12px", color: "#777" }}>
          © 2026 Blogify. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;