import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import BrotherhoodIcon from "../components/icons/BrotherhoodIcon";
import ProfessionalismIcon from "../components/icons/ProfessionalismIcon";
import ServiceIcon from "../components/icons/ServiceIcon";

export default function Home() {
  return (
    <div className="min-h-screen bg-light flex flex-col items-center pt-20">
      <Navbar />

      {/* Hero Section */}
      <header className="relative w-full h-[calc(100vh-80px)] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/121-shamrock-road.jpg"
            alt="Trigon Engineering Society House"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg mb-4">
            Trigon Engineering Society
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto mb-8">
            A brotherhood of engineers dedicated to academic excellence, professional development, and lifelong friendship.
          </p>
          <Link href="#about" className="bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl text-lg">
            Learn More
          </Link>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="w-full py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="text-gray-800">
            <h2 className="text-4xl font-bold mb-6">About Trigon</h2>
            <p className="text-lg mb-4">
              Founded in 1924, the Trigon Engineering Society is one of the oldest and most respected student organizations at the University of Virginia. Our members are leaders in the classroom, in research, and in the community.
            </p>
            <p className="text-lg">
              We are a close-knit community of scholars and friends who support each other in all aspects of life. From social events to community service, Trigon offers a balanced and enriching college experience.
            </p>
          </div>
          <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/lawn.jpg"
              alt="Trigon members on the Lawn"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="w-full py-24 px-4 bg-light">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16">Our Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8 bg-white rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <BrotherhoodIcon />
              <h3 className="text-2xl font-semibold mb-4">Brotherhood</h3>
              <p className="text-gray-700">
                We foster a strong sense of community and belonging among our members, creating lifelong bonds of friendship.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <ProfessionalismIcon />
              <h3 className="text-2xl font-semibold mb-4">Professionalism</h3>
              <p className="text-gray-700">
                We provide our members with the resources and opportunities to succeed in their future careers.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <ServiceIcon />
              <h3 className="text-2xl font-semibold mb-4">Service</h3>
              <p className="text-gray-700">
                We are committed to giving back to the community through various service projects and initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-dark text-white mt-auto py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold">Trigon Engineering Society</h3>
            <p className="text-gray-400">121 Shamrock Road, Charlottesville, VA</p>
          </div>
          <div className="flex gap-8">
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
            <Link href="/members" className="hover:text-primary transition-colors">Members</Link>
            <Link href="/rush" className="hover:text-primary transition-colors">Recruitment</Link>
            <a href="https://instagram.com/trigonatuva" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}