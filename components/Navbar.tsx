import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow flex items-center justify-between px-6 py-6" style={{ minHeight: '80px' }}>
      <div className="flex items-center gap-4">
        <Link href="/">
          <Image src="/logo.jpg" alt="Trigon Logo" width={72} height={72} className="rounded-full" />
        </Link>
      </div>
      <div className="flex items-center gap-8">
        {/* About Dropdown */}
        <div className="relative group">
          <button className="font-medium text-gray-800 hover:text-blue-700 focus:outline-none">About</button>
          <div className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none transition-opacity duration-200 z-30">
            <Link href="/history" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">History</Link>
            <Link href="/social" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Social</Link>
            <Link href="/service" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Service</Link>
            <Link href="/leadership" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Leadership</Link>
          </div>
        </div>
        <Link href="/leadership" className="font-medium text-gray-800 hover:text-blue-700">Leadership</Link>
        <Link href="/rush" className="font-medium text-gray-800 hover:text-blue-700">Recruitment</Link>
      </div>
    </nav>
  );
}
