import React from "react";
import { FaBookOpen, FaComments } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div style={styles.header}>
      <div style={styles.left}>
        <img src={logo} alt="Logo" style={styles.logo} />
        <div style={styles.brand}>
          <span style={styles.brandName}>Knowledge Portal</span>
          <span style={styles.tagline}>Learn • Share • Grow</span>
        </div>
      </div>

      <div style={styles.links}>
        <a href="#materials" style={styles.link}>
          <FaBookOpen style={styles.icon} /> Study Materials
        </a>
        <a href="#forum" style={styles.link}>
          <FaComments style={styles.icon} /> Discussion Forum
        </a>
        <a href="#courses" style={styles.link}>
          <FaBookOpen style={styles.icon} /> Courses
        </a>
        <a href="#about" style={styles.link}>
          <FaComments style={styles.icon} /> About
        </a>
      </div>

      <div style={styles.buttons}>
        <button style={styles.loginBtn} onClick={() => navigate("/auth")} >Login</button>
        <button style={styles.signupBtn}  onClick={() => navigate("/auth")}>Sign Up</button>
      </div>
    </div>
  );
}

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: "8px 20px",
    borderBottom: "2px solid #5e2ca5",
    fontFamily: "Arial, sans-serif",
  },
  left: { 
    display: "flex", 
    alignItems: "center", 
    flex: "1",
    maxWidth: "25%"
  },
  logo: { height: "40px", marginRight: "15px" },
  brand: { display: "flex", flexDirection: "column", lineHeight: "1.2" },
  brandName: { fontSize: "18px", fontWeight: "bold", color: "#5e2ca5" },
  tagline: { fontSize: "12px", color: "#666" },
  links: { 
    display: "flex", 
    gap: "30px", 
    alignItems: "center", 
    flex: "2",
    justifyContent: "center",
    maxWidth: "50%"
  },
  link: {
    textDecoration: "none",
    color: "#444",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  icon: {
    fontSize: "16px",
    color: "#5e2ca5",
  },
  buttons: { 
    display: "flex", 
    gap: "10px", 
    flex: "1",
    justifyContent: "flex-end",
    maxWidth: "25%"
  },
  loginBtn: {
    padding: "6px 14px",
    border: "1px solid #a64ac9",
    borderRadius: "6px",
    background: "transparent",
    color: "#a64ac9",
    cursor: "pointer",
    fontSize: "14px",
  },
  signupBtn: {
    padding: "6px 14px",
    border: "none",
    borderRadius: "6px",
    background: "#f25c2a",
    color: "#fff",
    cursor: "pointer",
    fontSize: "14px",
  },
};