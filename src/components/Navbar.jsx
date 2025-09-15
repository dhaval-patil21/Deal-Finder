"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo1.png";
import { GitCompare } from "lucide-react";
import { HiMenu, HiX } from "react-icons/hi";
import { useCompare } from "../context/CompareContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  // const { compareCount } = useCompare();

  const { compareList } = useCompare();
  const compareCount = compareList.length;
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow-lg border-b-2 border-orange-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image src={logo} alt="logo" width={120} height={100} />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 text-lg font-serif items-center text-slate-800 font-medium">
            <Link href="/" className="hover:text-orange-500 transition-colors duration-200">
              Home
            </Link>
            <Link href="/products" className="hover:text-orange-500 transition-colors duration-200">
              Shop
            </Link>
            <Link href="/contact" className="hover:text-orange-500 transition-colors duration-200">
              Contact
            </Link>
          </div>

          {/* Desktop Compare Icon */}
          <div className="hidden md:flex items-center">
            <Link href="/compare" className="hover:text-orange-500 transition-colors duration-200 p-2 relative">
              <GitCompare className="w-6 h-6" />
              {compareCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {compareCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-3xl text-slate-700 hover:text-orange-500 transition-colors duration-200">
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-slate-50 border-t border-orange-200 flex flex-col space-y-4 pt-4 pb-6 font-serif text-lg text-slate-700">
            <Link 
              href="/" 
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 hover:text-orange-500 hover:bg-orange-50 transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              href="/products" 
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 hover:text-orange-500 hover:bg-orange-50 transition-colors duration-200"
            >
              Shop
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 hover:text-orange-500 hover:bg-orange-50 transition-colors duration-200"
            >
              Contact
            </Link>

            {/* Mobile Compare Link */}
            <Link 
              href="/compare" 
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 hover:text-orange-500 hover:bg-orange-50 transition-colors duration-200 flex items-center space-x-2 relative"
            >
              <GitCompare className="w-5 h-5" />
              <span>Compare</span>
              {compareCount > 0 && (
                <span className="bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {compareCount}
                </span>
              )}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}