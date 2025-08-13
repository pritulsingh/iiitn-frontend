import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- Import navigation hook
import "../css/AuthPage.css";

function LoginForm() {
  return (
    <div className="form-box">
      <h2>Login</h2>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
    </div>
  );
}

function SignUpForm() {
  return (
    <div className="form-box">
      <h2>Sign Up</h2>
      <input type="text" placeholder="Full Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Sign Up</button>
    </div>
  );
}

export default function AuthPage() {
  const [isLoginActive, setIsLoginActive] = useState(true);
  const navigate = useNavigate(); // For going back

  const handleLoginClick = () => setIsLoginActive(true);
  const handleSignupClick = () => setIsLoginActive(false);

  return (
    <div className="app-container">
      {/* Back Button */}
      <button
        className="back-button"
        onClick={() => navigate(-1)} // Go back to previous page
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          padding: "6px 12px",
          border: "none",
          background: "#a64ac9",
          color: "white",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        ← Back
      </button>

      <div className="auth-panel">
        <div
          className={`views-wrapper ${isLoginActive ? "login-active" : "signup-active"}`}
        >
          {/* Login View */}
          <div className="auth-view login-view">
            <div className="form-section">
              <LoginForm />
            </div>
            <div className="overlay-section signup-prompt-overlay">
              <div className="overlay-content">
                <h2>Hello, Student!</h2>
                <p>Enter your personal details and start your journey with us.</p>
                <button className="ghost-button" onClick={handleSignupClick}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>

          {/* Sign Up View */}
          <div className="auth-view signup-view">
            <div className="overlay-section login-prompt-overlay">
              <div className="overlay-content">
                <h2>Welcome Back!</h2>
                <p>
                  To keep connected with us, please login with your personal info.
                </p>
                <button className="ghost-button" onClick={handleLoginClick}>
                  Login
                </button>
              </div>
            </div>
            <div className="form-section">
              <SignUpForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
