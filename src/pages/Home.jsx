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
];

export default function Home() {
  return (
    <div className="bg-gray-50">

      {/* HERO */}
      <div className="bg-[#0b3d3d] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-12">

          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Find Your Perfect Home in Addis Ababa{" "}
              <span className="text-[#fbbf24]">Faster & Simpler</span>
            </h1>

            <p className="text-white/80 text-lg mb-10 max-w-lg">
              Discover verified apartments, studios, and family homes with real photos and direct landlord contact.
            </p>

            <Link to="/properties">
              <button className="bg-[#fbbf24] px-7 py-3 rounded-xl font-semibold hover:scale-105 transition shadow-lg">
                Explore Properties
              </button>
            </Link>
          </div>

          <div className="lg:w-1/2">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src={bgImage}
                alt="hero"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>

        </div>
      </div>

      {/* SEARCH */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white rounded-2xl shadow-2xl p-5 border">
          <div className="grid md:grid-cols-4 gap-3">

            <div className="bg-gray-50 border rounded-lg px-3 py-2 text-sm">
              For Rent
            </div>

            <div className="bg-gray-50 border rounded-lg px-3 py-2 text-sm">
              ETB 2k - 20k
            </div>

            <div className="bg-gray-50 border rounded-lg px-3 py-2 text-sm">
              Addis Ababa
            </div>

            <Link to="/properties">
              <button className="w-full h-full bg-[#087474] text-white rounded-lg font-medium hover:bg-[#066565] transition">
                Search
              </button>
            </Link>

          </div>
        </div>
      </div>

      {/* FEATURED */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Featured Rentals
          </h2>

          <Link to="/properties" className="text-[#087474] font-medium hover:underline">
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {forRentProperties.map((property) => (
            <div
              key={property.id}
              className="bg-[#0b3d3d] text-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <span className="absolute top-3 left-3 bg-[#087474] text-xs px-2 py-1 rounded-full">
                  For Rent
                </span>
              </div>

              <div className="p-4">
                <h3 className="text-sm font-semibold">{property.title}</h3>

                <p className="text-white/60 text-xs mt-1">
                  📍 {property.location}
                </p>

                <div className="flex justify-between text-xs text-white/60 mt-2 border-b border-white/10 pb-2">
                  <span>{property.bedrooms} Bed</span>
                  <span>{property.bathrooms} Bath</span>
                  <span>{property.area} m²</span>
                </div>

                <div className="flex justify-between items-center mt-3">
                  <span className="text-lg font-bold">
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
      </div>

      {/* ABOUT SECTION */}
      <div id="about" className="bg-white py-20 border-t">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            About AddisNest
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            AddisNest helps people in Ethiopia find rental homes quickly and safely.
            We connect tenants directly with landlords through verified listings,
            real photos, and clear pricing.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">

            <div className="p-6 bg-gray-50 rounded-xl border">
              <h3 className="font-semibold mb-2">🔍 Easy Search</h3>
              <p className="text-sm text-gray-600">
                Find homes by location, price, and type in seconds.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl border">
              <h3 className="font-semibold mb-2">✔ Verified Listings</h3>
              <p className="text-sm text-gray-600">
                We focus on real, up-to-date rental properties only.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl border">
              <h3 className="font-semibold mb-2">📞 Direct Contact</h3>
              <p className="text-sm text-gray-600">
                Talk directly to landlords without middle delays.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* MAP + CARDS SIDE BY SIDE */}
<div className="max-w-7xl mx-auto px-6 pb-16">
  <div className="grid lg:grid-cols-2 gap-6 items-stretch">

    {/* LEFT: PROPERTY CARDS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 auto-rows-fr">

      {forRentProperties.map((property) => (
        <div
          key={property.id}
          className="bg-[#0b3d3d] text-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition flex flex-col"
        >
          <img
            src={property.image}
            alt={property.title}
            className="h-36 w-full object-cover"
          />

          <div className="p-3 flex flex-col justify-between flex-1">
            <div>
              <h3 className="text-sm font-semibold">{property.title}</h3>
              <p className="text-xs text-white/60 mt-1">
                {property.location}
              </p>
            </div>

            <div className="mt-3 flex justify-between items-center">
              <span className="text-sm font-bold text-[#fbbf24]">
                {property.price} ETB
              </span>

              <span className="text-xs text-white/60">
                {property.bedrooms} Bed
              </span>
            </div>
          </div>
        </div>
      ))}

    </div>

    {/* RIGHT: MAP */}
    <div className="bg-white p-4 rounded-2xl shadow-md border h-full min-h-[300px]">
      <Map />
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