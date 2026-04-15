import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-[#0b3d3d]  border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-semibold tracking-tight group"
        >
          <span className="text-[#fbbf24] text-3xl group-hover:scale-110 transition-transform">
            🏠
          </span>
          <span className="text-white">Addis</span>
          <span className="text-[#fbbf24]">Nest</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-10 text-white/90 font-medium">
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
            <button className="px-4 py-2 rounded-full text-white/80 hover:text-white transition">
              Login
            </button>
          </Link>

          <Link to="/register">
            <button className="px-5 py-2 rounded-full bg-[#fbbf24] text-white font-medium hover:bg-[#fbbf24] transition shadow-sm">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}