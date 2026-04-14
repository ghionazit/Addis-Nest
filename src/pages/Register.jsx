import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-gray-100">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-4xl mb-2 text-[#087474]">🏠</div>
          <h2 className="text-2xl font-bold text-gray-800">
            Create Account
          </h2>
          <p className="text-gray-500 text-sm">
            Join AddisNest today
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#087474] focus:border-[#087474] transition"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#087474] focus:border-[#087474] transition"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+251 912 345 678"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#087474] focus:border-[#087474] transition"
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              I am a:
            </label>
            <select className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#087474] focus:border-[#087474] transition">
              <option value="tenant">Tenant (Looking for a property)</option>
              <option value="landlord">Landlord (I have properties to rent)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#087474] focus:border-[#087474] transition"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#087474] focus:border-[#087474] transition"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#087474] text-white py-3 rounded-lg font-semibold hover:bg-[#066565] transition shadow-sm hover:shadow-md"
          >
            Create Account
          </button>
        </form>

        {/* Footer */}
        <p className="text-center mt-6 text-gray-600 text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#087474] font-medium hover:underline"
          >
            Sign In
          </Link>
        </p>

      </div>
    </div>
  );
}