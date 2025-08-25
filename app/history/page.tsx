import React from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";

export default function History() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <Navbar />
      {/* Hero Section */}
      <div className="relative w-full h-96 md:h-[32rem] flex items-center justify-center mb-12">
        <Image
          src="/121-shamrock-road.jpg"
          alt="Trigon Engineering Society House"
          width={1600}
          height={400}
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg text-center">Our History</h1>
        </div>
      </div>

      <div className="w-full flex flex-col items-center px-4">
        {/* Title Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
          Trigon Engineering Society History
        </h2>

        {/* History Content */}
        <div className="w-full max-w-4xl space-y-8 mb-12">
          {/* Founding Section */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Founding</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              The Trigon Engineering Society was founded at the University of Virginia as a professional 
              engineering organization dedicated to fostering brotherhood, academic excellence, and service 
              to the community. Our society has been a cornerstone of the engineering school, bringing 
              together students who share a passion for engineering and a commitment to excellence.
            </p>
          </section>

          {/* Traditions Section */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Traditions</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Throughout our history, Trigon has maintained strong traditions that bind our members 
              together across generations. Our motto "Per dilligentium crescunt fructus laboris" 
              (Through diligence, the fruits of labor grow) reflects our commitment to hard work 
              and dedication in all endeavors.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our house at 121 Shamrock Road has served as the heart of our community, hosting 
              countless meetings, events, and celebrations that have strengthened the bonds between 
              our members and created lasting memories.
            </p>
          </section>

          {/* Legacy Section */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Legacy</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Over the years, Trigon alumni have gone on to make significant contributions in 
              engineering, technology, business, and public service. Our members have become 
              leaders in their fields, carrying forward the values and principles instilled 
              during their time in the society.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Today, we continue to uphold these traditions while adapting to meet the needs 
              of modern engineering students. We remain committed to academic excellence, 
              professional development, community service, and the brotherhood that has 
              defined Trigon for generations.
            </p>
          </section>
        </div>
      </div>

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
            <div className="italic text-gray-600 mt-2">per dilligentium crescunt frucuts laboris</div>
          </div>
        </div>
      </footer>
    </div>
  );
}