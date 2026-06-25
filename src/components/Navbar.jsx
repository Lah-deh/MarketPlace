import { useState } from "react";
import { Search, Sun, Menu, X } from "lucide-react";
import eraLogo from "../assets/era-logo.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">

          {/* Logo */}
          <a href="#" className="shrink-0 flex items-center gap-2">
            <div className="bg-green-600 rounded-xl p-1.5">
              <img src={eraLogo} alt="Era Marketplace" className="h-7 w-auto brightness-0 invert" />
            </div>
          </a>

          {/* Nav links — desktop */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-green-600 transition-colors font-medium text-gray-900 border-b-2 border-green-600 pb-0.5">Home</a>
            <a href="#categories" className="hover:text-green-600 transition-colors">Categories</a>
            <a href="#how-it-works" className="hover:text-green-600 transition-colors">How it works</a>
            <a href="#" className="hover:text-green-600 transition-colors">About Us</a>
            <a href="#" className="hover:text-green-600 transition-colors">Contact</a>
          </nav>

          {/* Search — desktop */}
          <div className="hidden md:flex flex-1 max-w-sm mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products, farmers..."
                className="w-full pl-4 pr-10 py-2 text-sm border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-600">
                <Search size={16} />
              </button>
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button className="hidden md:flex items-center gap-1 text-gray-500 hover:text-gray-800 transition-colors">
              <Sun size={16} />
              <span className="text-xs font-medium">Light</span>
            </button>
            <a
              href="#"
              className="hidden md:inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
            >
              Sell on Era
            </a>
            <button
              className="md:hidden p-1 text-gray-600"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-3">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search products, farmers..."
                className="w-full pl-4 pr-10 py-2 text-sm border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
            {["Home", "Categories", "How it works", "About Us", "Contact"].map((link) => (
              <a key={link} href="#" className="block text-sm text-gray-700 hover:text-green-600 py-1">
                {link}
              </a>
            ))}
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-full mt-2"
            >
              Sell on Era
            </a>
          </div>
        )}
      </div>
    </header>
  );
}