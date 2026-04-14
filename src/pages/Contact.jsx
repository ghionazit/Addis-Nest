import { Link } from "react-router-dom";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Page Header */}
      <div className="bg-[#0b3d3d] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have questions? We'd love to hear from you
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            
            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#087474]/10 rounded-full flex items-center justify-center">
                    <span className="text-[#087474] text-lg">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-500 text-sm">Addis Ababa, Ethiopia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#087474]/10 rounded-full flex items-center justify-center">
                    <span className="text-[#087474] text-lg">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-500 text-sm">+251 912 345 678</p>
                    <p className="text-gray-500 text-sm">+251 923 456 789</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#087474]/10 rounded-full flex items-center justify-center">
                    <span className="text-[#087474] text-lg">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-500 text-sm">info@addisnest.com</p>
                    <p className="text-gray-500 text-sm">support@addisnest.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#087474]/10 rounded-full flex items-center justify-center">
                    <span className="text-[#087474] text-lg">⏰</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Working Hours</h3>
                    <p className="text-gray-500 text-sm">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-500 text-sm">Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-3">Follow Us</h3>
                <div className="flex gap-4">
                  <span className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-xl cursor-pointer hover:bg-[#087474]/10 transition">📘</span>
                  <span className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-xl cursor-pointer hover:bg-[#087474]/10 transition">📷</span>
                  <span className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-xl cursor-pointer hover:bg-[#087474]/10 transition">🐦</span>
                  <span className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-xl cursor-pointer hover:bg-[#087474]/10 transition">💼</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#087474]"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#087474]"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#087474]"
                    placeholder="Property inquiry / Support / Question"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#087474] resize-none"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#087474] text-white py-3 rounded-xl font-semibold hover:bg-[#066565] transition"
                >
                  Send Message →
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-gray-200 rounded-2xl overflow-hidden h-64">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
              <div className="text-center">
                <span className="text-3xl">🗺️</span>
                <p className="text-gray-500 text-sm mt-2">Find us here - Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
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