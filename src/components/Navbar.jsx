// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-semibold tracking-tight group"
        >
          <span className="text-[#087474] text-3xl group-hover:scale-110 transition-transform">
            🏠
          </span>
          <span className="text-gray-800">Addis</span>
          <span className="text-[#087474]">Nest</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-10 text-gray-600 font-medium">
          {["Home", "Properties", "About", "Contact"].map((item, index) => (
            <Link
              key={index}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="relative group transition"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#087474] transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <Link to="/login">
            <button className="px-4 py-2 rounded-full text-gray-600 hover:text-[#087474] hover:bg-gray-100 transition-all duration-200">
              Login
            </button>
          </Link>

          <Link to="/register">
            <button className="px-5 py-2 rounded-full bg-[#087474] text-white font-medium shadow-sm hover:bg-[#066565] hover:shadow-md hover:scale-[1.03] transition-all duration-200">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}