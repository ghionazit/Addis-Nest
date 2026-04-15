import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import properties from "../data/mockProperties";

export default function PropertyDetail() {
  const { id } = useParams();
  const [showContactAlert, setShowContactAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Find property with better error handling
  const property = properties?.find(
    (p) => p.id === Number(id)
  );

  // Handle contact button click
  const handleContactLandlord = async () => {
    setIsLoading(true);
    // Simulate API call or action
    setTimeout(() => {
      setShowContactAlert(true);
      setIsLoading(false);
      setTimeout(() => setShowContactAlert(false), 3000);
    }, 500);
  };

  // Not found component
  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">🏠</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Property Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The property you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/"
            className="inline-block bg-[#087474] text-white px-6 py-3 rounded-lg hover:bg-[#066565] transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  // Features configuration
  const features = [
    { label: "Furnished", value: property.furnished },
    { label: "Parking", value: property.parking },
    { label: "Security", value: property.security },
    { label: "Generator", value: property.generator },
    { label: "Elevator", value: property.elevator },
    { label: "Balcony", value: property.balcony },
    { label: "WiFi", value: property.wifi },
    { label: "AC", value: property.ac },
  ].filter(feature => feature.value !== undefined);

  // Details configuration
  const details = [
    { icon: "🏢", label: "Building", value: property.buildingType },
    { icon: "📅", label: "Listed", value: `${property.listingAge} days ago` },
    { icon: "🏢", label: "Floor", value: property.floor },
    { icon: "👁️", label: "Contacts", value: `${property.contactClicks} contacts` },
    { icon: "📐", label: "Area", value: `${property.area} m²` },
    { icon: "🛏️", label: "Bedrooms", value: property.bedrooms },
    { icon: "🚿", label: "Bathrooms", value: property.bathrooms },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
        <img
          src={property.image}
          className="w-full h-full object-cover"
          alt={property.title}
          onError={(e) => {
            e.target.src = "/api/placeholder/1200/800";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

        {/* Back Button */}
        <Link
          to="/"
          className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition z-10"
          aria-label="Go back"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </Link>

        <div className="absolute bottom-6 left-6 right-6 text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
            {property.title}
          </h1>
          <p className="text-white/90 text-lg flex items-center gap-2">
            <span>📍</span> {property.location}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12 flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left Column */}
        <div className="lg:w-2/3 space-y-6">
          {/* Price Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Price</p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#087474]">
                  {property.price.toLocaleString()} ETB
                </h2>
              </div>

              <div className="flex gap-4 text-gray-600">
                <div className="text-center">
                  <span className="text-xl">🛏️</span>
                  <p className="text-sm font-medium mt-1">{property.bedrooms} Beds</p>
                </div>
                <div className="text-center">
                  <span className="text-xl">🚿</span>
                  <p className="text-sm font-medium mt-1">{property.bathrooms} Baths</p>
                </div>
                <div className="text-center">
                  <span className="text-xl">📐</span>
                  <p className="text-sm font-medium mt-1">{property.area} m²</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span>✨</span> Features & Amenities
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg"
                >
                  <span className="text-lg">
                    {feature.value ? "✅" : "❌"}
                  </span>
                  <span className="text-sm text-gray-700">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span>📝</span> Description
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Details */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span>📋</span> Property Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {details.map((detail, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-600">
                  <span className="text-xl">{detail.icon}</span>
                  <div>
                    <p className="text-xs text-gray-400">{detail.label}</p>
                    <p className="text-sm font-medium">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:w-1/3">
          <div className="sticky top-28 space-y-6">
            {/* Contact Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <span>👤</span> {property.landlord}
              </h3>

              <div className="space-y-3 mb-6">
                <p className="text-gray-600 flex items-center gap-2">
                  <span>📞</span> {property.landlordPhone}
                </p>
                <p className="text-gray-600 flex items-center gap-2">
                  <span>✉️</span> {property.landlordEmail || "contact@property.com"}
                </p>
              </div>

              <button
                onClick={handleContactLandlord}
                disabled={isLoading}
                className="w-full bg-[#087474] text-white py-3 rounded-xl font-semibold hover:bg-[#066565] transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Sending..." : "Contact Landlord"}
              </button>

              {/* Alert Message */}
              {showContactAlert && (
                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg animate-fade-in">
                  <p className="text-green-700 text-sm text-center">
                    ✅ Contact request sent to {property.landlord}!
                  </p>
                </div>
              )}
            </div>

            {/* Trust Badge */}
            <div className="bg-white rounded-xl border border-gray-100 p-4">
              {property.isFraud ? (
                <div className="flex items-center gap-3">
                  <span className="text-2xl">⚠️</span>
                  <div>
                    <p className="text-yellow-600 font-semibold">Under Review</p>
                    <p className="text-xs text-gray-500 mt-1">
                      This listing is being verified
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <p className="text-green-600 font-semibold">Verified Listing</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Trusted by our community
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Share Button */}
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert("Link copied to clipboard!");
              }}
              className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-200 transition flex items-center justify-center gap-2"
            >
              <span>🔗</span> Share this property
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}