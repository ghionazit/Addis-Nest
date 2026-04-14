import { useParams } from "react-router-dom";
import properties from "../data/mockProperties";

export default function PropertyDetail() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Property Not Found</h2>
          <p className="text-gray-600 mt-2">The property you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-96 object-cover"
          />

          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">{property.title}</h1>
                <p className="text-gray-500 mt-2">📍 {property.location}</p>
              </div>
              <div className="text-right">
                <span className="text-3xl font-bold text-green-600">
                  ${property.price.toLocaleString()}
                </span>
                <p className="text-gray-500">/month</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 py-6 border-y border-gray-200">
              <div>
                <span className="text-gray-500">Bedrooms:</span>
                <p className="font-bold text-lg text-gray-800">{property.bedrooms}</p>
              </div>
              <div>
                <span className="text-gray-500">Bathrooms:</span>
                <p className="font-bold text-lg text-gray-800">{property.bathrooms}</p>
              </div>
              <div>
                <span className="text-gray-500">Area:</span>
                <p className="font-bold text-lg text-gray-800">{property.area} m²</p>
              </div>
              <div>
                <span className="text-gray-500">Property Type:</span>
                <p className="font-bold text-lg text-gray-800">{property.type}</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Description</h3>
              <p className="text-gray-600 leading-relaxed">{property.description}</p>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-gray-800 mb-2">👤 Landlord: {property.landlord}</h3>
              <p className="text-gray-600">📞 {property.landlordPhone}</p>
            </div>

            <button className="w-full mt-6 bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition font-semibold">
              Send Inquiry to Landlord
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}