import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-gray-100">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-4xl mb-2 text-[#087474]">🏠</div>
          <h2 className="text-2xl font-bold text-gray-800">
            Welcome Back
          </h2>
          <p className="text-gray-500 text-sm">
            Sign in to your AddisNest account
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">

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
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#087474] focus:border-[#087474] transition"
            />
          </div>

          {/* Extra options */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2 text-gray-500">
              <input type="checkbox" className="accent-[#087474]" />
              Remember me
            </label>

            <a href="#" className="text-[#087474] hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#087474] text-white py-3 rounded-lg font-semibold hover:bg-[#066565] transition shadow-sm hover:shadow-md"
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p className="text-center mt-6 text-gray-600 text-sm">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-[#087474] font-medium hover:underline"
          >
            Sign Up
          </Link>
        </p>

      </div>
    </div>
  );
}