"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-white shadow-md"
      } flex items-center justify-between px-8 py-4`}
    >
      <div className="flex items-center gap-4">
        <Link href="/">
          <Image
            src="/trigon-society.png"
            alt="Trigon Logo"
            width={60}
            height={60}
          />
        </Link>
        <Link href="/">
          <h1 className="text-2xl font-bold text-gray-800">Trigon Society</h1>
        </Link>
      </div>
      <div className="flex items-center gap-8">
        <Link href="/about" className="text-lg text-gray-600 hover:text-primary transition-colors">
          About
        </Link>
        <Link href="/members" className="text-lg text-gray-600 hover:text-primary transition-colors">
          Members
        </Link>
        <Link
          href="/rush"
          className="bg-primary text-white font-bold px-6 py-3 rounded-full hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Recruitment
        </Link>
      </div>
    </nav>
  );
}