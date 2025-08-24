"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";

export default function Rush() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <Navbar />
      {/* Hero Section */}
      <div className="relative w-full h-96 md:h-[32rem] flex items-center justify-center mb-12">
        <Image
          src="/rush-hero.jpg"
          alt="Recruitment event"
          width={1600}
          height={400}
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg text-center">Recruitment</h1>
        </div>
      </div>

      <div className="w-full flex flex-col items-center px-4">
        {/* Title Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
          Rush Trigon
        </h2>

        {/* Text Blurb Section */}
        <p className="text-lg md:text-xl text-gray-700 text-center max-w-2xl mb-6">
          Interested in joining Trigon? Rush is your opportunity to learn more about our society, meet current members, and participate in fun events. We welcome all engineering students who are passionate about community, leadership, and tradition. Check out our rush calendar below for upcoming events!
        </p>

        {/* Interest Form Section */}
        <div className="w-full mb-10" style={{ backgroundColor: '#8B0000' }}>
          <div className="flex flex-col items-center w-full max-w-2xl mx-auto rounded-lg p-8">
            <h3 className="text-4xl font-semibold text-white mb-2">Interested in Joining?</h3>
            <p className="text-white mb-4">Fill out our interest form for 2025 rush and make sure to come to our rush events!</p>
            <a
              href="https://forms.gle/jTYnkCXaohmWQ8NB9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#8B0000] font-semibold px-6 py-3 rounded hover:bg-gray-200 transition"
            >
              Interest Form
            </a>
          </div>
        </div>

        {/* Calendar Section as Grid View with Images */}
        <div className="w-full max-w-6xl mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Rush Calendar</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Event 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
              <div className="relative w-full h-48">
                <Image src="/bodos.jpg" alt="Bodo's Bagels Event" fill className="object-cover" />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="font-bold text-lg text-blue-900 mb-1">Bodo&apos;s Bagels on Eway</div>
                <div className="text-xs text-gray-500 mb-1">SEP 1 &bull; 9am - 12pm</div>
                <div className="text-sm text-gray-700 mb-1">Location: Darden Courtyard</div>
                <div className="text-gray-700 text-sm flex-1">Come enjoy some Bodo&apos;s Bagels and meet active brothers.</div>
              </div>
            </div>
            {/* Event 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
              <div className="relative w-full h-48">
                <Image src="/around-the-world.jpg" alt="Around the World Party" fill className="object-cover" />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="font-bold text-lg text-blue-900 mb-1">Around the World Party</div>
                <div className="text-xs text-gray-500 mb-1">SEP 5 &bull; 10pm</div>
                <div className="text-sm text-gray-700 mb-1">Location: 121 Shamrock Road</div>
                <div className="text-gray-700 text-sm flex-1">Come have fun at the Trigon House and meet the brothers and travel around the world.</div>
              </div>
            </div>
            {/* Event 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
              <div className="relative w-full h-48">
                <Image src="/canes.jpg" alt="Canes and Games" fill className="object-cover" />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="font-bold text-lg text-blue-900 mb-1">Canes and Games</div>
                <div className="text-xs text-gray-500 mb-1">SEP 10 &bull; 5pm - 8pm</div>
                <div className="text-sm text-gray-700 mb-1">Location: 17 West Lawn</div>
                <div className="text-gray-700 text-sm flex-1">Come enjoy some Raising Canes Chicken and play some lawn games by the Trigon Lawn Room.</div>
              </div>
            </div>
            {/* Event 4 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
              <div className="relative w-full h-48">
                <Image src="/seven-deadly-sins.jpg" alt="7 Deadly Sins Party" fill className="object-cover" />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="font-bold text-lg text-blue-900 mb-1">7 Deadly Sins Party</div>
                <div className="text-xs text-gray-500 mb-1">SEP 12 &bull; 10pm</div>
                <div className="text-sm text-gray-700 mb-1">Location: 121 Shamrock Road</div>
                <div className="text-gray-700 text-sm flex-1">Come have fun at the Trigon House and meet the brothers.</div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="w-full max-w-2xl">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">FAQ</h3>
          <div className="space-y-6">
            <div>
              <p className="font-bold text-gray-900">Do I have to attend every rush event?</p>
              <p className="text-gray-800">Nope! You only have to come to 1 to be considered (but we would love it if you come to more).</p>
            </div>
            <div>
              <p className="font-bold text-gray-900">Is Trigon a fraternity?</p>
              <p className="text-gray-800">No. Trigon is registered as a CIO (Contracted Independent Organization) with UVA. We have many members that are in both Trigon and a traditional social Fraternity/Sorority.</p>
            </div>
            <div>
              <p className="font-bold text-gray-900">Do I have to be an engineering to join?</p>
              <p className="text-gray-800">You are required to be enrolled in the Engineering School to join Trigon.</p>
            </div>
            <div>
              <p className="font-bold text-gray-900">What’s the time commitment?</p>
              <p className="text-gray-800">Trigon is what you make it. We meet every Thursday and have lots of events throughout the year including parties, service events, intramural sports, and an annual semi-formal.</p>
            </div>
            <div>
              <p className="font-bold text-gray-900">Do I have to apply/interview?</p>
              <p className="text-gray-800">Nope, just show up to the rush events and we will take it from there.</p>
            </div>
          </div>
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