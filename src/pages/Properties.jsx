import { useState } from "react";
import { Link } from "react-router-dom";

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
  }
];

export default function Properties() {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [bedrooms, setBedrooms] = useState("");

  const filteredProperties = allProperties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesPrice =
      !priceRange || parseInt(property.price) <= parseInt(priceRange);

    const matchesBedrooms =
      !bedrooms || property.bedrooms === parseInt(bedrooms);

    return matchesSearch && matchesPrice && matchesBedrooms;
  });

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2 ">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Properties
          </h1>
          <p className="text-sm text-gray-500">
            {filteredProperties.length} homes available
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-0 z-20 bg-white shadow-md py-4">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-3">
          <input
            type="text"
            placeholder="🔍 Search by title or location..."
            className="px-4 py-2 border rounded-xl focus:ring-2 focus:ring-[#087474]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            className="px-4 py-2 border rounded-xl focus:ring-2 focus:ring-[#087474]"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="">All Prices</option>
            <option value="20000">Up to 20k ETB</option>
            <option value="50000">Up to 50k ETB</option>
            <option value="100000">Up to 100k ETB</option>
          </select>

          <select
            className="px-4 py-2 border rounded-xl focus:ring-2 focus:ring-[#087474]"
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
          >
            <option value="">All Bedrooms</option>
            <option value="1">1 Bed</option>
            <option value="2">2 Bed</option>
            <option value="3">3 Bed</option>
            <option value="4">4+ Bed</option>
          </select>

          <button
            onClick={() => {
              setSearchTerm("");
              setPriceRange("");
              setBedrooms("");
            }}
            className="border rounded-xl hover:bg-gray-100 transition"
          >
            Clear Filters ✖
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {filteredProperties.map((property) => (
          <div
            key={property.id}
            className="bg-[#0b3d3d] text-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group border border-white/10"
          >
            {/* Image */}
            <div className="relative h-44 overflow-hidden">
              <img
                src={property.image}
                alt=""
                className="w-full h-full object-cover group-hover:scale-105 transition"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

              <span className="absolute top-3 left-3 bg-[#087474] text-[10px] px-2 py-1 rounded-full">
                For Rent
              </span>
            </div>

            {/* Info */}
            <div className="p-4">
              <h3 className="text-sm font-semibold line-clamp-1">
                {property.title}
              </h3>

              <p className="text-white/60 text-xs mt-1">
                📍 {property.location}
              </p>

              <div className="flex justify-between text-xs text-white/60 mt-2 border-b border-white/10 pb-2">
                <span>{property.bedrooms} Bed</span>
                <span>{property.bathrooms} Bath</span>
                <span>{property.area} m²</span>
              </div>

              <div className="flex justify-between items-center mt-3">
                <span className="text-lg font-bold text-white">
                  {property.price} ETB
                </span>

                <Link to={`/property/${property.id}`}>
                  <button className="bg-[#fbbf24] text-black px-3 py-1.5 rounded-md text-xs font-semibold hover:scale-105 transition">
                    View
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProperties.length === 0 && (
        <div className="text-center py-20">
          <h3 className="text-xl font-bold text-gray-800">
            No properties found
          </h3>
          <p className="text-gray-500 mt-2">
            Try adjusting your filters
          </p>
        </div>
      )}

    </div>
  );
}