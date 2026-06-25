import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

import logo from "../assets/era-logo.svg";

export default function Footer() {
  return (
    <footer className="bg-[#0B1210] text-green-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          
          <div>
            <div className="mb-4">
              <img
                src={logo}
                alt="Era Marketplace"
                className="h-12 w-auto"
              />
            </div>

            <p className="text-sm text-green-300 leading-relaxed mb-5">
              Connecting farmers directly with buyers.
              Supporting local communities and creating
              trusted agricultural trade across Nigeria.
            </p>

            <div className="flex items-center gap-3">

              <a
                href="#"
                className="w-9 h-9 bg-green-800 hover:bg-green-600 rounded-full flex items-center justify-center transition"
              >
                <FaWhatsapp size={16} />
              </a>

              <a
                href="#"
                className="w-9 h-9 bg-green-800 hover:bg-green-600 rounded-full flex items-center justify-center transition"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="#"
                className="w-9 h-9 bg-green-800 hover:bg-green-600 rounded-full flex items-center justify-center transition"
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="#"
                className="w-9 h-9 bg-green-800 hover:bg-green-600 rounded-full flex items-center justify-center transition"
              >
                <FaLinkedinIn size={16} />
              </a>

            </div>
          </div>

          
          <div>
            <h3 className="text-white font-semibold mb-4">
              Marketplace
            </h3>

            <ul className="space-y-3 text-sm text-green-300">
              <li>
                <a href="#" className="hover:text-white transition">
                  Categories
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Products
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Farmers
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Become a Seller
                </a>
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-white font-semibold mb-4">
              Company
            </h3>

            <ul className="space-y-3 text-sm text-green-300">
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          
          
          <div>
            <h3 className="text-white font-semibold mb-4">
              Stay Connected
            </h3>

            <p className="text-sm text-green-300 mb-5">
              Join our WhatsApp channel for updates,
              farming tips and new product listings.
            </p>

            <button className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-5 py-3 rounded-full transition">
              <FaWhatsapp size={18} />
              Join on WhatsApp
            </button>
          </div>

        </div>

       
       
        <div className="border-t border-green-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">

          <p className="text-xs text-green-400">
            © 2026 Era Marketplace. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-xs text-green-400">

            <a href="#" className="hover:text-white transition">
              Terms & Conditions
            </a>

            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white transition">
              FAQ
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}