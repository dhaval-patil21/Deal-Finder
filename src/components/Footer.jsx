import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo1.png";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-gray-100 py-12 px-4 sm:px-6 lg:px-8 border-t-4 border-orange-400">
      <div className="max-w-7xl mx-auto">
        
        {/* Grid: 1 column on mobile, 2 on small screens, 4 on large */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Logo + Tagline */}
          <div className="flex flex-col items-center lg:items-start space-y-4">
            <Link href="/">
              <div className="bg-white p-3 rounded-lg">
                <Image src={logo} alt="logo" width={120} height={100} />
              </div>
            </Link>
            <p className="text-lg font-medium text-center font-serif lg:text-left text-orange-300">
              All Deals, One Place.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center lg:items-start space-y-3 font-serif">
            <h3 className="text-xl font-bold mb-2 text-orange-300 border-b-2 border-orange-400 pb-1">
              Quick Links
            </h3>
            <Link href="/" className="text-gray-300 hover:text-orange-300 transition-colors duration-200">
              Home
            </Link>
            <Link href="/products" className="text-gray-300 hover:text-orange-300 transition-colors duration-200">
              Products
            </Link>
            {/* <Link href="/about" className="text-gray-300 hover:text-orange-300 transition-colors duration-200">
              About
            </Link> */}
            <Link href="/contact" className="text-gray-300 hover:text-orange-300 transition-colors duration-200">
              Contact
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center lg:items-start space-y-3 font-serif">
            <h3 className="text-xl font-bold mb-2 text-orange-300 border-b-2 border-orange-400 pb-1">
              Contact Us
            </h3>
            <div className="flex items-center gap-3 text-gray-300">
              <FaPhone className="text-orange-400" /> 
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <FaMapMarkerAlt className="text-orange-400" /> 
              <span>Gujarat, India</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <FaEnvelope className="text-orange-400" /> 
              <span>info@dealfinder.com</span>
            </div>
          </div>

          {/* Connect With Us */}
          <div className="flex flex-col items-center lg:items-start space-y-3 font-serif">
            <h3 className="text-xl font-bold mb-2 text-orange-300 border-b-2 border-orange-400 pb-1">
              Connect With Us
            </h3>
            <Link href="#" className="flex items-center gap-3 text-gray-300 hover:text-orange-300 transition-colors duration-200">
              <FaInstagram className="w-6 h-6 text-orange-400" /> 
              <span>Instagram</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 text-gray-300 hover:text-orange-300 transition-colors duration-200">
              <FaTwitter className="w-6 h-6 text-orange-400" /> 
              <span>Twitter</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 text-gray-300 hover:text-orange-300 transition-colors duration-200">
              <FaFacebook className="w-6 h-6 text-orange-400" /> 
              <span>Facebook</span>
            </Link>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 border-t border-slate-600 pt-6 text-center font-serif">
          <p className="text-gray-400">
            © 2025 <span className="text-orange-300 font-semibold">Deal Finder</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}