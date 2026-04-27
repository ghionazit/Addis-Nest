import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const handleScrollToAbout = () => {
    if (location.pathname !== "/") {
      // If not on home page, navigate to home first then scroll
      window.location.href = "/#about";
    } else {
      const section = document.getElementById("about");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Check if link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed w-full z-50 bg-[#0b3d3d] shadow-lg">
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
        <div className="hidden md:flex items-center gap-8 text-white/90 font-medium">
          
          <Link 
            to="/" 
            className={`relative group transition hover:text-[#fbbf24] ${
              isActive("/") ? "text-[#fbbf24]" : "text-white/90"
            }`}
          >
            Home
            {isActive("/") && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#fbbf24] rounded-full"></span>
            )}
          </Link>

          <Link 
            to="/properties" 
            className={`relative group transition hover:text-[#fbbf24] ${
              isActive("/properties") ? "text-[#fbbf24]" : "text-white/90"
            }`}
          >
            Properties
            {isActive("/properties") && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#fbbf24] rounded-full"></span>
            )}
          </Link>

          <Link 
            to="/landlord" 
            className={`relative group transition hover:text-[#fbbf24] ${
              isActive("/landlord") ? "text-[#fbbf24]" : "text-white/90"
            }`}
          >
            Landlord
            {isActive("/landlord") && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#fbbf24] rounded-full"></span>
            )}
          </Link>

          <Link 
            to="/tenant-dashboard" 
            className={`relative group transition hover:text-[#fbbf24] ${
              isActive("/tenant-dashboard") ? "text-[#fbbf24]" : "text-white/90"
            }`}
          >
            My Rentals
            {isActive("/tenant-dashboard") && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#fbbf24] rounded-full"></span>
            )}
          </Link>

          {/* About (scrolls) */}
          <button
            onClick={handleScrollToAbout}
            className="relative group hover:text-[#fbbf24] transition text-white/90"
          >
            About
          </button>

        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <Link to="/login">
            <button className="px-4 py-2 rounded-full text-white/80 hover:text-white transition">
              Login
            </button>
          </Link>

          <Link to="/register">
            <button className="px-5 py-2 rounded-full bg-[#fbbf24] text-black font-medium hover:scale-105 transition shadow-md">
              Sign Up
            </button>
          </Link>
        </div>

      </div>
      
      {/* Add a bottom border for separation */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </nav>
  );
}