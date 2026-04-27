import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LandlordDashboard() {
  const navigate = useNavigate();

  const [properties, setProperties] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  const [stats, setStats] = useState({
    total: 0,
    available: 0,
    rented: 0,
    totalValue: 0,
  });

  // LOAD DATA
  const loadProperties = () => {
    const stored = JSON.parse(localStorage.getItem("properties")) || [];

    const safe = stored.map((p) => ({
      ...p,
      status: p.status || "available",
      price: p.price || 0,
      bedrooms: p.bedrooms || 0,
      bathrooms: p.bathrooms || 0,
      area: p.area || 0,
    }));

    setProperties(safe);
  };

  useEffect(() => {
    loadProperties();

    window.addEventListener("focus", loadProperties);
    window.addEventListener("storage", loadProperties);

    return () => {
      window.removeEventListener("focus", loadProperties);
      window.removeEventListener("storage", loadProperties);
    };
  }, []);

  // FILTER + STATS
  useEffect(() => {
    let data = [...properties];

    if (search) {
      data = data.filter(
        (p) =>
          p.title.toLowerCase().includes(search.toLowerCase()) ||
          p.location.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (type !== "all") {
      data = data.filter((p) => p.type === type);
    }

    setFiltered(data);

    setStats({
      total: properties.length,
      available: properties.filter((p) => p.status !== "rented").length,
      rented: properties.filter((p) => p.status === "rented").length,
      totalValue: properties.reduce((s, p) => s + p.price, 0),
    });
  }, [properties, search, type]);

  // ACTIONS
  const deleteProperty = (id) => {
    if (!window.confirm("Delete property?")) return;

    const updated = properties.filter((p) => p.id !== id);
    localStorage.setItem("properties", JSON.stringify(updated));
    loadProperties();
  };

  const toggleStatus = (id) => {
    const updated = properties.map((p) =>
      p.id === id
        ? { ...p, status: p.status === "rented" ? "available" : "rented" }
        : p
    );

    localStorage.setItem("properties", JSON.stringify(updated));
    loadProperties();
  };

  return (
    <div className="min-h-screen bg-white pt-16">

      {/* HEADER */}
      <div className="bg-white sticky top-0 z-20 shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold"> Dashboard</h1>
            <p className="text-sm text-gray-500">Manage properties</p>
          </div>

          <button
            onClick={() => navigate("/add-property")}
            className="bg-[#fbbf24] px-5 py-2 rounded-lg font-semibold hover:bg-[#f59e0b]"
          >
            + Add Property
          </button>
        </div>
      </div>

      <div className="h-4 bg-white" />

      {/* STATS */}
      <div className="max-w-7xl  mx-auto px-4 py-8 grid md:grid-cols-4 gap-6">
        <Stat title="Total" value={stats.total} icon="🏘️" />
        <Stat title="Available" value={stats.available} icon="✅" />
        <Stat title="Rented" value={stats.rented} icon="🔑" />
        <Stat title="Value" value={`$${stats.totalValue.toLocaleString()}`} icon="💰" />
      </div>

      {/* FILTER */}
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow flex gap-3 flex-wrap">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="border p-2 rounded flex-1"
          />

          {["all", "Apartment", "House", "Villa", "Studio"].map((t) => (
            <button
              key={t}
              onClick={() => setType(t)}
              className={`px-3 py-1 rounded ${
                type === t ? "bg-[#fbbf24]" : "bg-gray-200"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-4 pb-10">
        {filtered.length === 0 ? (
          <Empty onAdd={() => navigate("/add-property")} />
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <PropertyCard
                key={p.id}
                p={p}
                onDelete={deleteProperty}
                onToggle={toggleStatus}
                onEdit={(id) => navigate(`/edit-property/${id}`)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------- COMPONENTS ---------- */

function Stat({ title, value, icon }) {
  return (
    <div className="bg-[#0b3d3d] p-6 rounded-lg shadow flex justify-between">
      <div>
        <p className="text-sm text-white ">{title}</p>
        <p className="text-xl text-white font-bold">{value}</p>
      </div>
      <span className="text-2xl">{icon}</span>
    </div>
  );
}

function PropertyCard({ p, onDelete, onToggle, onEdit }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <img
        src={p.image || "https://via.placeholder.com/400x300"}
        className="h-48 w-full object-cover"
        alt=""
      />

      <div className="p-4">
        <h3 className="font-semibold">{p.title}</h3>
        <p className="text-sm text-gray-500">📍 {p.location}</p>

        <p className="text-[#fbbf24] font-bold mt-2">
          ${p.price.toLocaleString()}
        </p>

        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>{p.bedrooms} bed</span>
          <span>{p.bathrooms} bath</span>
          <span>{p.area} m²</span>
        </div>

        <div className="flex gap-2 mt-4">
          <button
            onClick={() => onToggle(p.id)}
            className="flex-1 bg-blue-500 text-white rounded px-2 py-1"
          >
            Toggle
          </button>

          <button
            onClick={() => onEdit(p.id)}
            className="bg-[#fbbf24] px-2 rounded"
          >
            Edit
          </button>

          <button
            onClick={() => onDelete(p.id)}
            className="bg-red-500 text-white px-2 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

function Empty({ onAdd }) {
  return (
    <div className="bg-[#0b3d3d] p-10 text-center rounded-lg shadow">
      <h2 className="text-xl text-white font-bold mb-3">No Properties</h2>
      <button
        onClick={onAdd}
        className="bg-[#fbbf24] px-5 py-2 rounded"
      >
        Add Property
      </button>
    </div>
  );
}