


import Link from "next/link";
import Image from "next/image";

export default function Home() {

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      {/* Navbar */}
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
          <Link href="/newsletter" className="font-medium text-gray-800 hover:text-blue-700">Newsletter</Link>
          <Link href="/leadership" className="font-medium text-gray-800 hover:text-blue-700">Leadership</Link>
          <Link href="/rush" className="font-medium text-gray-800 hover:text-blue-700">Recruitment</Link>
        </div>
      </nav>
      {/* Hero Section */}
      <div className="relative min-h-[60vh] w-full flex items-center justify-center bg-gray-900 overflow-hidden">
        <Image
          src="/121-shamrock-road.jpg"
          alt="Trigon Engineering Society"
          fill
          style={{ objectFit: 'cover', zIndex: 0 }}
          className="absolute inset-0 opacity-40"
          priority
        />
        <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-white drop-shadow-lg text-center p-8">
          Trigon Engineering Society
        </h1>
      </div>
      {/* Newsletter Section */}
      <section className="w-full flex flex-col md:flex-row items-center justify-center gap-8 py-16 px-4 bg-white">
        <div className="w-full max-w-xs flex-shrink-0 flex items-center justify-center">
          <div className="w-64 h-40 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
            {/* Replace src with your newsletter image */}
            <Image src="/newsletter-placeholder.jpg" alt="Newsletter Cover" width={256} height={160} className="object-cover w-full h-full" />
          </div>
        </div>
        <div className="flex-1 max-w-xl">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Read Our Latest Newsletter</h2>
          <p className="mb-4 text-gray-700">Stay up to date with the latest news, events, and stories from Trigon Engineering Society. Check out our most recent newsletter for highlights and important updates.</p>
          <a href="/newsletters/spring-2025.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-700 text-white font-semibold px-6 py-3 rounded hover:bg-blue-800 transition">View Newsletter</a>
        </div>
      </section>
      {/* Footer */}
      <footer className="w-full bg-gray-100 mt-16 py-8 flex flex-col items-center border-t border-gray-200">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <Image src="/logo.jpg" alt="Trigon Logo" width={56} height={56} className="rounded-full" />
          <div className="text-center md:text-left">
            <div className="font-bold text-lg text-gray-900">Trigon Engineering Society</div>
            <div className="text-gray-700">University of Virginia at Charlottesville, VA</div>
            <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
              <a href="https://instagram.com/trigonatuva" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.425 3.678 1.406c-.981.981-1.275 2.093-1.334 3.374C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.612.059 1.281.353 2.393 1.334 3.374.981.981 2.093 1.275 3.374 1.334C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.353 3.374-1.334.981-.981 1.275-2.093 1.334-3.374.059-1.28.072-1.689.072-7.612 0-5.923-.013-6.332-.072-7.612-.059-1.281-.353-2.393-1.334-3.374-.981-.981-2.093-1.275-3.374-1.334C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                <span className="sr-only">Instagram</span>
              </a>
            </div>
            <div className="italic text-gray-600 mt-2">Per dilligentium crescunt frucuts laboris</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
