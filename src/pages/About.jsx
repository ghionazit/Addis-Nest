import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Page Header */}
      <div className="bg-[#0b3d3d] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About AddisNest</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ethiopia's trusted rental property platform
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* What is AddisNest */}
          <div className="bg-white rounded-2xl p-8 shadow-md mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">What is AddisNest?</h2>
            <p className="text-gray-600 leading-relaxed">
              AddisNest is a web-based rental property management platform designed to connect 
              tenants with landlords in Ethiopia. The system allows renters to search for properties, 
              view detailed information, and contact landlords directly.
            </p>
          </div>

          {/* What We Offer */}
          <div className="bg-white rounded-2xl p-8 shadow-md mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-[#087474] text-xl">✓</span>
                <span className="text-gray-600">Search properties by location, price, and type</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#087474] text-xl">✓</span>
                <span className="text-gray-600">View detailed property information and images</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#087474] text-xl">✓</span>
                <span className="text-gray-600">Contact landlords directly through the platform</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#087474] text-xl">✓</span>
                <span className="text-gray-600">Landlord dashboard to manage properties</span>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose AddisNest?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">🔒</div>
                <h3 className="font-semibold text-gray-800">Verified Listings</h3>
                <p className="text-gray-500 text-sm">Trusted properties</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">⚡</div>
                <h3 className="font-semibold text-gray-800">Easy to Use</h3>
                <p className="text-gray-500 text-sm">Simple and fast search</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">📞</div>
                <h3 className="font-semibold text-gray-800">Direct Contact</h3>
                <p className="text-gray-500 text-sm">Talk to landlords directly</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-10">
            <Link to="/properties">
              <button className="bg-[#087474] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#066565] transition">
                Browse Properties →
              </button>
            </Link>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0b3d3d] text-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-3">AddisNest</h2>
            <p className="text-sm text-white/70">
              Find trusted rental homes across Ethiopia.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Links</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/properties">Properties</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Account</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <p className="text-sm text-white/70">
              Addis Ababa, Ethiopia
            </p>
          </div>
        </div>

        <div className="text-center text-white/50 text-sm mt-8">
          © {new Date().getFullYear()} AddisNest
        </div>
      </footer>

    </div>
  );
}