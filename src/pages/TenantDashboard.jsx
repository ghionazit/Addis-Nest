import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

export default function TenantDashboard() {
  const navigate = useNavigate();

  const currentTenant = {
    id: 1,
    name: "John Tenant",
  };

  const [properties, setProperties] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filters
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [sort, setSort] = useState("date");

  // Load data
  useEffect(() => {
    const loadData = () => {
      const props = JSON.parse(localStorage.getItem("properties")) || [];
      const books = JSON.parse(localStorage.getItem("tenantBookings")) || [];

      setProperties(props);
      setBookings(books);
      setLoading(false);
    };

    loadData();

    window.addEventListener("storage", loadData);
    window.addEventListener("focus", loadData);

    return () => {
      window.removeEventListener("storage", loadData);
      window.removeEventListener("focus", loadData);
    };
  }, []);

  // Merge bookings with properties
  const bookedProperties = useMemo(() => {
    return bookings
      .filter((b) => b.tenantId === currentTenant.id)
      .map((b) => {
        const property = properties.find((p) => p.id === b.propertyId);
        if (!property) return null;

        return {
          ...property,
          ...b,
        };
      })
      .filter(Boolean);
  }, [bookings, properties]);

  // Filters + sorting
  const filtered = useMemo(() => {
    let data = [...bookedProperties];

    if (search) {
      data = data.filter(
        (p) =>
          p.title.toLowerCase().includes(search.toLowerCase()) ||
          p.location.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (status !== "all") {
      data = data.filter((p) => p.status === status);
    }

    if (sort === "price") {
      data.sort((a, b) => (b.price || 0) - (a.price || 0));
    } else if (sort === "name") {
      data.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      data.sort(
        (a, b) =>
          new Date(b.bookingDate || 0) - new Date(a.bookingDate || 0)
      );
    }

    return data;
  }, [bookedProperties, search, status, sort]);

  // Stats
  const stats = useMemo(() => {
    return {
      total: bookedProperties.length,
      active: bookedProperties.filter((p) => p.status === "active").length,
      completed: bookedProperties.filter((p) => p.status === "completed").length,
    };
  }, [bookedProperties]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600">Loading your dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-50">

      {/* HEADER */}
      <div className="bg-white shadow sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
               My Rentals
            </h1>
            <p className="text-sm text-gray-500">
              Welcome back, {currentTenant.name}
            </p>
          </div>

          <button
            onClick={() => navigate("/")}
            className="bg-yellow-400 font-semibold px-4 py-2 rounded-lg hover:bg-[#0a3535]"
          >
            Browse Properties
          </button>
        </div>
      </div>

      {/* STATS */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">
        <Stat title="Total Bookings" value={stats.total} icon="📋" />
        <Stat title="Active Rentals" value={stats.active} icon="🏠" />
        <Stat title="Completed" value={stats.completed} icon="📅" />
      </div>

      {/* FILTERS */}
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <div className="bg-white p-4 rounded shadow grid md:grid-cols-3 gap-3">

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search properties..."
            className="border p-2 rounded"
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="date">Newest</option>
            <option value="price">Price</option>
            <option value="name">Name</option>
          </select>

        </div>
      </div>

      {/* LIST */}
      <div className="max-w-7xl mx-auto px-4 pb-10 space-y-4">

        {filtered.length === 0 ? (
          <div className="bg-[#0b3d3d] p-10 text-center rounded shadow">
            <p className="text-white">No bookings found</p>
            <button
              onClick={() => navigate("/")}
              className="mt-4 bg-yellow-400 font-semibold px-4 py-2 rounded"
            >
              Browse Properties
            </button>
          </div>
        ) : (
          filtered.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded shadow md:flex overflow-hidden"
            >
              {/* IMAGE */}
              <img
                src={p.image || "https://via.placeholder.com/400"}
                className="md:w-64 h-48 object-cover"
                alt={p.title}
              />

              {/* CONTENT */}
              <div className="p-5 flex-1">
                <div className="flex justify-between">
                  <h3 className="font-semibold text-lg">{p.title}</h3>

                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      p.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {p.status}
                  </span>
                </div>

                <p className="text-gray-500">📍 {p.location}</p>

                <div className="text-sm text-gray-500 mt-2 flex gap-3">
                  <span>🛏️ {p.bedrooms}</span>
                  <span>🚿 {p.bathrooms}</span>
                  <span>📐 {p.area}m²</span>
                </div>

                <p className="text-[#0b3d3d] font-bold mt-2">
                  ${p.price?.toLocaleString()}
                </p>

                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => navigate(`/property/${p.id}`)}
                    className="bg-[#0b3d3d] text-white px-4 py-2 rounded"
                  >
                    View
                  </button>

                  <button
                    onClick={() =>
                      (window.location.href =
                        "mailto:landlord@example.com")
                    }
                    className="border px-4 py-2 rounded"
                  >
                    Contact
                  </button>
                </div>
              </div>
            </div>
          ))
        )}

      </div>
    </div>
  );
}

/* ---------------- SMALL COMPONENT ---------------- */

function Stat({ title, value, icon }) {
  return (
    <div className="bg-[#0b3d3d] p-6 rounded shadow flex justify-between items-center">
      <div>
        <p className="text-sm text-white">{title}</p>
        <p className="text-2xl text-white font-bold">{value}</p>
      </div>
      <span className="text-3xl">{icon}</span>
    </div>
  );
}