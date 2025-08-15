import React from "react";
import { FaBookOpen, FaComments } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between bg-white px-5 py-2 border-b-2 border-purple-700 font-sans">
      <div className="flex items-center flex-1 max-w-[25%]">
        <img src={logo} alt="Logo" className="h-10 mr-4" />
        <div className="flex flex-col leading-tight">
          <span className="text-lg font-bold text-purple-700">Knowledge Portal</span>
          <span className="text-xs text-gray-500">Learn • Share • Grow</span>
        </div>
      </div>
      <div className="flex gap-8 items-center flex-2 justify-center max-w-[50%]">
        <a href="#materials" className="flex items-center gap-1 text-gray-700 text-sm no-underline hover:text-purple-700 transition">
          <FaBookOpen className="text-purple-700 text-base" /> Study Materials
        </a>
        <a href="#forum" className="flex items-center gap-1 text-gray-700 text-sm no-underline hover:text-purple-700 transition">
          <FaComments className="text-purple-700 text-base" /> Discussion Forum
        </a>
        <a href="#courses" className="flex items-center gap-1 text-gray-700 text-sm no-underline hover:text-purple-700 transition">
          <FaBookOpen className="text-purple-700 text-base" /> Courses
        </a>
        <a href="#about" className="flex items-center gap-1 text-gray-700 text-sm no-underline hover:text-purple-700 transition">
          <FaComments className="text-purple-700 text-base" /> About
        </a>
      </div>
      <div className="flex gap-3 flex-1 justify-end max-w-[25%]">
        <button
          className="px-3 py-1 border border-purple-500 rounded-md bg-transparent text-purple-700 cursor-pointer text-sm font-medium hover:bg-purple-50 transition"
          onClick={() => navigate("/auth")}
        >
          Login
        </button>
        <button
          className="px-3 py-1 rounded-md bg-orange-500 text-white cursor-pointer text-sm font-medium border-none hover:bg-orange-600 transition"
          onClick={() => navigate("/auth")}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}