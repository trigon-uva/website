"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";

const carouselImages = [
  { src: "/group.jpg", alt: "Trigon Brotherhood" },
  { src: "/rnb.jpg", alt: "Member Class 2025" },
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
    <div className="relative w-full h-full min-h-[600px]">
      {carouselImages.map((img, i) => (
        <div
          key={img.src}
          className={`absolute inset-0 w-full h-full transition-all duration-1000 ${
            i === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <Image src={img.src} alt={img.alt} fill className="object-cover brightness-120" priority />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/25 to-black/10"></div>
      
      {/* Carousel indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {carouselImages.map((_, i) => (
          <button
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <Navbar />
      
      {/* Hero Section */}
            {/* Hero Section */}
      <div className="relative min-h-[600px] -mt-20">
        <Carousel />
        <div className="absolute inset-0 flex items-end justify-center pb-24">
          <div className="max-w-7xl w-full px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-6xl md:text-8xl font-bold mb-4 text-white">
                <span className="bg-gradient-to-r from-red-800 to-red-600 bg-clip-text text-transparent">
                  Join Trigon
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20">
          {/* Interest Form Card */}
          <div className="max-w-4xl mx-auto mb-20">

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
          <div className="mb-20 -mx-6 px-6 md:-mx-12 md:px-12 xl:-mx-48 xl:px-24">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
              Rush <span className="bg-gradient-to-r from-red-800 to-red-600 bg-clip-text text-transparent">Calendar</span>
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Join us for these exciting events and discover what Trigon is all about
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
              {[
                {
                  image: "/expo.png",
                  title: "Engineering Expo Booth",
                  date: "AUG 26",
                  time: "9am - 2pm",
                  location: "Darden Courtyard",
                  description: "Stop by our booth at the Engineering Expo to learn more about Trigon!",
                  color: "from-red-500 to-red-600"
                },
                {
                  image: "/party1.jpg",
                  title: "Around the World Party",
                  date: "SEP 5",
                  time: "10pm",
                  location: "Trigon House: 121 Shamrock Road",
                  description: "Come have fun at the Trigon House and travel around the world.",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  image: "/football-watch-party.jpg",
                  title: "Football Game Watch Party",
                  date: "SEP 6",
                  time: "12pm - 4pm",
                  location: "Trigon House: 121 Shamrock Road",
                  description: "Join us for a football game watch party with snacks and friends!",
                  color: "from-red-500 to-orange-500"
                },
                {
                  image: "/canes2.jpg",
                  title: "Canes and Games on the Lawn",
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
                  location: "Trigon House: 121 Shamrock Road",
                  description: "Come have fun at the Trigon House and meet the brothers.",
                  color: "from-purple-500 to-pink-500"
                }
              ].map((event) => (
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
              Frequently Asked <span className="bg-gradient-to-r from-red-800 to-red-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "Do I have to attend every rush event?",
                  answer: "Nope! You only have to come to 1 to be considered (but we would love it if you come to more)."
                },
                {
                  question: "Is Trigon a fraternity?",
                  answer: "No, while many refer to Trigon as an engineering fraternity, we are registered as a CIO (Contracted Independent Organization) with UVA. We have many members that are in both Trigon and a traditional social Fraternity/Sorority."
                },
                {
                  question: "Do I have to be an engineer to join?",
                  answer: "Yes, you are required to be enrolled in the Engineering School to join Trigon."
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
              <Image src="/trigonnobg.png" alt="Trigon Logo" width={80} height={80} className="rounded-full shadow-lg" />
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
                &quot;Per dilligentium crescunt frucuts laboris&quot;
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