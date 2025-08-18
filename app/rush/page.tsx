"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import Image from "next/image";

const carouselImages = [
  { src: "/121-shamrock-road.jpg", alt: "121 Shamrock Road" },
  { src: "/lawn.jpg", alt: "Trigon Lawn" },
  { src: "/rush-hero.jpg", alt: "Rush Hero" },
];

function Carousel() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden shadow-modern-lg">
      {carouselImages.map((img, i) => (
        <div
          key={img.src}
          className={`absolute inset-0 w-full h-full transition-all duration-1000 ${
            i === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <Image src={img.src} alt={img.alt} fill className="object-cover" />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      
      {/* Carousel indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselImages.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default function Rush() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                Join
              </span>
              <span className="text-gray-900"> Trigon</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Rush is your opportunity to discover our brotherhood, meet amazing engineers, and become part of a legacy that spans generations.
            </p>
          </div>

          {/* Interest Form Card */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="gradient-accent rounded-3xl p-8 md:p-12 text-center shadow-modern-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
                Fill out our interest form for 2025 rush and make sure to attend our exciting events!
              </p>
              <a
                href="https://forms.gle/jTYnkCXaohmWQ8NB9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-red-600 font-bold px-10 py-4 rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg"
              >
                Submit Interest Form
              </a>
            </div>
          </div>

          {/* Calendar Section */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
              Rush <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">Calendar</span>
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Join us for these exciting events and discover what Trigon is all about
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  image: "/bodos.jpg",
                  title: "Bodo's Bagels on Eway",
                  date: "SEP 1",
                  time: "9am - 12pm",
                  location: "Darden Courtyard",
                  description: "Come enjoy some Bodo's Bagels and meet active brothers.",
                  color: "from-orange-500 to-amber-500"
                },
                {
                  image: "/around-the-world.jpg",
                  title: "Around the World Party",
                  date: "SEP 5",
                  time: "10pm",
                  location: "121 Shamrock Road",
                  description: "Come have fun at the Trigon House and travel around the world.",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  image: "/canes.jpg",
                  title: "Canes and Games",
                  date: "SEP 10",
                  time: "5pm - 8pm",
                  location: "17 West Lawn",
                  description: "Come enjoy some Raising Canes Chicken and play some lawn games.",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  image: "/seven-deadly-sins.jpg",
                  title: "7 Deadly Sins Party",
                  date: "SEP 12",
                  time: "10pm",
                  location: "121 Shamrock Road",
                  description: "Come have fun at the Trigon House and meet the brothers.",
                  color: "from-purple-500 to-pink-500"
                }
              ].map((event, index) => (
                <div key={event.title} className="group">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-modern hover:shadow-modern-lg transition-all duration-300 transform group-hover:scale-105">
                    <div className="relative h-48">
                      <Image src={event.image} alt={event.title} fill className="object-cover" />
                      <div className={`absolute top-4 right-4 bg-gradient-to-r ${event.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                        {event.date}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">{event.title}</h3>
                      <div className="text-sm text-gray-500 mb-1">{event.time}</div>
                      <div className="text-sm text-gray-700 mb-3">{event.location}</div>
                      <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "Do I have to attend every rush event?",
                  answer: "Nope! You only have to come to 1 to be considered (but we would love it if you come to more)."
                },
                {
                  question: "Is Trigon a fraternity?",
                  answer: "No. Trigon is registered as a CIO (Contracted Independent Organization) with UVA. We have many members that are in both Trigon and a traditional social Fraternity/Sorority."
                },
                {
                  question: "Do I have to be an engineer to join?",
                  answer: "You are required to be enrolled in the Engineering School to join Trigon."
                },
                {
                  question: "What's the time commitment?",
                  answer: "Trigon is what you make it. We meet every Thursday and have lots of events throughout the year including parties, service events, intramural sports, and an annual semi-formal."
                },
                {
                  question: "Do I have to apply/interview?",
                  answer: "Nope, just show up to the rush events and we will take it from there."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-modern hover:shadow-modern-lg transition-all duration-300">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

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