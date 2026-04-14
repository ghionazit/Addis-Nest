// src/components/Map.jsx
export default function Map() {
  return (
    <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
      <div className="h-[450px] flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="text-center p-6">
          <div className="w-20 h-20 bg-[#087474]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">🗺️</span>
          </div>
          <h3 className="text-lg font-bold text-gray-700 mb-1">Rental Properties Map</h3>
          <p className="text-gray-500 text-sm max-w-xs">
            Interactive map showing all available rental properties
          </p>
          <div className="mt-4 flex gap-2 justify-center">
            <div className="w-2 h-2 bg-[#087474] rounded-full"></div>
            <div className="w-2 h-2 bg-[#087474] rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-[#087474] rounded-full"></div>
          </div>
          <p className="text-xs text-gray-400 mt-4">Coming Soon</p>
        </div>
      </div>
    </div>
  );
}