import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/121-shamrock-road.jpg"
          alt="Trigon Engineering Society"
          fill
          style={{ objectFit: 'cover' }}
          className="absolute inset-0"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-slate-900/50 to-red-900/70"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-red-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-white/5 rounded-full blur-lg animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
              Trigon
            </span>
            <span className="block text-3xl md:text-5xl font-normal text-blue-100 mt-2">
              Engineering Society
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Building tomorrow's leaders through engineering excellence, brotherhood, and service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/rush" 
              className="gradient-accent text-white font-semibold px-8 py-4 rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg"
            >
              Join Our Brotherhood
            </Link>
            <Link 
              href="/about" 
              className="glass text-gray-800 font-semibold px-8 py-4 rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Newsletter Image */}
            <div className="relative group animate-slide-in-left">
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-modern-lg">
                <Image 
                  src="/newsletter-placeholder.jpg" 
                  alt="Newsletter Cover" 
                  fill
                  className="object-cover transition-transform group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Latest Issue
              </div>
            </div>

            {/* Newsletter Content */}
            <div className="space-y-6 animate-fade-in-up">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Stay <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">Connected</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Get the latest news, events, and stories from Trigon Engineering Society. Our quarterly newsletter keeps you updated on brotherhood activities, member achievements, and upcoming events.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/newsletters/spring-2025.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="gradient-primary text-white font-semibold px-8 py-4 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
                >
                  Read Newsletter
                </Link>
                <Link 
                  href="/newsletter" 
                  className="border-2 border-gray-300 text-gray-700 font-semibold px-8 py-4 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300 text-center"
                >
                  View Archive
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Explore <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">Trigon</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes our engineering society unique through our pillars of excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Brotherhood",
                description: "Building lifelong connections through shared experiences and mutual support",
                icon: "👥",
                href: "/social",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "Service",
                description: "Making a positive impact in our community through meaningful volunteer work",
                icon: "🤝",
                href: "/service",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                title: "Leadership",
                description: "Developing tomorrow's engineering leaders through hands-on experience",
                icon: "⭐",
                href: "/leadership",
                gradient: "from-orange-500 to-red-500"
              }
            ].map((item, index) => (
              <Link key={item.title} href={item.href} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-modern hover:shadow-modern-lg transition-all duration-300 transform group-hover:scale-105 border border-gray-100">
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:rotate-6 transition-transform`}>
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex items-center space-x-6">
              <Image src="/logo.jpg" alt="Trigon Logo" width={80} height={80} className="rounded-full shadow-lg" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Trigon Engineering Society</h3>
                <p className="text-gray-300 mb-2">University of Virginia • Charlottesville, VA</p>
                <div className="flex items-center space-x-4">
                  <a 
                    href="https://instagram.com/trigonatuva" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-rose-500 px-4 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span className="text-sm font-medium">Follow Us</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-2xl font-italic text-gray-300 mb-4">
                "Per dilligentium crescunt frucuts laboris"
              </p>
              <p className="text-gray-400">
                Through diligence grow the fruits of labor
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}