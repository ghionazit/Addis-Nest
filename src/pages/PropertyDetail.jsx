import { useParams } from "react-router-dom";
import properties from "../data/mockProperties";

export default function PropertyDetail() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) {
    return <div className="p-10 text-center">Property not found</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO IMAGE */}
      <div className="relative h-[400px] md:h-[500px]">
        <img
          src={property.image}
          className="w-full h-full object-cover"
          alt=""
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute bottom-6 left-6 text-white">
          <h1 className="text-3xl md:text-4xl font-bold">
            {property.title}
          </h1>
          <p className="text-white/80 mt-1">
            📍 {property.location}
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row gap-10">

        {/* LEFT CONTENT */}
        <div className="lg:w-2/3 space-y-10">

          {/* PRICE + QUICK INFO */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <div className="flex justify-between items-center flex-wrap gap-4">
              <h2 className="text-3xl font-bold text-[#087474]">
                {property.price} ETB
              </h2>

              <div className="flex gap-6 text-gray-600 text-sm">
                <span>{property.bedrooms} Beds</span>
                <span>{property.bathrooms} Baths</span>
                <span>{property.area} m²</span>
              </div>
            </div>
          </div>

          {/* FEATURES */}
          <div className="bg-white p-6 rounded-2xl border">
            <h3 className="text-lg font-semibold mb-4">Features</h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
              {[
                { label: "Furnished", value: property.furnished },
                { label: "Parking", value: property.parking },
                { label: "Security", value: property.security },
                { label: "Generator", value: property.generator },
                { label: "Elevator", value: property.elevator },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg">
                  <span>{item.value ? "✔️" : "✖️"}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="bg-white p-6 rounded-2xl border">
            <h3 className="text-lg font-semibold mb-3">Description</h3>
            <p className="text-gray-600">{property.description}</p>
          </div>

          {/* EXTRA DETAILS */}
          <div className="bg-white p-6 rounded-2xl border">
            <h3 className="text-lg font-semibold mb-3">Details</h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-600">
              <p>🏢 Building: {property.buildingType}</p>
              <p>📅 Listed: {property.listingAge} days ago</p>
              <p>🏢 Floor: {property.floor}</p>
              <p>👁️ {property.contactClicks} contacts</p>
            </div>
          </div>

        </div>

        {/* RIGHT SIDEBAR (STICKY) */}
        <div className="lg:w-1/3">

          <div className="sticky top-28 space-y-4">

            {/* CONTACT CARD */}
            <div className="bg-white p-6 rounded-2xl shadow-md border">
              <h3 className="font-semibold mb-2">👤 {property.landlord}</h3>
              <p className="text-gray-500 text-sm mb-4">
                📞 {property.landlordPhone}
              </p>

              <button className="w-full bg-[#087474] text-white py-3 rounded-xl font-semibold hover:bg-[#066565] transition">
                Contact Landlord
              </button>
            </div>

            {/* TRUST */}
            <div className="bg-white p-4 rounded-xl border text-sm">
              {!property.isFraud ? (
                <p className="text-green-600">✅ Verified Listing</p>
              ) : (
                <p className="text-yellow-600">⚠️ Under Review</p>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}