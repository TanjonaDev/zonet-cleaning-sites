import { Sparkles, Home, Calendar } from "lucide-react";
import { Button } from "./components/ui/button";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-2 rounded-lg">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-semibold text-gray-800">Zonet</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="text-gray-800 hover:text-blue-600 transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Services
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Testimonial
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Rent & Shop
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            About Us
          </a>
        </nav>

        <button className="px-6 py-2 border-2 border-gray-800 rounded-full text-gray-800 hover:bg-gray-800 hover:text-white transition-colors">
          Contact Us
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Image droite - remplace les background shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none">
          <img
            src="/images/hero-bg.png"
            alt=""
            className="w-full h-full object-cover object-left"
          />
          {/* Fondu vers la gauche pour ne pas empiéter sur le texte */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/30 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="md:w-1/2 mb-12 md:mb-16">
            <h1 className="text-4xl md:text-6xl mb-6">
              <span className="text-gray-700">Guaranteed House</span>
              <br />
              <span className="text-gray-900 font-semibold">
                Cleaning Service
              </span>
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              More than five years of providing home cleaning services.
              <br />
              98% of our customers are satisfied with our services.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg">
              See Details
            </button>
          </div>

          {/* Get Our Service Card */}
          <div className="relative max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <div className="grid md:grid-cols-[200px_1fr_1fr_auto] gap-4 items-center">
              <h2 className="text-2xl font-semibold text-gray-800">
                Get Our Service
              </h2>

              <div className="relative">
                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg appearance-none bg-gray-50 text-gray-600 cursor-pointer">
                  <option>Service Type</option>
                  <option>Home Cleaning</option>
                  <option>Carpet Cleaning</option>
                  <option>Office Cleaning</option>
                  <option>Window Cleaning</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              <div className="relative">
                <input
                  type="date"
                  placeholder="Select Date"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-600"
                />
              </div>

              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all shadow-md whitespace-nowrap">
                See Details
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side */}
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-6">
              What we do?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              More than five years of providing service for house cleaning, we
              have several options that you can choose from.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg">
              See Details
            </button>
          </div>

          {/* Right side - Services */}
          <div className="space-y-8">
            {/* Home Cleaning Service */}
            <div className="flex gap-6 items-start bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Home className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Home Cleaning & Sanitizing
                </h3>
                <p className="text-gray-600">
                  We provide fully trained insured and highly experienced
                  commercial cleaners.
                </p>
              </div>
            </div>

            {/* Carpet Cleaning Service */}
            <div className="flex gap-6 items-start bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Carpet Cleaning & Sanitizing
                </h3>
                <p className="text-gray-600">
                  We provide fully trained insured and highly experienced
                  commercial cleaners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
