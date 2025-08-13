import React, { useState } from "react";
import './AuthPage.css'; // Importing the external CSS file

// LoginForm component - Displays the login form fields
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

// SignUpForm component - Displays the signup form fields
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

// App component - Main component managing the sliding authentication page
export default function App() {
  // State to control which view is active: true for login, false for signup
  const [isLoginActive, setIsLoginActive] = useState(true);

  // Function to set the page to login view
  const handleLoginClick = () => setIsLoginActive(true);

  // Function to set the page to signup view
  const handleSignupClick = () => setIsLoginActive(false);

  return (
    <div className="app-container">
      {/* The main authentication panel that holds the sliding views */}
      <div className="auth-panel">
        {/* The wrapper that slides horizontally (desktop) or vertically (mobile) */}
        <div className={`views-wrapper ${isLoginActive ? "login-active" : "signup-active"}`}>
          {/* Login View: Contains Login Form and the 'Sign Up' prompt overlay */}
          <div className="auth-view login-view">
            <div className="form-section">
              <LoginForm />
            </div>
            <div className="overlay-section signup-prompt-overlay">
              <div className="overlay-content">
                <h2>Hello, Friend!</h2>
                <p>Enter your personal details and start your journey with us.</p>
                <button className="ghost-button" onClick={handleSignupClick}>Sign Up</button>
              </div>
            </div>
          </div>

          {/* Sign Up View: Contains the 'Login' prompt overlay and the Sign Up Form */}
          <div className="auth-view signup-view">
            <div className="overlay-section login-prompt-overlay">
              <div className="overlay-content">
                <h2>Welcome Back!</h2>
                <p>To keep connected with us, please login with your personal info.</p>
                <button className="ghost-button" onClick={handleLoginClick}>Login</button>
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
