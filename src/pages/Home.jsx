import { Link } from "react-router-dom";
import bgImage from "../assets/home.png";
import Map from "../components/Map";

const forRentProperties = [
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
  },
];

export default function Home() {
  return (
    <div className="bg-gray-50">

      {/* HERO (CENTERED) */}
      <div className="relative w-full h-[520px] md:h-[600px] overflow-hidden">
        <img
          src={bgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-[#087474]/40 to-transparent"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Find Your Perfect Home in Ethiopia
          </h1>

          <p className="text-white/80 text-lg mb-8 max-w-2xl">
            Discover verified rental homes across Addis Ababa  simple, fast, and reliable.
          </p>

          {/* Search Box */}
          <div className="bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-5 w-full">
            <div className="grid md:grid-cols-4 gap-3">

              <div className="text-left">
                <p className="text-xs text-gray-500 mb-1">Type</p>
                <div className="bg-gray-50 border rounded-lg px-3 py-2 text-sm">
                  For Rent
                </div>
              </div>

              <div className="text-left">
                <p className="text-xs text-gray-500 mb-1">Price</p>
                <div className="bg-gray-50 border rounded-lg px-3 py-2 text-sm">
                  ETB 2k - 20k
                </div>
              </div>

              <div className="text-left">
                <p className="text-xs text-gray-500 mb-1">Location</p>
                <div className="bg-gray-50 border rounded-lg px-3 py-2 text-sm">
                  Addis Ababa
                </div>
              </div>

              <Link to="/properties">
                <button className="w-full h-full bg-[#087474] text-white rounded-lg font-medium hover:bg-[#066565] transition">
                  Search
                </button>
              </Link>

            </div>
          </div>
        </div>
      </div>

      {/* PROPERTIES + MAP */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Properties For Rent
          </h2>
          <p className="text-gray-500 mt-2">
            Explore homes across Addis Ababa
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">

          {/* LEFT */}
          <div className="lg:w-3/5 space-y-5">
            {forRentProperties.map((property) => (
              <div
                key={property.id}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition flex overflow-hidden"
              >
                <div className="w-40 h-40 overflow-hidden">
                  <img
                    src={property.image}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                </div>

                <div className="flex-1 p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between">
                      <h3 className="font-semibold text-lg text-gray-800">
                        {property.title}
                      </h3>
                      <span className="text-[#087474] font-bold">
                        {property.price} ETB
                      </span>
                    </div>

                    <p className="text-gray-500 text-sm mt-1">
                      📍 {property.location}
                    </p>

                    <div className="flex gap-4 text-sm text-gray-500 mt-3">
                      <span>{property.bedrooms} Beds</span>
                      <span>{property.bathrooms} Baths</span>
                      <span>{property.area} m²</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xs bg-[#087474]/10 text-[#087474] px-2 py-1 rounded-full">
                      For Rent
                    </span>

                    <Link to={`/property/${property.id}`}>
                      <button className="text-sm text-[#087474] font-medium hover:underline">
                        View →
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            <div className="text-center pt-6">
              <Link to="/properties">
                <button className="text-[#087474] font-semibold hover:underline">
                  Browse All Rentals →
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT MAP */}
          <div className="lg:w-2/5">
            <div className="sticky top-28 bg-white p-3 rounded-2xl shadow-md border">
              <Map />
              <p className="text-xs text-gray-500 mt-3 text-center">
                📍 Click markers to explore properties
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {["Search", "View", "Contact"].map((step, i) => (
              <div key={i} className="p-6">
                <div className="w-16 h-16 bg-[#087474]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  {i === 0 ? "🔍" : i === 1 ? "📋" : "✉️"}
                </div>
                <h3 className="font-semibold text-lg">{step}</h3>
                <p className="text-gray-500 text-sm mt-2">
                  {step === "Search" && "Find homes by location and price"}
                  {step === "View" && "See full details and images"}
                  {step === "Contact" && "Reach out to the owner instantly"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
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