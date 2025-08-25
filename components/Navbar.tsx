"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glass shadow-modern-lg py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <Image 
              src="/trigonnobg.png" 
              alt="Trigon Logo" 
              width={48} 
              height={48} 
              className="rounded-full transition-transform group-hover:scale-105" 
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-red-500/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <span className="hidden sm:block font-bold text-lg bg-gradient-to-r from-red-800 to-red-600 bg-clip-text text-transparent">
            Trigon
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {/*About Dropdown
           <div className="relative group">
            <button className="flex items-center space-x-1 font-medium text-gray-700 hover:text-red-600 transition-colors">
              <span>About</span>
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-48 glass rounded-xl shadow-modern-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
              <div className="py-2">
                <a href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors rounded-lg mx-2">History</a>
                <a href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors rounded-lg mx-2">Social</a>
                <a href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors rounded-lg mx-2">Service</a>
                <a href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors rounded-lg mx-2">Leadership</a>
              </div>
            </div>
          </div>

          <a href="#" className="font-medium text-gray-700 hover:text-red-600 transition-colors">
            Newsletter
          </a>
          <a href="#" className="font-medium text-gray-700 hover:text-red-600 transition-colors">
            Leadership
          </a> */}
          <Link 
            href="/rush" 
            className="gradient-accent text-white font-semibold px-6 py-2.5 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Recruitment
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass border-t border-white/20">
          <div className="px-6 py-4 space-y-3">
            <a href="#" className="block py-2 text-gray-700 hover:text-red-600 transition-colors">History</a>
            <a href="#" className="block py-2 text-gray-700 hover:text-red-600 transition-colors">Social</a>
            <a href="#" className="block py-2 text-gray-700 hover:text-red-600 transition-colors">Service</a>
            <a href="#" className="block py-2 text-gray-700 hover:text-red-600 transition-colors">Leadership</a>
            <a href="#" className="block py-2 text-gray-700 hover:text-red-600 transition-colors">Newsletter</a>
            <Link 
              href="/rush" 
              className="block text-center gradient-accent text-white font-semibold px-6 py-2.5 rounded-full mt-4"
            >
              Recruitment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}