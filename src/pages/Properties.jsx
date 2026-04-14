import { useState } from "react";
import { Link } from "react-router-dom";

// Sample property data - ONLY FOR RENT
const allProperties = [
  {
    id: 1,
    title: "Cozy Studio in Mexico",
    location: "Mexico, Addis Ababa",
    price: "12,000",
    bedrooms: 1,
    bathrooms: 1,
    area: 55,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500",
    type: "For Rent"
  },
  {
    id: 2,
    title: "Luxury Penthouse",
    location: "Kazanchis, Addis Ababa",
    price: "80,000",
    bedrooms: 3,
    bathrooms: 3,
    area: 180,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500",
    type: "For Rent"
  },
  {
    id: 3,
    title: "Affordable Studio",
    location: "Piazza, Addis Ababa",
    price: "8,000",
    bedrooms: 1,
    bathrooms: 1,
    area: 40,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500",
    type: "For Rent"
  },
  {
    id: 4,
    title: "Modern 2BR Apartment",
    location: "Bole, Addis Ababa",
    price: "35,000",
    bedrooms: 2,
    bathrooms: 2,
    area: 120,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500",
    type: "For Rent"
  },
  {
    id: 5,
    title: "Spacious Family Home",
    location: "CMC, Addis Ababa",
    price: "50,000",
    bedrooms: 4,
    bathrooms: 3,
    area: 280,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500",
    type: "For Rent"
  },
  {
    id: 6,
    title: "Modern Condo",
    location: "Ayat, Addis Ababa",
    price: "28,000",
    bedrooms: 2,
    bathrooms: 2,
    area: 110,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500",
    type: "For Rent"
  },
  {
    id: 7,
    title: "Garden View Apartment",
    location: "Gergi, Addis Ababa",
    price: "22,000",
    bedrooms: 2,
    bathrooms: 2,
    area: 130,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500",
    type: "For Rent"
  },
  {
    id: 8,
    title: "Executive Suite",
    location: "Sarbet, Addis Ababa",
    price: "65,000",
    bedrooms: 3,
    bathrooms: 3,
    area: 200,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500",
    type: "For Rent"
  },
  {
    id: 9,
    title: "Cozy Family Home",
    location: "Kotebe, Addis Ababa",
    price: "40,000",
    bedrooms: 3,
    bathrooms: 2,
    area: 200,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500",
    type: "For Rent"
  }
];

export default function Properties() {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [bedrooms, setBedrooms] = useState("");

  // Filter properties based on search
  const filteredProperties = allProperties.filter(property => {
    // Filter by search term
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          property.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by price range
    const matchesPrice = !priceRange || parseInt(property.price) <= parseInt(priceRange);
    
    // Filter by bedrooms
    const matchesBedrooms = !bedrooms || property.bedrooms === parseInt(bedrooms);
    
    return matchesSearch && matchesPrice && matchesBedrooms;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Page Header */}
      <div className="bg-[#0b3d3d] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Rental Properties</h1>
          <p className="text-gray-300 text-lg">
            Find your perfect rental home across Addis Ababa
          </p>
        </div>
      </div>

      {/* Filters Section */}
      <div className="sticky top-0 z-20 bg-white shadow-md py-4">
        <div className="container mx-auto px-4">
          
          {/* Title */}
          <div className="text-center mb-4">
            <h2 className="text-lg font-semibold text-gray-700">Find Your Next Home</h2>
          </div>

          {/* Filter Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <input
              type="text"
              placeholder="🔍 Search by title or location..."
              className="px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#087474]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#087474]"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option value="">All Prices</option>
              <option value="10000">Up to 10,000 ETB</option>
              <option value="20000">Up to 20,000 ETB</option>
              <option value="30000">Up to 30,000 ETB</option>
              <option value="50000">Up to 50,000 ETB</option>
              <option value="100000">Up to 100,000 ETB</option>
            </select>
            <select
              className="px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#087474]"
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
            >
              <option value="">All Bedrooms</option>
              <option value="1">1 Bedroom</option>
              <option value="2">2 Bedrooms</option>
              <option value="3">3 Bedrooms</option>
              <option value="4">4 Bedrooms</option>
              <option value="5">5+ Bedrooms</option>
            </select>
            <button
              onClick={() => {
                setSearchTerm("");
                setPriceRange("");
                setBedrooms("");
              }}
              className="px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-100 transition"
            >
              Clear Filters ✖
            </button>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="container mx-auto px-4 py-6">
        <p className="text-gray-600">
          Found <span className="font-bold text-[#087474]">{filteredProperties.length}</span> rental properties
        </p>
      </div>

      {/* Properties Grid */}
      <div className="container mx-auto px-4 pb-16">
        {filteredProperties.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <div 
                key={property.id} 
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                {/* Property Image */}
                <div className="relative overflow-hidden h-56">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#087474] text-white text-xs px-3 py-1.5 rounded-full font-medium">
                    For Rent
                  </div>
                </div>
                
                {/* Property Details */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-1 line-clamp-1">
                    {property.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-3 flex items-center gap-1">
                    📍 {property.location}
                  </p>
                  
                  {/* Specs */}
                  <div className="flex justify-between items-center text-gray-600 text-sm mb-4 pb-3 border-b border-gray-100">
                    <span className="flex items-center gap-1">🛏️ {property.bedrooms} Beds</span>
                    <span className="flex items-center gap-1">🚿 {property.bathrooms} Baths</span>
                    <span className="flex items-center gap-1">📐 {property.area} m²</span>
                  </div>
                  
                  {/* Price & Button */}
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-2xl font-bold text-[#087474]">
                        {property.price} ETB
                      </span>
                      <span className="text-gray-400 text-xs"> /month</span>
                    </div>
                    <Link to={`/property/${property.id}`}>
                      <button className="bg-[#087474] text-white px-4 py-2 rounded-xl hover:bg-[#066565] transition text-sm font-medium flex items-center gap-1">
                        View Details →
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // No Results
          <div className="text-center py-20 bg-white rounded-2xl">
            <div className="text-6xl mb-4">🏠</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">No Rental Properties Found</h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setPriceRange("");
                setBedrooms("");
              }}
              className="mt-4 text-[#087474] font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
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