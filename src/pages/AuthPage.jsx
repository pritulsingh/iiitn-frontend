import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [isStudent, setIsStudent] = useState(true);

  const handleSwitchClick = () => {
    setIsStudent(!isStudent);
  };

  return (
    <div className="bg-white p-8 rounded-lg w-full max-w-md">
      <h2 className="text-3xl font-bold text-center mb-8 text-purple-700">Login</h2>
      
      {/* Student / Faculty Switch */}
      <div className="flex items-center justify-center mb-8 gap-2">
        <span 
          className={`px-4 py-2 cursor-pointer transition-all duration-300 font-medium ${
            isStudent 
              ? "text-orange-500" 
              : "text-purple-600 hover:text-purple-700"
          }`} 
          onClick={handleSwitchClick}
        >
          Student
        </span>
        <span
          className={`cursor-pointer text-purple-600 transform transition-transform duration-300 text-lg ${
            isStudent ? "" : "rotate-180"
          }`}
          onClick={handleSwitchClick}
        >
          ⇄
        </span>
        <span 
          className={`px-4 py-2 cursor-pointer transition-all duration-300 font-medium ${
            !isStudent 
              ? "text-orange-500" 
              : "text-purple-600 hover:text-purple-700"
          }`} 
          onClick={handleSwitchClick}
        >
          Faculty
        </span>
      </div>
      
      <input 
        type="email" 
        placeholder="Email" 
        className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 text-gray-700 placeholder-gray-400"
      />
      <input 
        type="password" 
        placeholder="Password" 
        className="w-full p-4 mb-8 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 text-gray-700 placeholder-gray-400"
      />
      <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-full font-semibold text-lg transition-colors duration-300">
        Login
      </button>
    </div>
  );
}

function SignUpForm() {
  const [isStudent, setIsStudent] = useState(true);

  const handleSwitchClick = () => {
    setIsStudent(!isStudent);
  };

  return (
    <div className="bg-white p-8 rounded-lg w-full max-w-md">
      <h2 className="text-3xl font-bold text-center mb-8 text-purple-700">Sign Up</h2>

      {/* Student / Faculty Switch */}
      <div className="flex items-center justify-center mb-8 gap-2">
        <span 
          className={`px-4 py-2 cursor-pointer transition-all duration-300 font-medium ${
            isStudent 
              ? "text-orange-500" 
              : "text-purple-600 hover:text-purple-700"
          }`} 
          onClick={handleSwitchClick}
        >
          Student
        </span>
        <span
          className={`cursor-pointer text-purple-600 transform transition-transform duration-300 text-lg ${
            isStudent ? "" : "rotate-180"
          }`}
          onClick={handleSwitchClick}
        >
          ⇄
        </span>
        <span 
          className={`px-4 py-2 cursor-pointer transition-all duration-300 font-medium ${
            !isStudent 
              ? "text-orange-500" 
              : "text-purple-600 hover:text-purple-700"
          }`} 
          onClick={handleSwitchClick}
        >
          Faculty
        </span>
      </div>

      <input 
        type="text" 
        placeholder="Full Name" 
        className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 text-gray-700 placeholder-gray-400"
      />
      <input 
        type="email" 
        placeholder="Email" 
        className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 text-gray-700 placeholder-gray-400"
      />
      <input 
        type="password" 
        placeholder="Password" 
        className="w-full p-4 mb-8 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 text-gray-700 placeholder-gray-400"
      />
      <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-full font-semibold text-lg transition-colors duration-300">
        Sign Up
      </button>
    </div>
  );
}

export default function AuthPage() {
  const [isLoginActive, setIsLoginActive] = useState(true);
  const navigate = useNavigate();

  const handleLoginClick = () => setIsLoginActive(true);
  const handleSignupClick = () => setIsLoginActive(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 flex items-center justify-center relative">
      {/* Back Button */}
      <button
        className="absolute top-5 left-5 px-5 py-2 bg-white text-purple-700 font-semibold rounded-full shadow-lg border-2 border-purple-500 hover:bg-purple-100 hover:text-purple-900 transition-colors duration-300"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-4xl h-[500px]">
        <div
          className={`flex h-full w-[200%] transition-transform duration-700 ease-in-out ${
            isLoginActive ? "translate-x-0" : "-translate-x-1/2"
          }`}
          style={{ transform: isLoginActive ? "translateX(0)" : "translateX(-50%)" }}
        >
          {/* Login View */}
          <div className="flex w-1/2 h-full">
            <div className="flex-1 flex items-center justify-center p-8">
              <LoginForm />
            </div>
            <div className="flex-1 bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center p-8">
              <div className="text-center text-white">
                <h2 className="text-4xl font-bold mb-6">Hello, Student!</h2>
                <p className="mb-8 text-orange-100 text-lg leading-relaxed">Enter your personal details and start your journey with us.</p>
                <button 
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-500 transition-all duration-300 text-lg"
                  onClick={handleSignupClick}
                >
                  SIGN UP
                </button>
              </div>
            </div>
          </div>

          {/* Sign Up View */}
          <div className="flex w-1/2 h-full">
            <div className="flex-1 bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center p-8">
              <div className="text-center text-white">
                <h2 className="text-4xl font-bold mb-6">Welcome Back!</h2>
                <p className="mb-8 text-purple-100 text-lg leading-relaxed">
                  To keep connected with us, please login with your personal info.
                </p>
                <button 
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 text-lg"
                  onClick={handleLoginClick}
                >
                  LOGIN
                </button>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center p-8">
              <SignUpForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
